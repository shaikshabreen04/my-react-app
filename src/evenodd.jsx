import { useState } from "react";

function EvenOdd() {
    const [num, setNum] = useState("");

    const n = Number(num || 0);
    let result = "";

    if (n % 2 === 0)
        result = "Even";
    else
        result = "Odd";

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

export default EvenOdd;
