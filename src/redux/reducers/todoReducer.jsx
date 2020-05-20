import uuid from "uuid/v4";
import {
  ADD_TODO,
  EDIT_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from "../actions/todoTypes";

const initState = {
  todos: [
    { title: "todo 1", id: uuid() },
    { title: "todo 2", id: uuid() },
    { title: "todo 3", id: uuid() },
  ],
  editId: null,
  isEditing: false,
};

export const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        title: action.payload,
        id: uuid(),
      };
      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    case DELETE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);

      return {
        ...state,
        todos: [...newTodos],
      };
    case EDIT_TODO:
      return {
        ...state,
        editId: action.payload,
        isEditing: !state.isEditing,
      };
    case UPDATE_TODO:
      const oldTodos = state.todos.map((todo) => {
        if (todo.id === state.editId) {
          todo.title = action.payload;
        }
        return todo;
      });
      return {
        ...state,
        todos: oldTodos,
        isEditing: !state.isEditing,
      };
    default:
      return state;
  }
};
