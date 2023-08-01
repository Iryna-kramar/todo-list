import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TodoItemInfo from "./pages/TodoItemInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<TodoItemInfo />} />
      </Routes>
    </div>
  );
}

export default App;
