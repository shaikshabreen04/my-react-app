import {useState,useEffect } from "react";
function Login2(){
    const[isloggedin,setisloggedin]=useState(false);
    useEffect(()=>{
        const status=sessionStorage.getItem("isloggedin");
        setisloggedin(status ==="true");
    },[]);
    const login=()=>{
        sessionStorage.setItem("isloggedin","true");
        setisloggedin(true);
    };
    const logout=()=>{
        sessionStorage.setItem("isloggedin","false");
        setisloggedin(false);
    };
    return(
        <div>
            <h2>Status:{isloggedin ? "Logged In":"Logged Out"}</h2>
            {!isloggedin && <button onClick={login}>Login</button>}
            {isloggedin && <button onClick={logout}>Logout</button>}
        </div>
    );
}
export default Login2;