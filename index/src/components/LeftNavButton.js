import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../components/LeftNavButton.css'

import LeftNavButtonList from './LeftNavButtonList.jsx'
class LeftNavButton extends Component {
    constructor(props){
        super(props)
        this.state = {
          flag:0,
          isToggleOn: true,
          backgroundColor:'red',
          bigTextStyle:{ width:'200px',height:'30px',color:'black',backgroundColor:'#FFF',border:'1px solid black',
          marginTop:0.8,
          'display': 'flex','alignItems':'center','justifyContent': 'center',
          fontSize:14
          },
          textStyle:{ width:'200px',height:'30px',color:'black',backgroundColor:'#FFF',
          display:'block','display': 'flex','alignItems':'center','justifyContent': 'center',
          fontSize:13},
          bigTextIsStyle:{
            width:'100px',height:'30px',display:'flex',alignItems:'center',left:'20px'
          },
          Name:this.props.value,
          allListSimName:[
            {id:0,value1:"Wilson"},
            {id:0,value1:"Head"},
            {id:0,value1:"YONEX"},
        ],



        };
        
        // ,border:'1px solid black'
    };
    
    handleClick = ()=> {
        this.setState({
          flag: this.state.flag === 0 ? 1 : 0
        });
    }

    test1 = ()=>{
      this.setState({backgroundColor:'black'})
    }
    test2 = ()=>{
      this.setState({backgroundColor:'red'})
    }
    render() { 
        return (
            <>
        <div

          style={this.state.bigTextStyle}
          id="bigText"
          className="pr-5"
          onClick={this.handleClick}  
          onMouseOver={this.test1}
          onMouseOut={this.test2}
          >
          {this.state.flag === 1 ? <div className="glyphicon glyphicon-minus" style={this.state.bigTextIsStyle}>{this.props.value}</div> : <div className='glyphicon glyphicon-plus' style={this.state.bigTextIsStyle}>{this.props.value}</div> }
         
        </div>
        
        {this.state.flag === 1 && (
        <LeftNavButtonList/>
          
          
        )}
        </>
        );
    }
}
// this.state.allListSimName.map((e,index)=>{return <LeftNavButtonList id={e.id} key={index} value={e.value1}/>  })

export default LeftNavButton;