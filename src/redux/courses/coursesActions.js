import {
  CREATEMODULE,
  GETCOURSES,
  RESETERROR,
  SETERROR,
  SETLOADER,
} from "./coursesTypes";

// ========= courses ============
const getCourses = (courses) => {
  return {
    type: GETCOURSES,
    payload: courses,
  };
};

// =========== modules ===========

const addModule = (moduleItem) => {
  return {
    type: CREATEMODULE,
    payload: moduleItem,
  };
};

// =========== loader ===========
const setLoader = () => {
  return {
    type: SETLOADER,
  };
};
// =========== error ===========
const setError = (error) => {
  return {
    type: SETERROR,
    payload: error,
  };
};

const resetError = () => {
  return {
    type: RESETERROR,
  };
};

export { getCourses, addModule, setLoader, setError, resetError };
