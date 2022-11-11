import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContexts";

export const NavbarComponent = () => {
  const navigate = useNavigate();
  const { credentials, logout } = useAuthContext();
  const credentialsUser = JSON.parse(credentials);

  console.log(credentialsUser.rol)

  const handleTables = () => {
    console.log(localStorage.getItem("currentRoom"));
    navigate(`/room/positions/${localStorage.getItem("currentRoom")}`);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (err) {
      
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li onClick={() => handleLogout()}>
                  <a className="dropdown-item" href="#">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to="/inicio"
              >
                Home
              </NavLink>
            </li>
            {credentials.rol !== "ADMIN" ? (
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  to="/admin"
                >
                  Administration Panel
                </NavLink>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
