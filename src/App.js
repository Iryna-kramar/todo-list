import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import TodoItemInfo from "./pages/TodoItemInfo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/:id" element={<TodoItemInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
