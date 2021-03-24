import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
};

// const Greetings: React.FC<GreetingsProps> = ({ name, mark = "!" }) => (
//   <div>Hello, {name}{mark}</div>
// );

// Greetings.defaultProps = {
//   mark: "!",
// };

// above code emits error regarding mark
// below code works well

const Greetings = ({ name, mark }: GreetingsProps) => (
  <div>Hello, {name + mark}</div>
);

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
