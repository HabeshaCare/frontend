import React from 'react';
import { Button } from '@/components/ui/button';
import { FaVideo } from "react-icons/fa6";
import { FaVideoSlash } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaMicrophoneSlash } from "react-icons/fa6";
import { MdCallEnd } from "react-icons/md";

function FloatButtons({ isVideoEnabled, isAudioEnabled, toggleVideo, toggleAudio, leaveCall }) {
    return (
        <div className="fixed bottom-4 z-10 space-x-5" >
            <Button variant="round" className="bg-gray-500 text-white text-xl" onClick={toggleAudio} >{isAudioEnabled ? <FaMicrophone /> : <FaMicrophoneSlash />}</Button>
            <Button variant="round" className="bg-red-500 text-white text-xl" onClick={leaveCall}><MdCallEnd /></Button>
            <Button variant="round" className="bg-blue-500 text-white text-xl" onClick={toggleVideo}>{isVideoEnabled ? <FaVideo /> : <FaVideoSlash />}</Button>

        </div>
    )
}

export default FloatButtons
