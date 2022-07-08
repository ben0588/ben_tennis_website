import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'

import Logo from './components/logo.jsx';
import NavBar from './components/navBarOK.jsx';
import Test1 from './components/navComponents/test'


class App extends Component {
  state = { 

      date1:[{name:"test5"}],
      date2:{name:"test4"},

   } 
  render() { 
    

    return (
      <BrowserRouter>
        <Logo/>
        <Test1 name="test123213123213" />                                   
        <NavBar/> 
      </BrowserRouter>
    );
  }
}
 
export default App;