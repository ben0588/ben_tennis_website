import React, { Component } from 'react';
import BottomValue from '../bottomValue.js'
class ContactUs extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <button className='square'>
            {this.props.value}
            </button>
            聯絡我們測試中
            <BottomValue/>
            </>
        );
    }
}
 
export default ContactUs;