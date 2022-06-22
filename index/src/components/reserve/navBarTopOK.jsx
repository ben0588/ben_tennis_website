import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBarTop from '../reserve/navBarTop';
import Logo from '../logo';
import NavBar from '../navBarOK';
import Login from '../navComponents/login';

class NavBarTopOK extends Component {
    state = {  } 
    render() { 
        return (
            <>
            <HashRouter>
            <div>
            <Logo/>
            <NavBar/>
            <NavBarTop/>  
            <Switch>
            <Route path="/login" component={Login} exact/>
            </Switch>

            </div>
            </HashRouter>
            </>
        );
    }
}
 
export default NavBarTopOK;