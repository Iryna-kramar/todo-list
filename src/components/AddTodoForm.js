import { React, useState } from "react";

const AddTodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onDescriptionChanged = (e) => setDescription(e.target.value);

  const addTodoItem = () => {};

  return (
    <div>
      <form>
        <label htmlFor="title">Todo Title:</label>
        <input
          type="text"
          id=""
          name="title"
          value={title}
          onChange={onTitleChanged}
        />

        <label htmlFor="description">Description:</label>
        <textarea
          id=""
          name="description"
          value={description}
          onChange={onDescriptionChanged}
        />
        <button type="button" onClick={addTodoItem}>
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
