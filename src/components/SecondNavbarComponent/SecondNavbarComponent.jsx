import React from 'react'
import { NavLink } from 'react-router-dom'

export const SecondNavbarComponent = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/room/matches/" + localStorage.getItem('currentRoom')}
              >
                Matches
              </NavLink>
              </li>
              <li class="nav-item">
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                to={"/room/predicts/" + localStorage.getItem('currentRoom')}
              >
                My predicts
              </NavLink>
              </li>
              <li className="nav-item">
            </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}
