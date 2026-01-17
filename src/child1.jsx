import {useContext} from "react";
import {NameContext} from './Parent.jsx';
function Child(){
    const name=useContext(NameContext);
    return <h2>Hello {name}</h2>
}
export default Child;