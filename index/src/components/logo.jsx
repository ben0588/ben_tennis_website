import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../image/logo/logo11.png' 
import 'bootstrap/dist/css/bootstrap.css';

class Logo extends Component {
    state = { 
        logoStyle:{
            'height':'75px',
            'width':'190px',
            'display':'flex',
            'margin':'1% auto 0px'
        }   
     } 
    render() { 
        return (
            <div>
            <NavLink to="/" exact>
            <img src={logoImg} 
                style={this.state.logoStyle}
                alt=""/>
            </NavLink>
            </div>
        );
    }
}
 
export default Logo;