import {useState,useEffect } from "react";
function Counterls(){
    const [count, setCount]=useState((()=>{
        return Number(localStorage.getItem("count")) ||0;
    }));
    useEffect(()=>{
        localStorage.setItem("count",count);
    },[count]);
    return(
        <>
        <p>Count: {count}</p>
        <button onClick={()=>{setCount(count+1)}}>+</button>
        
        
        </>
    );
 }
    export default Counterls;