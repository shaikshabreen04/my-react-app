import { useState } from "react";

function Factorial() {
    const [num, setNum] = useState("");

    const n = Number(num);
    let result = "";
    let i = 1;

    if (num !== "") {
        result = 1;
        while (i <= n) {
            result = result * i;
            i = i + 1;
        }
    }

    return (
        <div>
            <input
                type="number"
                placeholder="Enter number"
                value={num}
                onChange={(e) => setNum(e.target.value)}
            />
            <p>Result: {result}</p>
        </div>
    );
}

export default Factorial;
