import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class LeftNav extends Component {
    state = { 
        test1Text:"測試拉二",
        test1Text1:[
            {name:"hello",id:0}
        ]
     } 
    render() { 
        return (
            <BrowserRouter>
            <>

            
            </>
            </BrowserRouter>
        );
    }
}
 
export default LeftNav;