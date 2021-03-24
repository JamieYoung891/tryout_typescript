import React from "react";
import useCounter from "../hooks/useCounter";
import Counter from "./Counter";

const CounterContainer = () => {
  const counterProps = useCounter();
  return <Counter {...counterProps} />;
};

export default CounterContainer;
