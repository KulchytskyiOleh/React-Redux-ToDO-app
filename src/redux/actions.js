import * as actionTypes from "./actionTypes";
import axios from "axios";

export function fetchTodosRequest(loading) {
  return { type: actionTypes.FETCH_TODOS_REQUEST, loading };
}
export function fetchTodos(todos) {
  return { type: actionTypes.FETCH_TODOS, todos };
}
export function fetchTodo(id) {
  return { type: actionTypes.FETCH_TODO, id };
}
export function fetchTodosFailure(error) {
  return { type: actionTypes.FETCH_TODOS_FAILURE, error };
}
export const addTodo = (newTodo) => {
  return { type: actionTypes.ADD_TODO, newTodo };
};

export function handleChange(id) {
  return { type: actionTypes.HANDLE_CHANGE, id };
}
export function deleteTodo(id) {
  return { type: actionTypes.DELETE_TODO, id };
}

export const fetchingTodos = () => {
  return (dispatch) => {
    dispatch(fetchTodosRequest);
    axios
      .get(`http://localhost:5000/todos/`)
      .then((res) => {
        const todos = res.data;
        dispatch(fetchTodos(todos));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchTodosFailure(errorMsg));
      });
  };
};
export const fetchingTodo = (id) => {
  return (dispatch) => {
    dispatch(fetchTodosRequest);
    axios.get(`http://localhost:5000/todos/${id}`).then((res) => {
      // const todo = res.data;
      dispatch(fetchTodo(id));
    });
  };
};
export const onTodoDelete = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:5000/todos/${id}`);
    dispatch(deleteTodo(id));
  };
};
export const onAddTodo = (text) => {
  return (dispatch) => {
    axios
      .post(`http://localhost:5000/todos/`, {
        id: "",
        text,
        completed: false,
        category: "My todos",
      })
      .then((res) => {
        const newTodo = res.data;
        dispatch(addTodo(newTodo));
      });
  };
};
