import React, { useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import BottomValue from '../bottomValue.js'
import ReactDOM from 'react-dom/client';


function ContactUs(props) {
    const [count,setCount] = useState(0);
    const [isOnline, setIsOnline] = useState(null);
    // const name = 'Josh Perez';
    // const element = <h1>Hello, {name}</h1>;
    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
      };
    const user1 = {
        firstName: 'test',
        lastName: '22222'
      };
    const element = (
        <h1>
          Hello, {formatName(user)}!
        </h1>
    );
    const element1 = <a href="https://www.reactjs.org"> link </a>;
    const element2 = <img src={"http://localhost:3000/static/media/logo11.b3126c98be14c3ad3a45.png"}></img>;
    // const title = response.potentiallyMaliciouconst element = (
        const element3 = (
            <h1 className="greeting">
              Hello, World!
            </h1>
          );

        const element4  = React.createElement(
            'h1',
            {className:'text-info'},
            'Hello'
        );
        



    useEffect(()=>{
        document.title = `${count}`;
    })


    function formatName(user) {
        return user.firstName+ ' ' + user.lastName;
      }
      
    function getGreeting(user) {
        if (user) {
          return <h1>Hello, {formatName(user)}!</h1>;
        }
        return <h1>Hello, Stranger.</h1>;
      }


      // 即時更新秒數
      // const root = ReactDOM.createRoot(
      //   document.getElementById('test')
      // );
      
      // function tick() {
      //   const element = (
      //     <div>
      //       <h1>Hello, world!</h1>
      //       <h2>It is {new Date().toLocaleTimeString()}.</h2>
      //     </div>
      //   );
      //   root.render(element);
      // }
      // setInterval(tick, 1000);

      function Welcome(props){
        return 
      }
      
      // const test = ReactDOM.createTest(document.getElementById('test'));
      // const element20 = <Welcome name="Sara"/>;
      // test.render(element20);
      

    
    return ( 
        <>
        <p>測試記數{count}</p>
        <button onClick={()=>{setCount(count + 1)}}>
            點擊增加
        </button>
        <a id="test"></a>
        <h1>hello,{props.name}</h1>;
        <hr />
        {/* {name} */}
        {element}
        <hr />
        {element1}
        <hr />
        {/* {element2} */}
        {element3}
        {element4}
        <hr />
        {getGreeting(user1)}
        <hr />

        <hr />
        聯絡我們測試中
        <BottomValue/>
        </>


     );
}

export default ContactUs;