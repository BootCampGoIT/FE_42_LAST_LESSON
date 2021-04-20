import React, { useReducer } from "react";
import {
  courseForm,
  courseFormSelect,
  courseFormLabel,
  courseFormInput,
  courseFormArea,
  courseFormButton,
} from "./AdminForm.module.css";

const options = ["HTML", "JavaScript", "React", "Node", "TypeScript"];

const initialState = {
  name: "HTML",
  title: "",
  description: "",
  data: {},
  arr: [],
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "name":
      return { ...state, name: payload };
    case "title":
      return { ...state, title: payload };
    case "description":
      return { ...state, description: payload };
    default:
      throw new Error();
  }
};

const AdminForm = ({ addModule }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onHandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onHandleSubmit} className={courseForm}>
      <label className={courseFormLabel}>
        Course name:
        <select
          value={state.name}
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
          className={courseFormSelect}>
          {options.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
      <label className={courseFormLabel}>
        Title:
        <input
          type='text'
          value={state.title}
          onChange={(e) => dispatch({ type: "title", payload: e.target.value })}
          className={courseFormInput}
        />
      </label>
      <label>
        Description:
        <input
          type='text'
          value={state.description}
          onChange={(e) =>
            dispatch({ type: "description", payload: e.target.value })
          }
          className={courseFormInput}
        />
      </label>
      <button type='submit' className={courseFormButton}>
        Save module
      </button>
    </form>
  );
};

export default AdminForm;
