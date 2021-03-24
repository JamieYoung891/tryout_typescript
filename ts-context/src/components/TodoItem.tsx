import React from "react";
import { useTodosDispatch } from "../contexts/TodosContext";
import "./TodoItem.css";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const dispatch = useTodosDispatch();

  const handleToggle = () => {
    dispatch({ type: "TOGGLE", id: todo.id });
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE", id: todo.id });
  };

  return (
    <li className={`TodoItem${todo.done ? " done" : ""}`}>
      <span className="text" onClick={handleToggle}>
        {todo.text}
      </span>
      <span className="remove" onClick={handleRemove}>
        (x)
      </span>
    </li>
  );
};

export default TodoItem;
