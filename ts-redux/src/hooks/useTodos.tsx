import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux";
import { addTodo, removeTodo, toggleTodo } from "../redux/todos";

export const useTodos = () => {
  const { todos } = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const todosProps = {
    todos,
    handleAddTodo: (text: string) => dispatch(addTodo(text)),
    handleToggleTodo: (id: number) => dispatch(toggleTodo(id)),
    handleRemoveTodo: (id: number) => dispatch(removeTodo(id)),
  };

  return todosProps;
};
