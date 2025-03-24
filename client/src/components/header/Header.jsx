import { useState, useContext } from "react";
import { Link, NavLink, Navigate, useNavigate } from "react-router";

import useAuth from "../../hooks/useAuth";
import { useLogout } from "../../api/authApi";

import Login from "../login/Login";
import Register from "../register/Register";

export default function Header() {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const { username, isAuthenticated } = useAuth();

  const loginClickHandler = () => {
    setShowLoginForm((setShowLoginForm) => !setShowLoginForm);
    setShowRegisterForm(false);
  };
  const registerClickHandler = () => {
    setShowRegisterForm((showRegisterForm) => !showRegisterForm);
    setShowLoginForm(false);
  };
  return (
    <header className="navigation bg-tertiary">
      <nav className="navbar navbar-expand-xl navbar-light text-center fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img width={160} src="/images/eventme-logo.png" alt="EventMe" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {" "}
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item ">
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/events"
                >
                  All Events
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/about"
                >
                  About
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              </li>
              {isAuthenticated && (
                <li className="nav-item dropdown">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link dropdown-toggle active"
                        : "nav-link dropdown-toggle"
                    }
                    to="!"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="fa-solid fa-circle-user"></i> {username}
                  </NavLink>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <NavLink
                        to="/my-events"
                        className={({ isActive }) =>
                          isActive ? "dropdown-item  active" : "dropdown-item "
                        }
                      >
                        My Events
                      </NavLink>
                    </li>
                    <li>
                      <Link to="/logout" className="dropdown-item">
                        Logout
                      </Link>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
            {!isAuthenticated && (
              <button onClick={loginClickHandler} className="btn btn-primary">
                Log In
              </button>
            )}
            {showLoginForm && (
              <Login
                showLoginModal={loginClickHandler}
                showRegisterModal={registerClickHandler}
                showRegister={showRegisterForm}
                showLogin={showLoginForm}
              ></Login>
            )}
            {showRegisterForm && (
              <Register
                showLoginModal={loginClickHandler}
                showRegisterModal={registerClickHandler}
                showRegister={showRegisterForm}
                showLogin={showLoginForm}
              ></Register>
            )}
            {/* account btn */}{" "}
          </div>
        </div>
      </nav>
    </header>
  );
}
