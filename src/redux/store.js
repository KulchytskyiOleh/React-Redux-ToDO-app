import { createStore } from "redux";
import reducer from "../redux/reducer";
import { devToolsEnhancer } from "redux-devtools-extension";
// const store = createStore(reducer,composeEnhancers());
const store = createStore(reducer, devToolsEnhancer());
export default store;
