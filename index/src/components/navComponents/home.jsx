import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import CarouseOK from '../carouselOK.jsx'
import Content1 from '../content.jsx'
import VideoMp4 from '../video.jsx'
import BottomValue from '../bottomValue.js';
class home extends Component {
    state = {  } 
    render() { 
        return (
            <div>
               <CarouseOK/>
               <Content1/>
               <VideoMp4/>
               <BottomValue/>
            </div>
        );
    }
}
 
export default home;