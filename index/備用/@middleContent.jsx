import React, { Component } from 'react';
import LeftNavButton from './LeftNavButton.js'
import BuyCard from './buyCard.js';
class MiddleContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            frameStyle:{
                backgroundColor:'red',height:'500px',width:'100%',display:'flex'
            },
            rightStyle:{
                backgroundColor:'black',height:'500px',width:'100%',
            },
            topStyle:{
                backgroundColor:'blue',height:'60px',width:'100%',
            }
        }
    }

    render() {
        return (
            <>  
            <div style={this.state.topStyle}>
                123
            </div>
                
            <div style={this.state.frameStyle} >
            <div className='col-3 ml-0 ' style={{backgroundColor:'red'}}>
                    <br/>
                    <LeftNavButton />
                    <LeftNavButton/>
                    <LeftNavButton/>
                    <LeftNavButton/>
            </div>
                <div className='col-9' style={this.state.rightStyle}>123
                <div className='col-12' style={{backgroundColor:'red',height:'30px'}}>123</div>
                <div style={{height:'420px',backgroundColor:'blue'}}>
                    內容放這裡
                </div>
                <div className='col-12' style={{backgroundColor:'red',height:'30px',bottom:0}}>123</div>
                
                </div>
                
            </div>
            <div className='col-12 d-flex align-items-end' style={{backgroundColor:'blue',height:'50px'}}>12asdasdasdasdsd3</div>
            </>
        )} ;
    
}
 
export default MiddleContent;