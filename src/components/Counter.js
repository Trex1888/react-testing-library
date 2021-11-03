import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounter = () => {
    setCounterValue(counterValue + inputValue);
  };

  const subToCounter = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <div>
      <h3 data-testid="header">New Counter</h3>
      <h2
        data-testid="counter"
        className={`${counterValue >= 100 ? "green" : ""}${
          counterValue <= -100 ? "red" : ""
        }`}
      >
        {counterValue}
      </h2>

      <button data-testid="sub-btn" onClick={subToCounter}>
        -
      </button>
      <input
        data-testid="input"
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
        type="number"
        value={inputValue}
        className="text-center"
      />
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
