const[num,setnum]=useState();
   const[result,setresult]=useState(0);
   const Countdigit=()=>{
     let num1=Number(num||0);
     let dc=0;
     while(num1>0){
         dc=dc+1;
         num1=Math.floor(num1/10);
       }
      setresult(dc);
    };
   return(
    <div>
        <input
        type="number"
        placeholder="Enter Number"
        value={num}
        onChange={(e)=>setnum(e.target.value)}/><button onClick={Countdigit}>Click</button>
        <p>result:{result}</p>
    </div>
   )