import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // submit
    setValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={value}
        placeholder="Add your task :)"
        onChange={(e) => setValue(e.target.value)}
      />
      <button>Submit</button>
    </form>
  );
};

export default TodoForm;
