import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import './buyCard.css'
import ShoppingCart from './navComponents/shoppingCart.jsx'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';



class BuyCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            flag:0,
            count:0,
            frameStyle:{
                backgroundColor:'',height:'410px',width:'100%',
                // marginTop:'-20px',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center'
            },
            textStyle:{
                display: 'flex',
                // alignItems: 'center',
                justifyContent: 'center'

            },
            colorStyle:{
                color:'red'
            },
            twoBtnStyle:{
                display: 'flex',
                // alignItems: 'center',
                justifyContent: 'center',
            },
            sellingPrice:'1199',
            // originalPrice:'1999',
            // productName:'YONEX VCORE-PRO-97網球拍',
            // imgUrl:'../image/brandedGoods/YONEX/YONEX VCORE PRO 97 網球拍/5948252011.jpg',
            value:this.props.value,
            number:this.props.number,
            discount:this.props.discount,
            imgUrl:this.props.imgUrl,
            imgStyle:{
                height:'200px',width:'100%'
            },
            imgTest:{
                src:'https://dummyimage.com/200x200/00bebe/fff'
            },
            // commodity :{
            //     commodityID : this.props.id,
            //     commodityValue : this.props.value,
            //     commoditySrc : this.props.src,
            // }
            id:this.props.id,
            

        }
    }

    handleClick = ()=> {
        this.setState({
          flag: this.state.flag === 0 ? 1 : 0
        });
    }

    // test =()=>{
    //     // return <NavLink to="/shoppingCart"></NavLink>
    //     console.log("OK")

    // }

    test = (e)=>{
        var commodity ={
            commodityID : this.props.id,
            commodityValue : this.props.value,
            commoditySrc : this.props.src,

        };
        // localStorage.setItem('commodity',this.props.id,this.props.value,this.props.src);
        // localStorage.setItem(this.state.commodity.commodityID,this.props.value);
        localStorage.key(this.props.date)
        localStorage.setItem(this.props.id,this.props.value);
    }
    

    render() { 
        return (
            <>
            <div style={this.state.frameStyle} className="container col-3">

                <div className="shadow" style={{backgroundColor:'#C9E265',height:'75%',width:'200px'}}>

                {/* 設定商品圖片 */}
                <img className="buyCardImg "src={this.props.src}
                style={this.state.imgStyle}/>
                {/* 設定商品名稱 */}
                <h5 style={this.state.textStyle} className="mt-3 font-weight-bolder ">{this.props.value}{this.props.id}</h5>
                <div className='mt-3'>
                {/* 設定商品原價 */}
                <span style={this.state.textStyle} className="text-muted">商品原價: $<s>{this.props.number}</s></span>
                {/* 設定商品售價 */}
                <span style={this.state.textStyle}>商品售價: ${Math.floor(this.props.number * this.props.discount)}</span>
                <div style={this.state.twoBtnStyle} className="mt-3">
                <button  onClick={this.handleClick}
                className='btn '><svg xmlns="http://www.w3.org/2000/svg" style={this.state.flag === 1 ? this.state={color:"red"} : {color:"black"}} 
                width="16" height="16" fill="currentColor" className="bi mr-4" viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg></button>
                {/* <button className='btn btn-outline-dark shadow' onClick={this.test}><NavLink to="/shoppingCart">加入購物車</NavLink></button> */}
                <button className='btn btn-outline-dark shadow'
                 onClick={this.props.onClick}>
                    {/* <NavLink to={`/shoppingCart/${this.state.id}`}>  */}
                    加入購物車
                    {/* </NavLink> */}
                </button>

                </div>
                </div>
                </div>
            </div>
            
            
            </>
        );
    }
}
 
export default BuyCard;