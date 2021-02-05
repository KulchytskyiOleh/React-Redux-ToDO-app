import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
// import todosData from "./Data";
import AddTodo from "./components/AddTodoForm/AddTodo";
import TodoItemList from "./components/TodoItemList/TodoItemList";
function App() {
  // const [todos, setTodos] = useState(todosData);
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos();
      setTodos(todosFromServer);
    };
    getTodos();
  }, []);

  const fetchTodos = async () => {
    const todos = await axios
      .get(`http://localhost:5000/todos/`)
      .then((res) => res.data);
    return todos;
  };

  const fetchTodo = async (id) => {
    const todo = await axios
      .get(`http://localhost:5000/todos/${id}`)
      .then((res) => res.data);
    return todo;
  };

  const onAddTodo = async (text) => {
    const newTodo = await axios
      .post(`http://localhost:5000/todos/`, {
        id: "",
        text,
        completed: false,
        category: "My todos",
      })
      .then((res) => res.data);
    return setTodos([...todos, newTodo]);
  };

  const handleChange = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const updTodo = { ...todoToToggle, completed: !todoToToggle.completed };
    const updatedTodo = await axios
      .put(`http://localhost:5000/todos/${id}`, updTodo)
      .then((res) => res.data);
    return setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: updatedTodo.completed } : item
      )
    );
  };
  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todos/${id}`);
    return setTodos(todos.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <AddTodo onAddTodo={onAddTodo} todos={todos} />
      <br />
      <TodoItemList
        handleChange={handleChange}
        onAddTodo={onAddTodo}
        deleteTodo={deleteTodo}
        todos={todos}
      />
    </div>
  );
}

export default App;
