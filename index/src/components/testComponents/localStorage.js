import React, { useState,useEffect } from 'react';


function LocalStorageTest() {
    const [data, setData] = useState({
        a: "aaaa",
    });

    const [newData, setNewData] = useState({ new: "newDDDD" });

useEffect(() => {
        localStorage.setItem("myData", JSON.stringify(data));
    }, [data]);

useEffect(() => {
        let a = JSON.parse(localStorage.getItem("myData"));
        console.log(a);
        console.log(localStorage.key(0));
    }, []);

const clearLocalS = () => {
        localStorage.removeItem("myData");
    };

const setNewLocalS = () => {
//塞資料進去
        localStorage.setItem("newData", JSON.stringify(newData));
        localStorage.setItem("font", "Helvetica");
        localStorage.setItem("arr", [1,2,3,4,5]);
    };
    return (
        <div className="App">
            <button
                onClick={() => {
                    setNewLocalS();
                }}
            >
                set new
            </button>
            <button
                onClick={() => {
                    clearLocalS();
                }}
            >
                remove one
            </button>
        </div>
    );
}
export default LocalStorageTest;