import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import '../js/jquery-3.6.0';
import '../js/bootstrap.js';
import {Carousel} from 'react-bootstrap'



import '../css/carouselTest1.css'
import img1 from '../image/straight/001.jpg';
import img2 from '../image/straight/002.jpg';
import img3 from '../image/straight/003.jpg';
import img4 from '../image/straight/004.jpg';


class Carousel00 extends Component {
    state = { 

     } 
    render() { 
        return (  
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="100"
            >
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner" >
                <div className="carousel-item active">
                  <img className="d-block w-100" src={img1} alt="First slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={img2} alt="Second slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={img3} alt="Third slide"/>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src={img4} alt="Third slide"/>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden={true}></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden={true}></span>
                <span className="sr-only">Next</span>
              </a>
              </div>

         ) ;
    }
}
 
export default Carousel00;