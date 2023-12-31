import { React, useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../redux/reducer";
import { GoPlus } from "react-icons/go";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};

const AddTodoForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // console.log("props", props);
  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);

  const addTodoItem = () => {
    if (title === "") {
      alert("Enter Todo item");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        title: title,
        description: description,
        completed: false,
      });
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="addTodos">
      <form className="addForm">
        <label htmlFor="title">Todo Title:</label>
        <input
          className="todo-input"
          type="text"
          name="title"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          className="todo-input"
          name="description"
          value={description}
          onChange={onDescriptionChanged}
        />
        <button className="add-btn" type="button" onClick={addTodoItem}>
          <GoPlus />
        </button>
      </form>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
