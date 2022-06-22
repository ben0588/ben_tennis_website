import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom'

import Logo from './components/logo.jsx';
import NavBar from './components/navBarOK.jsx';



class App extends Component {
  state = { 

   } 
  render() { 
    return (
      <HashRouter>
        <Logo/>
        <NavBar/> 
      </HashRouter>
    );
  }
}
 
export default App;