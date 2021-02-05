import React from "react";
import "./TodoItemList.css";
import TodoItem from "../TodoItem/TodoItem";
//fsdfsdf
function TodoItemList({ todos, deleteTodo, handleChange }) {
  return (
    <div className="todoItemList">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          title={item.text}
          completed={item.completed}
          deleteTodo={deleteTodo}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default TodoItemList;
