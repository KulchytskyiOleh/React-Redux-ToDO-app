import * as actionTypes from "./actionTypes";

export function getTodos(payload) {
  return { type: actionTypes.GET_TODOS, payload };
}
export function fetchTodos(payload) {
  return { type: actionTypes.FETCH_TODOS, payload };
}
export function fetchTodo(payload) {
  return { type: actionTypes.FETCH_TODO, payload };
}
export const addTodo = (text) => {
  return { type: actionTypes.ADD_TODO,  text };
};

export function handleChange(id) {
  return { type: actionTypes.HANDLE_CHANGE, id };
}
export function deleteTodo(id) {
  return { type: actionTypes.DELETE_TODO, id };
}
