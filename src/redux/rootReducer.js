import { combineReducers } from "redux";
import coursesReducer from "./courses/coursesReducer";

const rootReducer = combineReducers({
  auth: () => ({
    isAuth: false,
  }),
  courses: coursesReducer,
});

export default rootReducer;
