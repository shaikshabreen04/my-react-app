import { useRef } from "react";

function Scrollpagehw() {
  const topRef=useRef(null);
  const bottomRef=useRef(null);
  const mid1Ref=useRef(null);
  const mid2Ref=useRef(null);

  const goDown=()=>{
        mid1Ref.current.scrollIntoView({behavior:"smooth"});
    };
    const gomid1=()=>{
       mid2Ref.current.scrollIntoView({behavior:"smooth"});
    };

const goMid2=()=>{
        bottomRef.current.scrollIntoView({behavior:"smooth"});
    };
    const goUp=()=>{
        topRef.current.scrollIntoView({behavior:"smooth"});
    };


    return (
        <div>
            <div ref={topRef}>
            <h2>Top</h2>
            <button onClick={gomid1}>⬇️ Down</button>
        </div>

         <div style={{ height: "25vh" }}></div>

          <div ref={mid1Ref}>
           <h2>Mid1</h2>
           <button onClick={goUp}>⬆️ Up</button> 
           <button onClick={gomid1}>⬇️ Down</button>
          </div>

          <div style={{ height: "25vh" }}></div>

          <div>
            <div ref={mid2Ref}>
            <h2>Mid2</h2>
            <button onClick={goUp}>⬆️ Up</button>
            <button onClick={goDown}>⬇️ Down</button>
        </div>

         <div style={{ height: "25vh" }}></div>

          <div ref={bottomRef}>
           <h2>Bottom</h2>
           <button onClick={goUp}>⬆️ Up</button> 
          </div>
        </div>
        </div>
    );
}
export default Scrollpagehw;