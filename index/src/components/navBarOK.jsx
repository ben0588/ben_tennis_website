import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/navBar.css';
import NavBar2 from './navBar2.jsx';
import Logo from './logo';

// 首頁+
import home from './navComponents/home.jsx';                  
import promotions from './navComponents/promotions.jsx'       
// 購物車+商品
import allCommodity from './navComponents/allCommodity.jsx'
import brandSort from './navComponents/brandSort.jsx'
import tennisRacket from './navComponents/tennisRacket.jsx'
import accessories from './navComponents/Accessories.jsx'   
// 關於我
import ContactUs from './navComponents/contactUs.jsx'


import login from './navComponents/login.jsx';
import register from './navComponents/register.jsx'
import shoppingCart from './navComponents/shoppingCart.jsx'

class NavBar extends Component {
    state = { 
        navStyle : {
            "display":"flex",
            "justifyContent":"center",
            "margin":"-1% 20% 0px 30%",
            
        },
        count:0,
     } 

    render() { 
        return (
            <HashRouter>
            <div id="topTest" className='sticky-top bg bg-white mt-1' style={this.state.testStyle}>
            <NavBar2 />
            </div>
                <div style={{margin:'auto'}}>
                <Switch>
                    <Route path="/" component={home} exact/>
                    <Route path="/promotions" component={promotions} exact/>
                    <Route path="/allCommodity" component={allCommodity} exact/>
                    <Route path="/brandSort" component={brandSort} exact/>
                    <Route path="/tennisRacket" component={tennisRacket} exact/>
                    <Route path="/accessories" component={accessories} exact/>


                    <Route path="/contactUs" component={ContactUs} exact />

                    <Route path="/login" component={login} exact/>
                    <Route path="/register" component={register} exact/>
                    <Route path={`/shoppingCart/${this.props.id}`} component={shoppingCart}/>
                 </Switch>

        
                 
                 </div>
            </HashRouter>
        );
    }
}
 
export default NavBar;