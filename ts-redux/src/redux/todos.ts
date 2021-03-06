const ADD_TODO = 'todos/ADD_TODO' as const;
const TOGGLE_TODO = 'todos/TOGGLE_TODO' as const;
const REMOVE_TODO = 'todos/REMOVE_TODO' as const;

export const addTodo = (text: string) => ({ type: ADD_TODO, payload: text })
export const toggleTodo = (id: number) => ({ type: TOGGLE_TODO, payload: id })
export const removeTodo = (id: number) => ({ type: REMOVE_TODO, payload: id })

type TodosAction =
  | ReturnType<typeof addTodo>
  | ReturnType<typeof toggleTodo>
  | ReturnType<typeof removeTodo>

export type Todo = {
  id: number
  text: string
  done: boolean
}

type TodosState = Todo[]

const initialState: TodosState = [
  { id: 1, text: 'Learn TypeScript', done: true },
  { id: 2, text: 'Use TypeScript with Redux', done: true },
  { id: 3, text: 'Make ToDo List', done: false }
]

const todos = (state: TodosState = initialState, action: TodosAction) => {
  switch (action.type) {
    case ADD_TODO:
      const nextId = Math.max(0, ...state.map(todo => todo.id)) + 1
      return state.concat({ id: nextId, text: action.payload, done: false })
    case TOGGLE_TODO:
      return state.map(todo => todo.id === action.payload ? { ...todo, done: !todo.done } : todo)
    case REMOVE_TODO:
      return state.filter(todo => todo.id !== action.payload)
    default:
      return state
  }
}

export default todos