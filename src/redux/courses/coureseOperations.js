import { getCourses, resetError, setError, setLoader } from "./coursesActions";
import { getAllCourses } from "../../services/adminCoursesAPI";

const getCoursesOperation = () => async (dispatch, getState) => {
  getState().courses.error && dispatch(resetError());
  dispatch(setLoader());
  try {
    const courses = await getAllCourses();
    dispatch(getCourses(courses));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoader());
  }
};

export { getCoursesOperation };
