import React, { /* useState,  useEffect*/ } from "react";
import "./App.css";
// import axios from "axios";
import { connect } from "react-redux";
import { addTodo, deleteTodo, handleChange } from "./redux/actions";
import AddTodo from "./components/AddTodoForm/AddTodo";
import TodoItemList from "./components/TodoItemList/TodoItemList";
function App(props) {


  // useEffect(() => {}, []);

  return (
    <div className="App">
      <AddTodo todos={props.todos} addTodo={props.addTodo} />
      <br />
      <TodoItemList
        todos={props.todos}
        addTodo={props.addTodo}
        deleteTodo={props.deleteTodo}
        handleChange={props.handleChange}
      />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(addTodo(text)),
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    handleChange: (id) => dispatch(handleChange(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
