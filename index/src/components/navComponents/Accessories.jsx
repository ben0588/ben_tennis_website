import React, { Component } from 'react';
import BottomValue from '../bottomValue.js'
import axios from 'axios';
import { Link } from 'react-router-dom';


class Accessories extends Component {
    state = { 
        coach:[{"cid":1,"cname":"Jimmy"}],
        coach1:this.props.result,
    } 

    // async componentDidMount (){
    //     var result = await axios.get("http://localhost:8000/123");
    //     console.log(result);
    //     this.setState({ todoList:result.data});
    //     // console.log(JSON.parse((JSON.stringify(this.state.todoList))))
    //     console.log(this.state.todoList)
    //     // console.log(typeof(this.state.todoList))
        
    // }

    async componentDidMount (){
        // 使用axios.get取目標網址
        var result = await axios.get("http://localhost:8000/accessories");
            // 檢查返回的資料內容
                // console.log(result);
                // console.log(result.data);
        // 將抓回來的內容存放回this.state中替換已存在的coach物件中 coach:[{"cid":1,"cname":"Jimmy"}]
        this.state.coach = result.data;
        // 呼叫資料更新
        this.setState({});

        console.log(this.state.coach1);

        // this.setState({ todoList:result.data});
        // console.log(JSON.parse((JSON.stringify(this.state.todoList))))
        // console.log(this.state.todoList)
        // console.log(typeof(this.state.todoList))
        
    }

    // componentDidMount(){
    //     axios.get('http://localhost:8000/home/test1')
    //     .then((response)=>{ console.log(response)})
    //     //得出來的是類似Response的物件，裏面的data才是我們想抓的資料
    //     .then((response)=>{ console.log(response.data)})
    //     .catch((error)=>{console.log(error)})
    // }

    // getUserName(){
    //     return axios.get('http://localhost:8000/home/test1');
    // }
    // getUserTitle(){
    //     return axios.get('http://localhost:8000/home/test1');
    // }


    
    render() { 


        //  console.log(JSON.parse((JSON.stringify(this.state.todoList))))

        return (
            <>
            配件測試中
            <hr />
            購物車模擬第一頁畫面
            <hr/>
            {this.state.coach.map((e,index)=>{
                return(
                    <tr key={index}>
                    <td>
                    {e.cid}
                    </td>
                    <td>
                        {e.cname}
                    </td>
                    <td>
                        <span className="float-right">
                        {/* <a href={`/accessories/edit/${e.cid}`} className="btn btn-outline-primary btn-sm">編輯</a> | */}
                        <Link to={`/accessories/${e.cid}`}>GO</Link>
                        </span>
                    </td>
                </tr>
                )
            })}
            {/* {this.state.todoList.map((elm,index)=>{
                {elm.name}
            })} */}
            <BottomValue/>
            </>
        );
    }
}
 
export default Accessories;