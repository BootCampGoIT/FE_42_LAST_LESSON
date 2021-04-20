import React, { useReducer, useEffect } from "react";
import { addCourseItem } from "../../../services/adminCoursesAPI";
import AdminDescription from "./adminDescription/AdminDescription";
import AdminForm from "./adminForm/AdminForm";
import AdminList from "./adminList/AdminList";

const initialState = {
  courses: [
    {
      name: "HTML",
      modules: [],
    },
    { name: "JavaScript", modules: [] },
    { name: "React", modules: [] },
    { name: "Node", modules: [] },
  ],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "addModule":
      return {
        ...state,
        courses: [
          ...state.courses.map((courseItem) =>
            courseItem.name === payload.name
              ? {
                  ...courseItem,
                  modules: [...courseItem.modules, { ...payload }],
                }
              : courseItem
          ),
        ],
      };

    default:
      throw new Error();
  }
};

const AdminCourses = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addModule = async (moduleItem) => {
    console.log(moduleItem);
    try {
      const response = await addCourseItem(moduleItem);
      dispatch({ type: "addModule", payload: { id: response, ...moduleItem } });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>AdminCourses</h2>
      <AdminForm addModule={addModule} />

      <AdminList />
    </>
  );
};

export default AdminCourses;
