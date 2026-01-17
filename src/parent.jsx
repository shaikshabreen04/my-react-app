import {createContext} from "react";
import Child from './child1.jsx';
import Child2 from './Child2.jsx';
export const AppContext=createContext();
export const NameContext=createContext();
const data={
        name:"Karthik",
        age:20,
        score:86
    };
function Parent(){
return(
    <>
    <NameContext.Provider value="Phaneendra Oruganti">
        <Child />
    </NameContext.Provider>
    <AppContext.Provider value={data}>
        <Child2 />
    </AppContext.Provider>
    </>
);
}

export default Parent;