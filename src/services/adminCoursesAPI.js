import axios from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_BASE_URL}`;

const getAllCourses = async () => {
  try {
    const response = await axios.get(`/courses.json`);
    const result = Object.keys(response.data).map((key) => ({
      name: key,
      modules: [
        ...Object.keys(response.data[key]).map((item) => ({
          id: item,
          ...response.data[key][item],
        })),
      ],
    }));

    return result;
  } catch (error) {
    throw new Error(error);
  }
};

const addCourseItem = async (moduleItem) => {
  try {
    const response = await axios.post(
      `/courses/${moduleItem.name}.json`,
      moduleItem
    );
    return response.data.name;
  } catch (error) {
    throw new Error(error);
  }
};

// const deleteCourseItem = async (id) => {
//   try {
//     await axios.delete(`${process.env.REACT_APP_BASE_URL}/courses/${id}.json`);
//   } catch (error) {
//     throw new Error(error);
//   }
// };

export {
  getAllCourses,
  addCourseItem,
  //  deleteCourseItem
};
