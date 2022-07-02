import React, { Component } from 'react';
import '../../scss/all.css';

import 'aos/dist/aos.css';
import AOS from 'aos';

// import 'bootstrap/dist/js/bootstrap';
import { NavLink } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCard from './carouselCard/carouselCard.jsx'

import leftImg from '../../img/ben01.jpg';


import IndexRightBox from '../contentComponents/indexComponents/indexRightBox.jsx';
import IndexLeftBox from '../contentComponents/indexComponents/indexLeftBox.jsx';


class HomeHead extends Component {
    state = { 

        // header 左側區塊設定
        oneLeftBoxStyle:[
            {id:1,title:"這是一段標題1",value:"介紹內容",BottomText:"加入會員1",src1:leftImg,to:"/coursesAndVenues"},
        ],
        // header 右側區塊設定
        oneRightBoxStyle:[
            {id:1,value:"這是一段標題1",src:rightImg,imgAlign:"rightBoxTopImg",TextAlign:"rightBoxBottomText",to:"/coursesAndVenues"},
            {id:2,value:"這是一段標題2",src:rightImg4,imgAlign:"rightBoxBottomImg",TextAlign:"rightBoxTopText",to:"/coursesAndVenues"},
            {id:3,value:"這是一段標題3",src:rightImg2,imgAlign:"rightBoxTopImg",TextAlign:"rightBoxBottomText",to:"/coursesAndVenues"},
            {id:4,value:"這是一段標題4",src:rightImg3,imgAlign:"rightBoxBottomImg",TextAlign:"rightBoxTopText",to:"/coursesAndVenues"},
        ]

    } 

    render() { 
        return (
        <div>



{/* 第一層header */}
        <header>
            {/* header第一段左邊 */}
            <div className='HomeHeadBoxStyle row container m-auto'                                                             

                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
            >
                {this.state.oneLeftBoxStyle.map((e,index)=>{return <IndexLeftBox 
                        id={e.id} key={index} title={e.title} value={e.value} src={e.src1}
                        to={e.to} BottomText={e.BottomText}
                        
                />  })}
                

            {/* header第一段右邊圖片牆 */}
                <div className='col-12 col-sm-7 HomeHeadBoxRight'>
                    <div className='HomeHeadBoxRightImgBox'>
                        <div className='HomeHeadBoxRightText row-cols-4 ' >  
                        {this.state.oneRightBoxStyle.map((e,index)=>{return <IndexRightBox 
                        id={e.id} key={index} value={e.value} src={e.src}
                        imgAlign={e.imgAlign}  
                        textAlign={e.TextAlign}
                        to={e.to
                        }/>  })}
                        </div>

                    </div>     
                </div>
            </div>
        </header>
        
        </div>
        );
    }
}
 
export default HomeHead;