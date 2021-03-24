import React, { useReducer, useState } from "react";

type CounterAction = { type: "INCREASE" } | { type: "DECREASE" };

const counterReducer = (state: number, action: CounterAction): number => {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
};

export const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);
  const handleIncrease = () => dispatch({ type: "INCREASE" });
  const handleDecrease = () => dispatch({ type: "DECREASE" });

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
