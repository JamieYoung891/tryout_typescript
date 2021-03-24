import React from "react";
import { useTodos } from "../hooks/useTodos";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoContainer = () => {
  const { todos } = useTodos();

  return (
    <div>
      <h1>To Do List</h1>
      <TodoForm />
      <ul>
        {todos.map((todo) => (
          <TodoItem {...{ key: todo.id, todo }} />
        ))}
      </ul>
    </div>
  );
};

export default TodoContainer;
