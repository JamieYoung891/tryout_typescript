import React from "react";
import TodoItem from "./TodoItem";

const todos = [
  {
    id: 1,
    text: "Context API 배우기",
    done: true,
  },
  {
    id: 2,
    text: "TypeScript 배우기",
    done: true,
  },
  {
    id: 3,
    text: "TypeScript 와 Context API 함께 사용하기",
    done: false,
  },
];

const TodoList = () => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem {...{ key: todo.id, todo }} />
      ))}
    </ul>
  );
};

export default TodoList;
