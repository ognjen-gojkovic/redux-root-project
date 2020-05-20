import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/actions/todoActions";

const TodoForm = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.todoReducer);
  const [title, setTitle] = useState("");

  const updateEdit = (e) => {
    e.preventDefault();
    dispatch(updateTodo(title));
    document.querySelector("input").value = "";
  };

  const changeHandler = (e) => {
    setTitle(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(title));
    document.querySelector("input").value = "";
  };

  console.log(title);
  return (
    <React.Fragment>
      {store.isEditing ? (
        <form onSubmit={updateEdit}>
          <input
            type="text"
            placeholder="Enter Task..."
            onChange={(e) => changeHandler(e)}
          />
          <button type="submit">Submit Edit</button>
        </form>
      ) : (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Enter Task..."
            onChange={(e) => changeHandler(e)}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </React.Fragment>
  );
};

export default TodoForm;
