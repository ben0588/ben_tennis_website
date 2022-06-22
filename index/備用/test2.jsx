// // import React, { Component } from 'react';
// // import test2 from './test2.css';

// // class Test2 extends Component {
// //     // constructor(props){
// //     //     super(props)
// //     //     this.state = {name:"哈囉"}
// //     // }

// //     state = {
// //         name:"哈囉",
// //         styleTest : {
// //             'color': 'blue'
// //         }
// //     }

   

// //     doClick=()=>{
// //         var y = {...this.styleTest}
// //         const x = this.state.name === "哈囉"? this.styleTest={'color':'red'}:"沒有";
// //         this.setState({name:x})
// //     }

    
// //     // doClick=()=>{
// //     //     const x = this.state.name === "哈囉"? "一樣":"沒有";
// //     //     this.setState({name:x})
// //     // }

// //     render() { 
// //         return (
// //             <div>
// //                 <button onClick={this.doClick}>12323</button>
// //                 <p className='testP'>{this.state.name}</p>
// //                 {this.styleTest.map(()=><p>123</p>)}
// //             </div>
// //         );
// //     }
// // }
 
// // export default Test2;

// import { useState } from 'react';
// import React, { Component } from 'react';
// class Test2 extends Component {
//     state = { 
//         count:0
//     } 

//     doClick =()=>{
//         this.state.count+=1
//         this.setState({})
//     }

//     reduceClick=(e)=>{
//         this.state.count-=1;
//         this.setState({});

//     }

//     deleteClick=()=>{
//        this.props.doDelete();
//     }    
//     render() { 
//         return (
//             <div>
//                 {this.state.count}
//                 <button onClick={this.doClick}>+</button>
//                 <button onClick={this.reduceClick}>-</button>
//                 <button onClick={this.deleteClick}>Delete</button>
//                 <span>{this.props.id}</span>
//             </div>
//         );
//     }
// }
 
// export default Test2;