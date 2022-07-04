import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../../../js/jquery-3.6.0';


import '../css/content1.css'
import VideoMp4 from "../../video/video.jsx"
import img1 from '../image/straight/001.jpg';
import img2 from '../image/straight/002.jpg';
import img3 from '../image/straight/003.jpg';
import img4 from '../image/straight/004.jpg';
import img5 from '../image/straight/005.jpg';

class Content1 extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                
            <div className='container' id="hr1">
            {/* <p className='text-black'>熱門介紹</p> */}
            </div>

            <div id="content" className="row row-cols-5 clearfix container" >
            <div id="contentImgBox" >
                <img  src={img1} alt="" />
                <div id="textBoxSize" className="m-auto p-4 ">
                <h3>競賽級ATP<br/>指定網球</h3>
                <p>耐用且好掌控！網球 TB920 曾經在 ATP 250系列賽摩澤爾網球公開賽上大受好評</p>
                </div>
            </div>
    
            <div id="contentImgBox">
                <div id="textBoxSize" className="m-auto p-4 ">
                    <h3>Wilson<br/>2022<br/>法網公開賽</h3>
                    <p>首年合作<br/>集蓋就送！</p>
                    </div>
                <img src={img2} alt=""/>
            </div>
    
            <div id="contentImgBox">
                <img className="w-100" src={img3} alt=""/>
                <div id="textBoxSize" className="m-auto p-4 ">
                    <h3>2022<br/>BOOM上市</h3>
                    <p>適合所有玩家，從休閒到高級，都可以通過BOOM盡情享受樂趣。</p>
                    </div>
            </div>
    
            <div id="contentImgBox">
                <div id="textBoxSize" className="m-auto p-4  ">
                    <h3>最新型球拍</h3>
                    <p>Soft Feel技術讓你可以精準的控球，同時又能舒適地擊球。</p>
                    </div>
                <img src={img4} alt=""/>
            </div>
            
            <div id="contentImgBox" >
                <img src={img5} alt=""/>
                <div id="textBoxSize" className="m-auto p-4 ">
                    <h3>2022<br/>SPEED上市</h3>
                    <p>SPEED 專為速度和快速揮拍而設計，引入了新的 Auxetic 結構，帶來了更加震撼的感覺。</p>
                    </div>
            </div>
        </div>

        <div className='container' id="hr2">
            {/* <p className='text-black'>熱門介紹</p> */}
        </div>

        
        </React.Fragment>
        );
    }
}

export default Content1;