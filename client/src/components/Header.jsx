import { Route, Routes, Link, NavLink } from "react-router";
export default function Header() {
  return (
    <header className="navigation bg-tertiary">
      <nav className="navbar navbar-expand-xl navbar-light text-center fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img width={160} src="images/eventme-logo.png" alt="EventMe" />
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
                  Events
                </NavLink>
              </li>
              <li className="nav-item ">
                {" "}
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
                {" "}
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                  to="/contacts"
                >
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  className="nav-link dropdown-toggle"
                  to=""
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  My Profile
                </NavLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item " to="/profile">
                      Profile
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item " to="/my-events">
                      My Events
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
            {/* account btn */}{" "}
            <a href="#!" className="btn btn-outline-primary">
              Log In
            </a>
            {/* account btn */}{" "}
            <a href="#!" className="btn btn-primary ms-2 ms-lg-3">
              Sign Up
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
