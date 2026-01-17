import{useState } from "react";
function Calculator() {
    const [n1, setN1] = useState("");
    const [n2, setN2] = useState("");
    const [op, setOp] = useState("+");

    // calculate result based on operator
    const num1 = Number(n1 ||0);
    const num2 = Number(n2 ||0);
    let result = 0;
    if (op === "+") result = num1 + num2;
    else if (op === "-")result = num1 - num2;
    else if (op === "*") result = num1 * num2;
    else if (op === "/")  result = num2  ===0 ? "cannot divide by 0" : num1/num2;
    return (
        <div>
            <input 
            type="number"
            placeholder="Enter first number"
            value={n1}
            onChange={(e) => setN1(e.target.value)}
            />
            <select value={op} onChange={(e) => setOp(e.target.value)}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input 
            type="number"
            placeholder="Enter second number"
            value={n2}
            onChange={(e) => setN2(e.target.value)}
            />
            <p>Result: {result}</p>
        </div>
    );
} 
export default Calculator;