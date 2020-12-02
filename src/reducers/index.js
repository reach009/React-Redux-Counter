import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

// combined all reducers into one
const allReducers = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default allReducers;
