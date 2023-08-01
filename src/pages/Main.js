import React from 'react';
import "../css/main.css";
import AddTodoForm from "./../components/AddTodoForm"



function Main() {
  return (
    <div>
        <h1>Todo App</h1>
        <AddTodoForm/>
        <div>Search</div>

    </div>
  )
}

export default Main