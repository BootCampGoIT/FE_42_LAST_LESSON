import React, { Suspense } from "react";
import { adminRoutes } from "../routes/adminRoutes";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { list, listItem, link, activeLink } from "./AdminPage.module.css";

const AdminPage = () => {
  const match = useRouteMatch();
  return (
    <section>
      <header>
        <nav>
          <ul className={list}>
            {adminRoutes.map(({ name, exact, path }) => (
              <li key={path} className={listItem}>
                <NavLink
                  to={`${match.url}${path}`}
                  exact={exact}
                  className={link}
                  activeClassName={activeLink}>
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <Suspense fallback={<h2>...loading</h2>}>
        <Switch>
          {adminRoutes.map(({ path, exact, component }) => (
            <Route
              path={`${match.path}${path}`}
              exact={exact}
              component={component}
              key={path}
            />
          ))}
        </Switch>
      </Suspense>
    </section>
  );
};

export default AdminPage;
