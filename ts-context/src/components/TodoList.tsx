import React from "react";
import { useTodoState } from "../contexts/TodosContext";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoState();
  
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem {...{ key: todo.id, todo }} />
      ))}
    </ul>
  );
};

export default TodoList;
