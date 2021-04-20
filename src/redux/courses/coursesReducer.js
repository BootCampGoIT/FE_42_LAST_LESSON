import { combineReducers } from "redux";
import {
  CREATEMODULE,
  GETCOURSES,
  RESETERROR,
  SETERROR,
  SETLOADER,
} from "./coursesTypes";

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GETCOURSES:
      return [...payload];
    case CREATEMODULE:
      return [...state, payload];
    default:
      return state;
  }
};
const loaderReducer = (state = false, { type }) => {
  switch (type) {
    case SETLOADER:
      return !state;

    default:
      return state;
  }
};

const errorReducer = (state = "", { type, payload }) => {
  switch (type) {
    case SETERROR:
      return payload;
    case RESETERROR:
      return "";

    default:
      return state;
  }
};

const coursesReducer = combineReducers({
  items: itemsReducer,
  isLoading: loaderReducer,
  error: errorReducer,
});
export default coursesReducer;
