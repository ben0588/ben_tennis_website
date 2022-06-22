import React, { Component } from 'react';
import VideoMp4 from "../components/video.jsx"
class VideoContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            videoStyle: { 
            minHeight:'500px', 
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            },
            
        }
    }
    render() { 
        return (
            <div>
            <div style={this.state.videoStyle}>
                123
                <VideoMp4 />
            </div>

            <div>
            Scroll Up and Down this page to see the parallax scrolling effect.
            This div is just here to enable scrolling.
            Tip: Try to remove the background-attachment property to remove the scrolling effect.
            </div>
            </div>
        );
    }
}
 
export default VideoContent;