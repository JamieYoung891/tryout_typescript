import React from "react";

export type CounterProps = {
  count: number;
  handleIncrease: () => void;
  handleDecrease: () => void;
  handleIncreaseBy: (diff: number) => void;
};

const Counter = ({
  count,
  handleIncrease,
  handleDecrease,
  handleIncreaseBy,
}: CounterProps) => {
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
    </div>
  );
};

export default Counter;
