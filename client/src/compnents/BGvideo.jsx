import React from 'react';
import video from '../assets/img/candel_video.mp4';
import './css/BGvideo.css';

function BGvideo() {
    return (
        <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
}

export default BGvideo;