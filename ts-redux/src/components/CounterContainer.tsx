import React from "react";
import useCounter from "../hooks/useCounter";
import Counter from "./Counter";

const CounterContainer = () => {
  const counterProps = useCounter();
  return (
    <div>
      <h1>Counter</h1>
      <Counter {...counterProps} />
    </div>
  );
};

export default CounterContainer;
