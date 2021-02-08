import React, { /* useState, */ useEffect } from "react";
import "./App.css";
// import axios from "axios";
import { connect } from "react-redux";
import * as action from "./redux/actions";
import AddTodo from "./components/AddTodoForm/AddTodo";
import TodoItemList from "./components/TodoItemList/TodoItemList";
function App(props) {
  const { fetchingTodos } = props;
  useEffect(() => {
    fetchingTodos();
  }, []);

  return (
    <div className="App">
      {/*      {props.todos.loading ? (
        <h2>loading</h2>
      ) : props.todos.error ? (
        <h2>{props.todos.error}</h2>
      ) : ( */}

      <AddTodo todos={props.todos} onAddTodo={props.onAddTodo} />
      <br />
      <TodoItemList
        todos={props.todos}
        addTodo={props.addTodo}
        deleteTodo={props.deleteTodo}
        handleChange={props.handleChange}
        onTodoDelete={props.onTodoDelete}
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
    fetchingTodos: () => dispatch(action.fetchingTodos()),
    onAddTodo: (text) => dispatch(action.onAddTodo(text)),
    deleteTodo: (id) => dispatch(action.deleteTodo(id)),
    handleChange: (id) => dispatch(action.handleChange(id)),
    onTodoDelete: (id) => dispatch(action.onTodoDelete(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
