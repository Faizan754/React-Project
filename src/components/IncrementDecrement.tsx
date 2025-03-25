import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div id="root">
      <h1>Function 2:</h1>
      <p>Count: {count}</p>
      <button className="btn btn-success" onClick={handleIncrement}>
        Increment!
      </button>
      <button className="btn btn-secondary" onClick={handleReset}>
        Reset!
      </button>
      <button className="btn btn-danger" onClick={handleDecrement}>
        Decrement!
      </button>
    </div>
  );
}

export default Counter;
