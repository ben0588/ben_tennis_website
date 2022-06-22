import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery'

import imgUrl2 from '../image/horizontal/0001.jpg';
import imgUrl3 from '../image/horizontal/002.jpg';
import imgUrl4 from '../image/horizontal/003.jpg';

$('.carousel').carousel({
    interval: 100
  });

$('.carousel-item').emulateTransitionEnd(100)


// $('#main_carousel').carousel({
//     interval: 6000
//   }).on('slide.bs.carousel',function(){
//     var visD = $(this).find(".active video");
//     setTimeout(function() {
//              visD[0].play();
//           }, 3000);
// }); 


class Carousel1 extends Component {
    state = { 
    }
    imageStyle = {
        // 'width': '100%',
        'height': '230px',
        'objectFit':'cover',
        // 'object-fit':'fill',
        'padding':'0px 1%'
    }

    luStyle = {
        'object-fit':'cover'
    }
     
    //  componentDidMount(){
    //     var myCarousel = document.getElementById('carouselExampleControls')
    //     myCarousel.addEventListener('slide.bs.carousel', function () {
    //         this.startComp = setInterval(()=>{
    //         this.setState({})      
    //     })  
    // },100)}

    // componentDidMount(){
    //     var myCarousel = document.getElementById('carouselExampleControls')
    //     myCarousel.addEventListener('slide.bs.carousel', function () {
    //         this.startComp = setInterval(()=>{
    //         this.setState({"data-ride":"carousel"})      
    //     })  
    // },100)}


    render() { 
        return (
            <div>
                <div id="carouselExampleControls"
                 className="carousel slide " 
                 data-ride="carousel" 
                 data-interval="100" touch="true" wrap="true"
                 style={this.imageStyle}>   
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img 
                style={this.imageStyle}
                src={imgUrl2} className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={imgUrl3} 
                style={this.imageStyle}
                className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src={imgUrl4} 
                style={this.imageStyle}
                className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </button>
            </div>
            </div>
        );
    }
}
 
export default Carousel1;