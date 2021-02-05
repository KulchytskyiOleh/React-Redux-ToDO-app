import React /* useState */ from "react";
import { FaWindowClose } from "react-icons/fa";
import "./TodoItem.css";

function TodoItem({ item, deleteTodo, handleChange }) {
  return (
    <>
      <div className={item.completed ? "todoItem completed" : "todoItem"}>
        <input
          className="todoItemCheckbox"
          type="checkbox"
          checked={item.completed}
          onChange={() => handleChange(item.id)}
        />
        <p
          className={item.completed ? "todoItemText completed" : "todoItemText"}
          onClick={() => handleChange(item.id)}
        >
          {item.text}
        </p>
        <span className="todoItemDelete">
          <FaWindowClose onClick={() => deleteTodo(item.id)} />
        </span>
      </div>
    </>
  );
}
export default TodoItem;
