import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import imgUrl2 from '../image/horizontal/0001.jpg';
import imgUrl3 from '../image/horizontal/002.jpg';
import imgUrl4 from '../image/horizontal/003.jpg';



class Carousel2 extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <Carousel 
                autoPlay={true} 
                autoFocus={true}  
                centerMode={true} //響應式
                emulateTouch={true} //觸碰式
                infiniteLoop={true} //無限撥放
                interval="5000" //間隔時間默認3S
                centerSlidePercentage="100"
                preventMovementUntilSwipeScrollTolerance={true}
                showStatus={false}
                showIndicators={false}
                dynamicHeight="30%"
                showThumbs={false}
                showIndiCators={false}
                showArrows={false}
                
                >
                <div>
                    <img src={imgUrl2}/>
                </div>
                <div> 
                    <img src={imgUrl3} />
                </div>
                <div>
                    <img src={imgUrl4}/>
                </div>
                </Carousel>
            </div>
        );
    }
}
 
export default Carousel2;