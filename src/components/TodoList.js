import { React, useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  editTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    editTodo: (obj) => dispatch(editTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

function TodoList(props) {
  const [filter, setFilter] = useState("all");

  const { todos } = props;

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos.filter((item) => {
    if (filter === "active") {
      return !item.completed;
    } else if (filter === "completed") {
      return item.completed;
    } else {
      return true; // for 'all' sort, include all items
    }
  });

  return (
    <div>
      <div className="sort">
        <select value={filter} onChange={handleFilterChange}>
          <option value="active">Active</option>
          <option value="completed">Completed</option>
          <option value="all">All</option>
        </select>
      </div>
      <ul>
        {filteredTodos.length > 0 &&
          filteredTodos.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              removeTodo={props.removeTodo}
              editTodo={props.editTodo}
              completeTodo={props.completeTodo}
            />
          ))}
    </ul>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
