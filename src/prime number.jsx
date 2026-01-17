import { useState } from "react";

function Prime() {

  let fc = 0;
  let f = 2;
  let n = 0;

  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button
        onClick={() => {
          n = Number(number);
          fc = 0;
          f = 2;

          while (f < n) {
            if (n % f === 0) {
              fc = fc + 1;
            }
            f = f + 1;
          }

          if (n > 1 && fc === 0) {
            setResult("Prime");
          } else {
            setResult("Not Prime");
          }
        }}
      >
        Click
      </button>

      <div>{result}</div>
    </div>
  );
}

export default Prime;
