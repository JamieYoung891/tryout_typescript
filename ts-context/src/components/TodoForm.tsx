import React, { useState } from "react";
import { useTodosDispatch } from "../contexts/TodosContext";

const TodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useTodosDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "CREATE", text: value });
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
