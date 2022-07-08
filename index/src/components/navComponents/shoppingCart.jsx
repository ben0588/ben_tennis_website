// import React from 'react';

// function ShoppingCart(props) {
//     return ( 
//         <>
//         <div>{props.name}</div>
//         <div>1232132123131231</div>
//         <div>1232132123131231</div>
//         </>
//      );
// }

// export default ShoppingCart;


import React, { Component } from 'react';

class ShoppingCart extends Component {
        constructor(props){
        super(props);
        this.state = { 
            

        }; 
    }

    // constructor(props){
    //     super(props);
    //     this.state = { date1:new Date() }; 
    // }
    
    // // 加入畫面加載時執行程式
    // componentDidMount() {
    //     // 自訂義timerID放入setInterval依照秒數執行function
    //     this.timerID = setInterval(
    //     // 使用箭頭函示繼承外面的tick()函示
    //       () => this.tick(),
    //       // 設定秒一秒跑一次
    //       1000
    //     );
    //   }
    
    //   // 離開畫面時執行程式
    //   componentWillUnmount() {
    //     // 清除setInterval
    //     clearInterval(this.timerID);
    //   }
    
    //   // 給予函示更新this.setState中的data1給新的Date
    //   tick() {
    //     this.setState({
    //       date1: new Date()
    //     });
    //   }

    render() { 
        return (
            <>
            {/* 將data1的日期,使用時間轉換成文字顯示 */}
           {/* <h2>It is {this.state.date1.toLocaleTimeString()}.</h2> */}
           <hr />
           <div id="max1"></div>

           <hr />
           
           {/* {console.log(data1)} */}
           {/* {console.log(this.state.data2)}
           {console.log(this.props.data2)}
           {console.log(this.props.data)} */}
           {console.log(this.props.test1)}
           {console.log(this.props.data)}
           {/* {this.state.data2} */}
            </>
        );
    }
}
 
export default ShoppingCart;