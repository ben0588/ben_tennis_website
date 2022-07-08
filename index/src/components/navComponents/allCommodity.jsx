import React, { Component } from 'react';
import MiddleContent from "../page/commodity/middleContent"
import BottomValue from '../bottomValue.js'
class AllCommodity extends Component {
    state = {  } 
    render() { 
        return (
            <div>
            <MiddleContent/>
            <BottomValue/>
            </div>
        );
    }
}
 
export default AllCommodity;