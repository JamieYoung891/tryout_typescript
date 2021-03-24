import React from "react";
import "./TodoItem.css";

export type TodoItemProps = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

const TodoItem = ({ todo }: TodoItemProps) => (
  <li className={`TodoItem${todo.done ? " done" : ""}`}>
    <span className="text">{todo.text}</span>
    <span className="remove">(x)</span>
  </li>
);

export default TodoItem;
