import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import {useState} from 'react';

import video1 from '../image/mp4/001.mp4'
import video2 from '../image/mp4/002.mp4'

import '../css/carouselOK.css'
import img1 from '../image/straight/001.jpg';
import img2 from '../image/straight/002.jpg';
import img3 from '../image/straight/003.jpg';
import img4 from '../image/straight/004.jpg';
{/* <img 
style={imageStyle.cardImage}
className="d-block w-100 mx-auto"
src={img1}
alt="First slide"
/> */}
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    
    const imageStyle ={
        cardImage: {
            objectFit: 'cover',
            borderRadius: 20,
            width:'60hv',
            height: '300px',
            justifyContent:'center'
        }
    }

    return (
      <Carousel activeIndex={index} 
      onSelect={handleSelect} interval={2000} indicators={false} nextLabel={null} prevLabel={null}  
      fade
        >
        <Carousel.Item>
        <video class="video-fluid"  autoPlay={true} loop={true} muted={true}
        style={{width:'100%',height:'300px',objectFit: 'cover', borderRadius: 20}}> 
          <source src={video2} type="video/mp4" />
        </video>
          <Carousel.Caption>
            <h3>Wilson 2022 法網公開賽</h3>
            <p>四大公開賽中唯一的紅土比賽! Lorem ipsum dolor sit</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
           style={imageStyle.cardImage}
            className="d-block w-100"
            src={img2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            <h3>年度最佳品牌 Wilson</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
           style={imageStyle.cardImage}
            className="d-block w-100"
            src={img3}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p>
         
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
           style={imageStyle.cardImage}
            className="d-block w-100"
            src={img4}
            alt="Third slide"
          />
  
          <Carousel.Caption>
            <h3></h3>
            <p>
              
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
  
export default ControlledCarousel;