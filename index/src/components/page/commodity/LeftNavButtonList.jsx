import React, { Component } from 'react';

class LeftNavButtonList extends Component {
    state = { 
        test1:{
            value1:"Wilson",
            value2:"Head",
            value3:"YONEX"
        },
        test2:{

        },
        test3:{

        },
        textBoxStyle:{
            border:'1px solid black',
        },
        textStyle:{ width:'200px',height:'30px',color:'black',backgroundColor:'#FFF',
          display:'block','display': 'flex',alignItems:'center',left:'30px',justifyContent: 'center',
          fontSize:13},
          


     } 
    render() { 
        return (
            <>
            <div id="simText">
            <div style={this.state.textStyle}>{this.state.test1.value1}</div>
            <div style={this.state.textStyle}>{this.state.test1.value2}</div>
            <div style={this.state.textStyle}>{this.state.test1.value3}</div>
             </div>
            </>
        );
    }
}
 
export default LeftNavButtonList;