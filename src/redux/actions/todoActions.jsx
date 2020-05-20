import { ADD_TODO, EDIT_TODO, UPDATE_TODO, DELETE_TODO } from "./todoTypes";

export const addTodo = (title) => {
  return {
    type: ADD_TODO,
    payload: title,
  };
};

export const editTodo = (id) => {
  return {
    type: EDIT_TODO,
    payload: id,
  };
};

export const updateTodo = (title) => {
  return {
    type: UPDATE_TODO,
    payload: title,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id,
  };
};
