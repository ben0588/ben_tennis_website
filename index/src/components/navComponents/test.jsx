import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom/client';


function Test1 (props) {
    const data3 = props.data;

// const root1 = ReactDOM.createRoot(document.getElementById('root1'));

    return ( 
        <>
        <h1>{props.name}</h1>
        <h1>{props.data2}</h1>
        <h1>{console.log(data3)}</h1>
        <p id="root1"></p>
        </>
     );
}


export default Test1 ;