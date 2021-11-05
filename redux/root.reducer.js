import { combineReducers } from "redux";
import demoReducer from "./reducers/demoReducer";

const rootReducer = combineReducers({
  demo: demoReducer,
});

export default rootReducer;
