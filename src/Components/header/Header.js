import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import { NavLink } from "react-router-dom";
import { header, list, listItem, link, activeLink } from "./Header.module.css";

const Header = () => {
  return (
    <header className={header}>
      <nav>
        <ul className={list}>
          {mainRoutes.map(({ name, exact, path }) => (
            <li key={path} className={listItem}>
              <NavLink
                to={path}
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
  );
};

export default Header;
