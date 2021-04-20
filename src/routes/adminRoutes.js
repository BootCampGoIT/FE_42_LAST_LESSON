import { lazy } from "react";

export const adminRoutes = [
  {
    name: "courses",
    path: "/courses",
    exact: false,
    component: lazy(() =>
      import(
        "../Components/admin/courses/AdminCourses" /* webpackChunkName: "AdminCourses" */
      )
    ),
  },
  {
    name: "groups",
    path: "/groups",
    exact: false,
    component: lazy(() =>
      import(
        "../Components/admin/groups/AdminGroups" /* webpackChunkName: "AdminGroups" */
      )
    ),
  },
];
