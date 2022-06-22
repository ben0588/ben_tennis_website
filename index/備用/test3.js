// import React, { Component } from 'react';


// class Test3 extends Component {
//     constructor(props){
//         super(props)
//         this.state = { flag:0,width:100,color:'red',backgroundColor:'red',isToggleOn: true};
//     };
    
//     // doStyle = ()=>{
//     //     this.setState({flag:this.state.flag ===0 ? 1:0})
//     // }

//     handleClick = ()=> {
//         this.setState({
//           flag: this.state.flag === 0 ? 1 : 0
//         });
//       }
//     // doStyle = ()=>{
//     //     this.setState({backgroundColor:'black'})
//     // }
    
//     render() { 
//         return (
//             <>
//             <div >
//                 2222
//             </div>
//             <button onClick={this.doStyle}>123123</button>
//             <button onClick={(e)=>{this.setState({export:e.target.id})}}>123123</button>

//             <div>
//         <button
//           className={this.state.flag === 1 ? "selected" : "button-plus"}
//           onClick={this.handleClick}
          
//         >
//           {this.state.flag === 1 ? <span>&#8211;</span> : <span>&#43;</span> }
//         </button>
//         {this.state.flag === 1 && (
//           <div style={{ border: "2px solid green" }}>
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             ever since the 1500s, when an unknown printer took a galley of type
//             and scrambled it to make a type specimen book. It has survived not
//             only five centuries, but also the leap into electronic typesetting,
//             remaining essentially unchanged. It was popularised in the 1960s
//             with the release of Letraset sheets containing Lorem Ipsum passages,
//             and more recently with desktop publishing software like Aldus
//             PageMaker including versions of Lorem Ipsum.
//           </div>

          
//         )}
//       </div>

//             </>
//         );
//     }
// }
 
// export default Test3;