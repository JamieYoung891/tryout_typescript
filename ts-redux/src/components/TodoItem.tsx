import React from "react";
import { Todo } from "../redux/todos";
import "./TodoItem.css";

const TodoItem = ({ todo: { id, text, done } }: { todo: Todo }) => {
  return (
    <li className={`TodoItem${done ? " done" : ""}`}>
      <span className="text">{text}</span>
      <span className="remove">(x)</span>
    </li>
  );
};

export default TodoItem;
