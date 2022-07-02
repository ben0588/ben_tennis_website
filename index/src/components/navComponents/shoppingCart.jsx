import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import BuyCard from '../buyCard.js'
// import MiddleContent from "../middleContent.jsx";
// import LocalStorageTest from "../testComponents/localStorage"
import $, { data } from 'jquery';

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

    //  componentDidMount(){
    //     var a = localStorage.getItem("Test");
    //     a.forEach(function(element){
    //         $("p").html(element);
    //     });

    // }


    render() { 
        return (
            <div>
                
                <h1>購物車測試中</h1>   
                {/* {this.props.value} */}
                <button type='button' id="getButton">    </button>
                <p></p>
                
                {this.state.commodityValue[0]}
                {this.setState}
                {/* {this.state.commodityValueV2.id2} */}
                {/* {localStorage.getItem("Test")} */}
                {/* {this.state.JSONString} */}

            </div>
        );
    }
}
 
export default ShoppingCart;