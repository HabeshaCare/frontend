import React from 'react'

function VideoPlayer({ stream, callAccepted, callEnded, callerName, receiverName }) {
    return (
        <>
            {stream && (<div className={callAccepted && !callEnded ? "fixed top-4 right-4 z-10 h-60 w-40 shadow-lg animate-in" : "fixed top-0 left-0 right-0 bottom-0"}>
                <h1 className={callAccepted && !callEnded ? "absolute top-2 right-2 z-10 font-medium text-md pb-2 text-gray-200" : "absolute top-2 left-3 z-10 font-medium text-md mb-2 text-gray-200"}>{receiverName}</h1>
                <video playsInline muted autoPlay className={callAccepted && !callEnded ? "scale-x-[-1] object-cover h-60 w-40 rounded-md" : "scale-x-[-1] object-cover h-full w-full"}>
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <p>Your browser cannot play the provided video file.</p>
                </video>
            </div>)}
            {callAccepted && !callEnded && (<div className="fixed top-0 left-0 right-0 bottom-0">
                <h1 className="absolute top-2 left-3 z-10 font-medium text-md pb-2 text-gray-200">{callerName}</h1>
                <video playsInline muted autoPlay className="scale-x-[-1] object-cover h-full w-full">
                    <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                    <p>Your browser cannot play the provided video file.</p>
                </video>
            </div>)}
        </>

    )
}

export default VideoPlayer