import React from "react";
import Greetings from "./components/Greetings";

const App: React.FC = () => {
  const greetingProps = {
    name: "Jamie",
    onClick: (name: string) => {
      console.log(`${name} says Hello :)`);
    },
  };

  return <Greetings {...greetingProps} />;
};

export default App;
