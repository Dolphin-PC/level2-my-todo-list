import { combineReducers, createStore } from "redux";
import { todos } from "../modules/todos";

const rootReducer = combineReducers({
  // reducers
  todos,
});

const store = createStore(rootReducer);

// store type
export type TStore = ReturnType<typeof rootReducer>;

export default store;
