import { Button } from "@/components/ui/button";
import FloatButtons from "@/pages/video-call/FloatButtons";
import VideoPlayer from "@/pages/video-call/VideoPlayer";
import { useEffect, useRef, useState } from "react";

import io from "socket.io-client";

function VideoChat() {
    const [token, setToken] = useState("");
    const [timeToConnect] = useState(15 * 1000000); // Time in milliseconds
    const [schedule] = useState({
        id: "6650b9598d0b9c0918efd4d0",
        from: "2024-05-24T15:59:56Z",
        to: "2024-05-24T16:45:56Z",
        lastUpdated: "2024-05-24T15:59:20.638Z",
        confirmed: false,
        scheduler: "John Doe",
        doctor: "Bruce wane",
        meetingUrl: "9431811c-9518-475a-8770-a6f1a80e9d10",
        duration: 46
    });

    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [receivingCall, setReceivingCall] = useState(false);
    const [calling, setIsCalling] = useState(false);
    const [isVideoEnabled, setIsVideoEnabled] = useState(true);
    const [isAudioEnabled, setIsAudioEnabled] = useState(true);
    const [connectionId, setConnectionId] = useState("");

    const streamRef = useRef();
    const localStreamRef = useRef();
    const remoteStreamRef = useRef();
    const connectionRef = useRef();

    const didIOffer = useRef(false);
    const [offers, setOffers] = useState([]);

    const socket = useRef(
        io.connect("http://localhost:8181", {
            // io.connect("https://192.168.43.61:8181", {
            query: {
                token: token,
            },
            autoConnect: false,
        })
    );

    let peerConfiguration = {
        iceServers: [
            {
                urls: ["stun:stun.l.google.com:19302", "stun:stun1.l.google.com:19302"],
            },
        ],
    };
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const connectionId = urlParams.get('id');
        //TODO: Set appropriate token value from state here
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlcm5hbWUiOiJKb2huIERvZSIsInJvbGUiOiJQYXRpZW50IiwiaWF0IjoxNTE2MjM5MDIyfQ.pDXNWt-uYmsz4sT5hYMGpjQcs0N31LytcbYv5CkiES4";
        setToken(token);
        setConnectionId(connectionId);

        socket.current.io.opts.query = { token: token, connectionId: connectionId };
        socket.current.connect();
        console.log("Trying to connect to socket");
    }, []);

    useEffect(() => {
        socket.current.on("connected", async (data) => {
            didIOffer.current = data.didIOffer;
            if (didIOffer.current) {
                await callUser();
                setIsCalling(true);
            } else {
                setReceivingCall(true);
                await answerCall(data.offerObj);
            }
        });
        //on connection get all available offers and call createOfferEls
        socket.current.on("availableOffers", (offers) => {
            console.log(offers);
            setReceivingCall(true);
            setOffers(offers);
        });

        //someone just made a new offer and we're already here - call createOfferEls
        socket.current.on("newOfferAwaiting", (offers) => {
            console.log(offers);
            setReceivingCall(true);
            setOffers(offers);
        });

        socket.current.on("answerResponse", (offerObj) => {
            console.log(offerObj);
            addAnswer(offerObj);
        });

        socket.current.on("receivedIceCandidateFromServer", (iceCandidate) => {
            addNewIceCandidate(iceCandidate);
            console.log(iceCandidate);
        });

        socket.current.on("connect_error", (error) => {
            console.log("Connection Error", error);
        });

        socket.current.on("notification", (data) => {
            console.log("Notification: ", data);
        });

        socket.current.on("sessionEnded", () => {
            console.log("Session Ended event fired");
            leaveCall();
        });

        const socketRef = socket.current;

        return () => {
            resetStates();
            socketRef.off();
        };
    }, []);

    const connect = () => {
        socket.current.io.opts.query = {
            token: token,
            connectionId: connectionId,
        };
        socket.current.connect();
    };

    const callUser = async () => {
        if (!socket.current.connected) {
            connect();
        }

        await fetchUserMedia();

        //peerConnection is all set with our STUN servers sent over
        await createPeerConnection();

        //create offer time!
        try {
            console.log("Creating offer...");
            const offer = await connectionRef.current.createOffer();
            console.log(offer);
            connectionRef.current.setLocalDescription(offer);
            didIOffer.current = true;
            socket.current.emit("newOffer", { newOffer: offer, connectionId }); //send offer to signalingServer
        } catch (err) {
            console.log(err);
        }
    };

    const answerCall = async (offerObj) => {
        setCallAccepted(true);
        await fetchUserMedia();
        await createPeerConnection(offerObj);
        const answer = await connectionRef.current.createAnswer({}); //just to make the docs happy
        await connectionRef.current.setLocalDescription(answer); //this is CLIENT2, and CLIENT2 uses the answer as the localDesc
        console.log(offerObj);
        console.log(answer);
        // console.log(peerConnection.signalingState) //should be have-local-pranswer because CLIENT2 has set its local desc to it's answer (but it won't be)
        //add the answer to the offerObj so the server knows which offer this is related to
        offerObj.answer = answer;
        //emit the answer to the signaling server, so it can emit to CLIENT1
        //expect a response from the server with the already existing ICE candidates
        const offerIceCandidates = await socket.current.emitWithAck(
            "newAnswer",
            offerObj
        );
        offerIceCandidates.forEach((c) => {
            connectionRef.current.addIceCandidate(c);
            console.log("======Added Ice Candidate======");
        });
        console.log(offerIceCandidates);
        socket.current.emit("sessionStarted", timeToConnect);
        console.log("Session starting socket event emitted");
    };

    const addAnswer = async (offerObj) => {
        //addAnswer is called in socketListeners when an answerResponse is emitted.
        //at this point, the offer and answer have been exchanged!
        //now CLIENT1 needs to set the remote
        setCallAccepted(true);
        try {
            await connectionRef.current.setRemoteDescription(offerObj.answer);
        } catch (error) {
            console.log(error);
            console.log(connectionRef.current.signalingState);
        }
    };

    const fetchUserMedia = async () => {
        try {
            streamRef.current = await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true,
            });

            if (streamRef.current) {
                localStreamRef.current.srcObject = streamRef.current;
                console.log("Setting local Stream");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const createPeerConnection = async (offerObj) => {
        //RTCPeerConnection is the thing that creates the connection
        //we can pass a config object, and that config object can contain stun servers
        //which will fetch us ICE candidates
        try {
            connectionRef.current = new RTCPeerConnection(peerConfiguration);
            const remoteStreamLocal = new MediaStream();

            if (streamRef.current && remoteStreamRef.current) {
                remoteStreamRef.current.srcObject = remoteStreamLocal;
                console.log("Setting remote source stream");
            }

            localStreamRef.current?.srcObject.getTracks().forEach((track) => {
                //add localtracks so that they can be sent once the connection is established
                connectionRef.current.addTrack(track, localStreamRef.current.srcObject);
            });

            connectionRef.current.addEventListener(
                "signalingstatechange",
                (event) => {
                    console.log(event);
                    console.log(connectionRef.current.signalingState);
                }
            );

            connectionRef.current.addEventListener("icecandidate", (e) => {
                console.log("........Ice candidate found!......");
                console.log(e);
                if (e.candidate) {
                    socket.current.emit("sendIceCandidateToSignalingServer", {
                        iceCandidate: e.candidate,
                        didIOffer: didIOffer.current,
                    });
                }
            });

            connectionRef.current.addEventListener("track", (e) => {
                console.log("Got a track from the other peer!! How exciting");
                console.log(e);
                e.streams[0].getTracks().forEach((track) => {
                    remoteStreamRef.current.srcObject?.addTrack(
                        track,
                        remoteStreamRef.current?.srcObject
                    );
                    console.log("Here's an exciting moment... fingers cross");
                });
            });

            if (offerObj) {
                //this won't be set when called from call();
                //will be set when we call from answerOffer()
                // console.log(peerConnection.signalingState) //should be stable because no setDesc has been run yet
                await connectionRef.current.setRemoteDescription(offerObj.offer);
                // console.log(peerConnection.signalingState) //should be have-remote-offer, because client2 has setRemoteDesc on the offer
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addNewIceCandidate = (iceCandidate) => {
        connectionRef.current.addIceCandidate(iceCandidate);
        console.log("======Added Ice Candidate======");
    };

    const leaveCall = () => {
        setCallEnded(true);
        connectionRef.current.close();
        socket.current.disconnect();
        resetStates();
    };

    const resetStates = () => {
        setCallEnded(false);
        setCallAccepted(false);
        setIsCalling(false);
        setReceivingCall(false);
        setOffers([]);
    };

    const toggleVideo = () => {
        if (localStreamRef.current && localStreamRef.current.srcObject) {
            const enabled =
                localStreamRef.current.srcObject.getVideoTracks()[0].enabled;
            localStreamRef.current.srcObject.getVideoTracks()[0].enabled = !enabled;
            setIsVideoEnabled(!enabled);
        }
    };

    const toggleAudio = () => {
        if (localStreamRef.current && localStreamRef.current.srcObject) {
            const enabled =
                localStreamRef.current.srcObject.getAudioTracks()[0].enabled;
            localStreamRef.current.srcObject.getAudioTracks()[0].enabled = !enabled;
            setIsAudioEnabled(!enabled);
        }
    };

    return (
        <main>
            <head>
                <title>React Video chat</title>
                <section>
                    <VideoPlayer />
                </section>
                <>
                    <FloatButtons />
                </>
            </head>
        </main>
    );
}

export default VideoChat;

{/* <div>
                {receivingCall && !callAccepted ? (
                    <div className="caller">
                        {offers.map((offer) => {
                            return (
                                <>
                                    <h1 key={Math.random() * 1_000_000}>
                                        {offer.offererUserName} is calling...
                                    </h1>
                                    <Button
                                        key={Math.random() * 1_000_000}
                                        variant="contained"
                                        color="primary"
                                        onClick={() => answerCall(offer)}
                                    >
                                        Answer {offer.offererUserName}
                                    </Button>
                                </>
                            );
                        })}
                    </div>
                ) : null}
            </div>
            <div>
                {calling && !callAccepted ? (
                    <div className="caller">
                        <h1>No one in the call yet...</h1>
                    </div>
                ) : null}
            </div> */}