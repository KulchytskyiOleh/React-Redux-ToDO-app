import * as actionTypes from "./actionTypes";
const initialState = {
  todos: [
    { id: 1, text: "Go to shop", completed: false },
    { id: 2, text: "Buy apples", completed: true },
    { id: 3, text: "Read some book", completed: false },
    { id: 4, text: "Ride on bike", completed: true },
  ],
  filteredTodos: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case actionsTypes.GET_TODOS: {
    //   return { ...state, payload };
    // }
    // case actionsTypes.FETCH_TODOS: {
    //   return { ...state, payload };
    // }
    // case actionsTypes.FETCH_TODO: {
    //   return { ...state, payload };
    // }
    case actionTypes.ADD_TODO: {
      let newTodo = { id: Date.now(), text: action.text, completed: false };
      return { ...state, todos: [...state.todos, newTodo] };
    }
    case actionTypes.HANDLE_CHANGE: {
      return {
        ...state,
        todos: [
          ...state.todos.map((item) =>
            item.id === action.id
              ? { ...item, completed: !item.completed }
              : item
          ),
        ],
      };
    }
    case actionTypes.DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };
    }
    default:
      return state;
  }
};
export default reducer;
