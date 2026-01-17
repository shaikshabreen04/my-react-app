import {useState }from "react";
function NameInput() {
    const [name, setName] = useState("");
    return (
        <>
            <input onChange={(e) => setName(e.target.value)} />
            <p>your name is: {name}</p>
        </>
    );
}

export default NameInput;