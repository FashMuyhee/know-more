/**
 * Root Reducer
 *
 */
import { combineReducers } from "redux";
import quiz from "./quiz/reducer";
import general from "./general/reducer";

const rootReducer = combineReducers({
  quiz,
  general,
});

export default rootReducer;
