import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BuyCard from '../buyCard.js'
// // import MiddleContent from "../middleContent.jsx";
// // import LocalStorageTest from "../testComponents/localStorage"
// import $, { data } from 'jquery';

import 'bootstrap/dist/css/bootstrap.css';
// import '../testComponents/shoppingTest.js'

class ShoppingCart extends Component {
    constructor(props){
        super(props)
    }
    state = { 
        commodityValue:[
            localStorage.getItem("Test")
        ],
        commodityValueV2:[
            // JSON.parse(localStorage.getItem("Test"))
        ],
        testV1:{
            
        }
        

     } 


    //  addProductToCart= () =>{
    //     localStorage.setItem('id', location.state.id);
    //     localStorage.setItem('value', location.state.value);
    //     localStorage.setItem('originalPrice', location.state.originalPrice);
    //     localStorage.setItem('discount', location.state.discount);
    //     localStorage.setItem('src', location.state.src);
    // }

    //  componentDidMount(){
    //     var a = localStorage.getItem("Test");
    //     a.forEach(function(element){
    //         $("p").html(element);
    //     });

    // }


    render() { 
        return (
            <div>
                
                {/* <h1>購物車測試中</h1>    */}
                {/* {this.props.value} */}
                {/* <button type='button' id="getButton">132123 </button> */}
                <p></p>
                
                {/* {this.state.commodityValue} */}
                {/* {console.log(this.state.commodityValue.join(";"))} */}
                <hr/>
                {/* {JSON.stringify(this.state.commodityValue.join(","))} */}
                {/* {JSON.parse(this.state.commodityValue.join(","))} */}
                {/* {console.log(typeof(JSON.stringify(this.state.commodityValue[0])))} */}
                {/* {this.setState} */}
                {/* {this.state.commodityValueV2.id2} */}
                {/* {localStorage.getItem("Test")} */}
                {/* {console.log(typeof(localStorage.getItem("Test")))} */}
                {/* {this.state.JSONString} */}
                <hr />


 


                


            </div>
        );
    }
}
 
export default ShoppingCart;






