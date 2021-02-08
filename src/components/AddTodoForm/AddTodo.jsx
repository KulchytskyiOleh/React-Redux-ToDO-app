import React, { useState } from "react";
import "./AddTodo.css";
const AddTodo = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  let onSubmit = (e) => {
    e.preventDefault();
    onAddTodo(text);
    setText("");
  };

  return (
    <form className="addTodoForm" onSubmit={onSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="addTodoInput"
      />
      <input className="addTodoSubmit" type="submit" value="+" />
    </form>
  );
};
export default AddTodo;
