import React, { useEffect } from "react";
import { getCoursesOperation } from "../../../../redux/courses/coureseOperations";
import { useDispatch, useSelector } from "react-redux";
import { coursesSelector } from "../../../../redux/courses/coureseSelectors";
import { NavLink, Route, useRouteMatch } from "react-router-dom";
import AdminDescription from "../adminDescription/AdminDescription";

const AdminList = () => {
  const courses = useSelector(coursesSelector);
  const match = useRouteMatch();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoursesOperation());
  }, [dispatch]);

  return (
    <div style={{ display: "flex" }}>
      <ul>
        {courses.map((course) => (
          <li key={course.name}>
            <h2>{course.name}</h2>
            <ul>
              {course.modules.map((moduleItem) => (
                <li key={moduleItem.id}>
                  <NavLink to={`${match.url}/${course.name}/${moduleItem.id}`}>
                    {moduleItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Route
        path={`${match.url}/:name/:moduleId`}
        exact
        component={AdminDescription}
      />
    </div>
  );
};

export default AdminList;
