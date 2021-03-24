import React from "react";
import { Counter } from "./components/Counter";
import Form, { FormProps } from "./components/Form";
import Greetings, { GreetingsProps } from "./components/Greetings";

const App = () => {
  const greetingProps: GreetingsProps = {
    name: "Jamie",
    onClick: (name) => {
      console.log(`${name} says Hello :)`);
    },
  };

  const formProps: FormProps = {
    onSubmit: ({ name, description }) =>
      console.log(`${name} : ${description}`),
  };

  return (
    <>
      <Greetings {...greetingProps} />
      <Counter />
      <Form {...formProps} />
    </>
  );
};

export default App;
