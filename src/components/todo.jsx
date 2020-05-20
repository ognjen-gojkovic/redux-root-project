import React from "react";
import { useDispatch } from "react-redux";
import { editTodo, deleteTodo } from "../redux/actions/todoActions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    document.querySelector("input").value = todo.title;
    dispatch(editTodo(id));
  };

  return (
    <li>
      <span>{todo.title}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
      <button onClick={() => handleEdit(todo.id)}>Edit</button>
    </li>
  );
};

export default Todo;
