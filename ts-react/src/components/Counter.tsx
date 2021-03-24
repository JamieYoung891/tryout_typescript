import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState<number>(0); // generics can be omitted
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Counter</h1>
      <p>Count : {count}</p>
      <div>
        <button onClick={handleIncrease}>+1</button>
        <button onClick={handleDecrease}>-1</button>
      </div>
    </div>
  );
};
