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
import $ from 'jquery';
import axios from 'axios';

class ShoppingCart extends Component {
        constructor(props){
        super(props);
        this.state = { 
            // getJsonData1:{},
            data1 :[
                "123123",
                "333333",
                "444444"
            ]

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

    // componentDidMount(){
    //     // GET取得目標網址
    //     axios.get('https://randomuser.me/api/')
    //     // .then(res)將傳回內容放在res內
    //     .then(res => {
    //         //// 查看傳回的資料內容
    //         // console.log(res);
    //         // 主要內容放在data內的results中
    //         console.log(res.data.results);
    //     })
    //     // .catch(err) 檢查接收資料失敗
    //     .catch(err =>{
    //         //// 失敗時傳回的內容(不完全,因為封裝關係)
    //         // console.log(err);
    //         // 使用.response顯示呼叫後回復的內容(data: "Not Found")
    //         console.log(err.response);
    //     })

    // }

    render() { 

        // $.ajax({
        //     // 設定取得GET方法
        //     type:'GET',
        //     // 設定要抓取的url網址
        //     // url:'http://localhost/spost/Benphp/lessonGet.php',
        //     url:'https://ptx.transportdata.tw/MOTC/v2/Bus/Stop/City/Tainan?$format=JSON',
        //     // dataType:'json',
        //     // 若成功時將會執行以下function
        //     success:function(data){
        //         //// 檢查取出資料
        //         // console.log(data);
        //         //// 檢查取出資料型態
        //         // console.log(typeof(data));
                
        //         // 若取出值是object物件格式,利用.length方法抓所有資料
        //         for (var i=0;data.length>i;i++){
        //             // .LocationCityCode是該JSON資料中[{"LocationCityCode標頭值":"內容值"}]
        //             var test1 = data[i].LocationCityCode;
        //             //// 檢查取出資料內容
        //             // console.log(test1);

        //             // 增加要抓取的判斷
        //             if(test1 == 'KHH'){
        //                 // StopName.Zh_tw = 資料中[{StopName:{Zh_tw:"內容值"}}]
        //                 var test2 = `<li>${JSON.stringify(data[i].StopName.Zh_tw)}</li>`;
        //                 //// 檢查取出的值內容
        //                 // console.log(test2);

        //                 // 使用append方法在該標籤後內容增加
        //                 $('#max2').append(test2);
        //             }
        //         }
        //     }})

            axios.get('https://ptx.transportdata.tw/MOTC/v2/Bus/Stop/City/TainanA?$format=JSON/')
                .then(res=>{
                    // 查看取得回來的資料內容
                    console.log(res.data);
                    // console.log(res.data.results);
                })
                .catch(err=>{
                    // 因為回傳的資料是有封裝過的,要使用以下方式查看
                    // console.log(err)
                    // 顯示取得資料失敗詳細內容(data:"Not Found") (status:404)
                    console.log(err.response);  
                })
                


                // 將物件轉換成JSON
                // var objectToJson = JSON.stringify(data);
                // console.log(objectToJson);


                // var lessonData = JSON.parse(objectToJson);
                // console.log(lessonData)
                // console.log(typeof(lessonData));
                // $('#max2').html(lessonData[0].StopUID);

                // console.log(typeof(objectToJson));
                // var lessonData = JSON.parse(data);
                // console.log(lessonData)
                // console.log(typeof(lessonData));

                
                // 將JSON物件值取出
                // console.log(data);
                // console.log(typeof(data));
                // $('#max2').html(data[0].StopUID);
        //     }
        // })

        // var test01 = document.getElementsByName('max3');
        // for (var i=0;i<test01.length;i++)
        // console.log(test01.item(i).value);

        // var test01 = document.querySelectorAll('.test1');
        // for (var i=0;i<test01.length;i++)
        // console.log(test01.item(i).textContent);

        // var person ={
        //     name:'小明'
        // }
        // var person1 = person
        // person1.name='杰倫'
        // console.log(person === person1);
        // console.log(person);
        // console.log(person1);

        // 給予自定義function的參數值
        // function fn(name){
        //     return `${name}測試中`
        // }
        // var fn2= fn;
        // fn2.testName = "測試中";
        // // console.log(fn === fn2) // true
        // // console.log(fn2) 
        // console.dir(fn2) // 點開F會看到有個屬性名稱叫restName:"測試中"

        // 淺層複製實作{...}
        // 未使用...展開
        // var person ={
        //     name:'小明'
        // }
        // var person1 = person
        // person1.name='杰倫'
        // console.log(person === person1); // true 
        // console.log(person);  // '杰倫'
        // console.log(person1); // '杰倫'

        // 使用...展開
        // var person ={
        //     name:'小明'
        // }
        // var person1 = {...person}
        // person1.name='杰倫'
        // console.log(person === person1); // false
        // console.log(person);  // 小明
        // console.log(person1); // 杰倫


        // 深層複製實作 JSON.parse(JSON.stringify())
        // var person ={
        //     name:'小明',
        //     family:{
        //         name:"小明家",
        //         members:['爸','媽']
        //     }
        // }
        // var person1 = person
        // person1.name='杰倫'
        // person1.family.name='杰倫家'
        // console.log(person === person1); // true 
        // console.log(person);  // family.name = '杰倫家'
        // console.log(person1); // family.name = '杰倫家'

        // 使用JSON.parse(JSON.stringify())
        // var person ={
        //     name:'小明',
        //     family:{
        //         name:"小明家",
        //         members:['爸','媽']
        //     }
        // }
        // var person1 = JSON.parse(JSON.stringify(person))
        // person1.name='杰倫'
        // person1.family.name='杰倫家'
        // console.log(person === person1); // false 
        // console.log(person);  // name = '小明' ,family.name = '小明家'
        // console.log(person1); // name = '杰倫' ,family.name = '杰倫家'

        // // 擴展 ...var
        // // 未使用...var更改function
        // // var person ={
        // //     name:'小明',
        // //     fn:function(){
        // //         console.log(this.name);
        // //     }
        // // }
        // // const person2 = person;
        // // person2.name ="杰倫";  
        // // person.fn();  // '杰倫'
        // // person2.fn(); // '杰倫'

        // // 使用...var更改function
        // var person ={
        //     name:'小明',
        //     fn:function(){
        //         console.log(this.name);
        //     }
        // }
        // const person2 ={
        //     ...person,
        //     name :"杰倫"
        // };
        // person.fn();  // '小明'
        // person2.fn(); // '杰倫'

        // 使用forEach傳值
        // const family = [{name:"爸"},{name:"媽"}];
        // family.forEach((item)=>{
        //     const newItem = {
        //         name:"杰倫"
        //     }
        //     item = newItem;
        // })
        // console.log(family);  // 沒更改成杰倫

        // const family = [{name:"爸"},{name:"媽"}];
        // family.forEach((item,key)=>{
        //     const newItem = {
        //         name:"杰倫"
        //     }
        //     family[key] = newItem;
        //     console.log(item); // 未更改還是舊的
        //     console.log(family[key]); // 已更改成"杰倫"
        // })
        // // console.log(family);  // name = "杰倫"

        // // 類陣列轉成純陣列
        // // 取得所有li元素的內容
        // const doms = document.querySelectorAll('li');
        // // 查看後發現Prototype中方法會少非常多,比如map不能用
        // console.log(doms);
        // // 使用...展開放入新變數後,Prototype中會多很多方法,比如map...等
        // const newDoms = [...doms];
        // console.log(newDoms);

        // var a = '痊癒';
        // function fn(params){
        //     console.log(params,this,window,arguments);
        //     debugger;
        // }
        // fn(1,2,3);


        // this物件指向補充
        // var someone = '痊癒';
        // function callSomeone(){
        //     console.log(this.someone);
        // }
        // // callSomeone();

        // // var obj = {
        // //     someone:'物件',
        // //     callSomeone(){
        // //         console.log(this.someone);
        // //     }
        // // }
        // var obj2 = {
        //     someone:'物件2',
        //     callSomeone
        // }

        // // 函式前面的物件是甚麼,指向的就是谁
        // // obj.callSomeone();
        // obj2.callSomeone();
     

        return (
            <>
            {/* 將data1的日期,使用時間轉換成文字顯示 */}
           {/* <h2>It is {this.state.date1.toLocaleTimeString()}.</h2> */}
           <hr />
           <div id="max2"></div>
           <hr />
           {this.state.data1}
           <div >
                <input type="checkbox" name="max3" value="123123" />
                <input type="checkbox" name="max3" value="32122" />
                <input type="checkbox" name="max3" value="44444444" />
           </div>
           <ul>
            <li className="test1">123</li>
            <li className="test1">321</li>
            <li className="test1">456</li>
           </ul>

           <hr />
           {/* {console.log(this.props.max1)} */}
           {/* {console.log(data1)} */}
           {/* {console.log(this.state.data2)}
           {console.log(this.props.data2)}
           {console.log(this.props.data)} */}
           {/* {console.log(this.props.test1)} */}
           {/* {console.log(this.props.data)} */}
           {/* {this.state.data2} */}
            </>
        );
    }
}
 
export default ShoppingCart;