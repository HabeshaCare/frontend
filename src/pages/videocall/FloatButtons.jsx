import React from 'react';
import { Button } from '@/components/ui/button';

function FloatButtons({isVideoEnabled, isAudioEnabled, toggleVideo, toggleAudio, leaveCall}) {
    return (
        <div className="fixed bottom-4 z-10 space-x-5" >
           <Button variant="round" className="bg-gray-500 text-white" onClick={toggleAudio} >{isAudioEnabled ? 'M' : 'NM'}</Button> 
           <Button variant="round" className="bg-red-500 text-white" onClick={leaveCall}>E</Button> 
           <Button variant="round" className="bg-blue-500 text-white" onClick={toggleVideo}>{isVideoEnabled ? 'V': 'NV'}</Button> 
    
        </div>
    )
}

export default FloatButtons
