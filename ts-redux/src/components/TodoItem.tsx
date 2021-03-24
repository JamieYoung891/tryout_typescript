import React from "react";
import { useTodos } from "../hooks/useTodos";
import { Todo } from "../redux/todos";
import "./TodoItem.css";

const TodoItem = ({ todo: { id, text, done } }: { todo: Todo }) => {
  const { handleToggleTodo, handleRemoveTodo } = useTodos();

  return (
    <li className={`TodoItem${done ? " done" : ""}`}>
      <span className="text" onClick={() => handleToggleTodo(id)}>
        {text}
      </span>
      <span className="remove" onClick={() => handleRemoveTodo(id)}>
        (x)
      </span>
    </li>
  );
};

export default TodoItem;
