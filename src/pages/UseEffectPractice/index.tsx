 import React, { useEffect, useState } from 'react'
import DataFetch from '../DataFetch/index'
 
 function UseEffectPractice() {
    const [count,setCount] = useState(0);
    // useEffect(()=>{
    //     first

    //     return() = {
    //         second
    //     }
    // },[]);

    function handleClick(){
        setCount(count => {
            return count+1;
        });
    }

    //this varition will run on every render
    // useEffect(()=>{
    //     alert("This will run on every render");
    //  });

    //this varition will run on only first render
    // useEffect(() => {
    //     // const intervalId = setInterval(()=>{
    //     //     setCount(count => count+1);
    //     //     console.log("executed");
    //     // },1000);
    //     alert("useEffect setup func executed")
    //     function handleFocus(){
    //       alert("window key pressed")
    //     }
        // window.addEventListener("keypress",handleFocus);

    //     return() => {
    //       // window.removeEventListener("keypress",handleFocus);
    //         // alert("useEffect cleanup executed");
    //         // clearInterval(intervalId);
    //     };
    //  },[count]);
 
   return (
     <div className=''>
        <h1>UseEffectPractice</h1>
        <div>
            <button onClick={handleClick}>Increment Count</button>
            <h3>Count is {count}</h3>
        </div>
        {/* <DataFetch /> */}
    </div>
   )
 }
 
 export default UseEffectPractice