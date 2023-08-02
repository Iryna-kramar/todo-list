import React from "react";
import "../css/main.css";
import AddTodoForm from "./../components/AddTodoForm";
import TodoList from "./../components/TodoList";

function Main(props) {
  return (
    <div className="main">
      <AddTodoForm />
      <TodoList />
    </div>
  );
}

export default Main;
