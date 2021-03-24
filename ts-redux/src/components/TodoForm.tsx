import React, { useState } from "react";
import { useTodos } from "../hooks/useTodos";
import { RootState } from "../redux";

const TodoForm = () => {
  const { handleAddTodo } = useTodos();
  const [value, setValue] = useState("");

  const formProps = {
    onSubmit: (e: React.FormEvent) => {
      e.preventDefault();
      handleAddTodo(value);
      setValue("");
    },
  };
  const inputProps = {
    name: "text",
    value,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
      setValue(e.target.value),
  };

  return (
    <form {...formProps}>
      <input {...inputProps} />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
