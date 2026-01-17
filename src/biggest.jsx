import { useState } from "react";

function Biggest() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [result, setResult] = useState("");

  const findBiggest = () => {
    const num1 = Number(n1 || 0);
    const num2 = Number(n2 || 0);

    if (num1 > num2) {
      setResult("Biggest number is " + num1);
    } else {
      setResult("Biggest number is " + num2);
    }
  };

  return (
    <div>
      <input
        type="number"
        placeholder="Enter first number"
        value={n1}
        onChange={(e) => setN1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Enter second number"
        value={n2}
        onChange={(e) => setN2(e.target.value)}
      />

      <button onClick={findBiggest}>Click</button>

      <p>{result}</p>
    </div>
  );
}

export default Biggest;