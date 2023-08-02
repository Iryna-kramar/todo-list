import React, { useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

const TodoItem = (props) => {
  console.log("props", props);
  const { item, editTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const edit = (id, value, e) => {
    if (e.which === 13) {
      editTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li key={item.id} className="card">
      <input
        className="card-title"
        type="text"
        name="todoItem"
        ref={inputRef}
        defaultValue={item.title}
        onKeyPress={(e) => edit(item.id, inputRef.current.value, e)}
      />
      <textarea
        type="text"
        name="todoItem"
        ref={inputRef}
        defaultValue={item.description}
        onKeyPress={(e) => edit(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button onClick={() => changeFocus()}>
          <AiFillEdit />
        </button>
        {item.completed === false && (
          <button
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
            <IoCheckmarkDoneSharp />
          </button>
        )}
        <button style={{ color: "red" }} onClick={() => removeTodo(item.id)}>
          <IoClose />
        </button>
      </div>
      {item.completed && <span className="completed">done</span>}
    </li>
  );
};

export default TodoItem;
