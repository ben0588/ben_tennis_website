import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'

class NavBarTop extends Component {
    state = { 
        navBarTopStyle:{
            x:"mr-2 float-right btn btn-outline-success",
           
        }
     } 

    render() { 
        return (
            <React.Fragment>
            <div className='sticky-top mt-2 mr-2 clearfix'>
            <NavLink className={this.state.navBarTopStyle.x}to="//login">購物車</NavLink>
            <NavLink className={this.state.navBarTopStyle.x}to="/MemberSignUp">註冊</NavLink>
            <NavLink className={this.state.navBarTopStyle.x} to="/login">會員登入</NavLink>
            </div>
            </React.Fragment>
        );
    }
}
 
export default NavBarTop;