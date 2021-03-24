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
      <p>count: {count}</p>
      <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
      <button onClick={() => handleIncreaseBy(5)}>+5</button>
    </div>
  );
};

export default Counter;
