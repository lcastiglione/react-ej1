import React from "react";
import { Link, useMatch } from "react-router-dom";
//import { useRoutes } from "react-router-dom";
import useUser from "hooks/useUser";

import "./Header.css";

export default function Header() {
  const { isLogged, logout, user } = useUser();
  /*
  Si no se está en el path '/login' devuleve null,
  sino devuelve un objeto con datos de la url
  */
  const match = useMatch("/login");

  const handleClick = (e) => {
    e.preventDefault();
    logout();
  };

  const renderLoginButtons = ({ isLogged }) => {
    return isLogged ? (
      <>
        <p className="user">{user}</p>
        <Link to="" onClick={handleClick}>
          Logout
        </Link>
      </>
    ) : (
      <>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </>
    );
  };

  const content = match ? null : renderLoginButtons({ isLogged });

  return <header className="gf-header">{content}</header>;
}
