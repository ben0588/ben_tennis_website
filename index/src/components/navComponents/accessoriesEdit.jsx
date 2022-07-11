import React, { Component } from 'react';
import axios from 'axios';
class accessoriesEdit extends Component {
    state = { 
        coach:[{"cid":1,"cname":"Jimmy"}],
        coach1:[],
     } 

    
    async componentDidMount (){
        // 使用axios.get取目標網址
        var result = await axios.get(`http://localhost:8000/accessories/${this.props.match.params.id}`);
            // 檢查返回的資料內容
                // console.log(result);
                // console.log(result.data);
        // 將抓回來的內容存放回this.state中替換已存在的coach物件中 coach:[{"cid":1,"cname":"Jimmy"}]
        this.state.coach = result.data;
        
        // this.state.coach1 += JSON.stringify(result.data);
        // console.log(this.state.coach1 += JSON.stringify(result.data))
        // 呼叫資料更新
        this.setState({});
        console.log(this.state.coach)
        console.log(this.state.coach1)
    }

    render() { 
        // const coachdDate = this.props.coach;
        // console.log(coachdDate)
        return (
            <>
            {this.state.coach.cid}
            <hr />
            {this.state.coach.cname}
            <hr />
            {this.state.coach1.cid}
            </>
        );
    }
}
 
export default accessoriesEdit;