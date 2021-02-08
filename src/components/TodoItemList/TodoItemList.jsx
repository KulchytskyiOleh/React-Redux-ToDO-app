import React from "react";
import "./TodoItemList.css";
import TodoItem from "../TodoItem/TodoItem";

function TodoItemList({ todos, deleteTodo, handleChange, onTodoDelete }) {
  return (
    <div className="todoItemList">
      {todos.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          title={item.text}
          completed={item.completed}
          deleteTodo={deleteTodo}
          onTodoDelete={onTodoDelete}
          handleChange={handleChange}
        />
      ))}
    </div>
  );
}

export default TodoItemList;
