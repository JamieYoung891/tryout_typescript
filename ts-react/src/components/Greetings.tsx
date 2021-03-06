import React from "react";

export type GreetingsProps = {
  name: string;
  mark?: string;
  optional?: string;
  onClick: (name: string) => void;
};

const Greetings = ({ name, mark, optional, onClick }: GreetingsProps) => {
  const handleClick = () => onClick(name);

  return (
    <>
      <div>
        <h1>Greetings</h1>
        <p>Hello, {name + mark}</p>
        {optional && <p>{optional}</p>}
        <div>
          <button onClick={handleClick}>Click Me</button>
        </div>
      </div>
    </>
  );
};

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
