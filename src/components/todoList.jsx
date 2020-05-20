import React from "react";
import { useSelector } from "react-redux";
import Todo from "./todo";

const TodoList = () => {
  const store = useSelector((state) => state.todoReducer);
  return (
    <React.Fragment>
      <h2>Todo List</h2>
      <ul>
        {store.todos.map((todo) => {
          return <Todo key={todo.id} todo={todo} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default TodoList;
