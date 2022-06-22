import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import "../css/video.css";
import video1 from '../image/mp4/001.mp4'
import video2 from '../image/mp4/002.mp4'
class VideoMp4 extends Component {
    state = { 
     } 

    render() { 
        return (
            <div className='player-wrapper'>
            <ReactPlayer url={video1} 
            className='react-player'
            playing={true} 
            loop={true} 
            muted={true}
            width="100%"
            height="80%"
            />
            </div>
        );
    }
}
 
export default VideoMp4;