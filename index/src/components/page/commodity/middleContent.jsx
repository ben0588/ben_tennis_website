import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import LeftNavButton from './LeftNavButton.js'
import BuyCard from './buyCard.js';
import 'bootstrap/dist/css/bootstrap.css'
// import topImg1 from '../image/brandedGoods/1234567.png'
import Axios from 'axios'

class MiddleContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            frameStyle:{
                backgroundColor:'',height:'100%',width:'100%',display:'flex',marginTop:'4%',marginLeft:'0px'
            },
            rightStyle:{
                backgroundColor:'none',height:'100%',width:'100%',marginTop:'35px'
            },
            topStyle:{
                backgroundColor:'blue',height:'70px',width:'100%',
            },
            commodity:[
                {id:0,value1:"Dunlop CX-200 2021",originalPrice:1900,discount:0.5,src:'http://nanda.menet.com.tw/images/product_images/xl/7214964462.jpg'},
                {id:1,value1:"Phantom 107G",originalPrice:1800,discount:0.6,src:'http://cdn.sportshop.com/catalog/product/580/580/1/4/140497_1.jpg'},
                {id:2,value1:"ULTRA 100-V3 NAKED",originalPrice:1400,discount:0.6,src:'http://www.wilson.com/en-us/media/catalog/product/e/0/e0670cdf-017d-42ce-a403-370e8a5e1d58_ike01xunvjleoyid.png?dpr=4&fit=bounds&orient=1&quality=90&optimize=high&format=jpg&auto=webp&enable=upscale&width=1198&height=961&canvas=4792%2C3844&bg-color=f5f5f5'},
                {id:3,value1:"SPEED TEAM 2022",originalPrice:1200,discount:0.6,src:'http://headsports.com.tw/ezfiles/813/1813/plugin/ec/pictures/163/m/mczh-tw1000x1000_large99645.jpg'},
                {id:4,value1:"Dunlop CX-200 2021",originalPrice:1900,discount:0.5,src:'http://nanda.menet.com.tw/images/product_images/xl/7214964462.jpg'},
                {id:5,value1:"Dunlop CX-200 2021",originalPrice:1900,discount:0.5,src:'http://nanda.menet.com.tw/images/product_images/xl/7214964462.jpg'},
                {id:6,value1:"Dunlop CX-200 2021",originalPrice:1900,discount:0.5,src:'http://nanda.menet.com.tw/images/product_images/xl/7214964462.jpg'},
                
            ],
            allListBigName:[
                {id:0,value:"??????"},
                {id:1,value:"?????????"},
                {id:2,value:"??????"},
            ],
            allListSimName:[
                {id:0,value1:"??????1"},
                {id:1,value1:"??????1"},
                {id:2,value1:"??????2"}
            ],
            
        }
    }

    addShoppingCartCount =(e)=>{
        localStorage.setItem("Test",JSON.stringify(this.state.commodity));
        // localStorage.setItem("Test",JSON.stringify(this.state.commodity));
        // localStorage.setItem("Test",this.state.commodity);
        // alert("OK");
        const max1 = document.getElementById('max');
        console.log(max1)
        // max1.innerText = this.state.commodity[0]
        max1.innerText = JSON.stringify(this.state.commodity[0])
        max1.innerText = JSON.stringify(this.state.commodity[0].id)
        // max1.innerText = JSON.stringify((this.state.commodity[0].id == 0 )? this.state.commodity[0].value:"NO");
        console.log(this.state.commodity[0].id);

    }

    // addShoppingCartCount= (e)=>{
    //     var a = localStorage.setItem(this.props.id,this.props.value);
    //     // this.setState({a});
    //     console.log(a);
    // }

    render() {
        return (
            <>  
            {/* ????????????????????? */}
            <div style={this.state.topStyle}  >
                <img style={{maxWidth:'100%',height:'auto'}} className=''/>
            </div>
                
            <div style={this.state.frameStyle} >
            <div className='col1 ml-2 justify-content-center' style={{}} >
                    <br/>
                {/* ????????????????????? */}
                {this.state.allListBigName.map((e,index)=>{return <LeftNavButton id={e.id} key={index} value={e.value}/>  })}
                
            </div>
                <div className='col-10' style={this.state.rightStyle}>
                
                <div className='row d-flex justify-content-center container m-auto '>
                {/* ?????????????????? */}

                
                {/* {this.state.commodity.map((e,index)=>{
                    return  <BuyCard 
                    doClick={this.addShoppingCartCount} 
                    // id(=?????????????????????????????????,???????????????BuyCard??????this.props.id)????????????
                    data1={this.state.commodity}
                    id={e.id} 
                    key={index} 
                    value={e.value}
                    number={e.originalPrice} 
                    discount={e.discount} 
                    src={e.src} 
                    /> 
            
                    })} */}
                <BuyCard data={this.state.commodity}/>
                
                
                
       
                </div>
                </div>
                
            </div>
            </>
        )} ;
    
}
 
export default MiddleContent;