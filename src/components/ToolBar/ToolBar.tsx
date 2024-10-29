import { NavLink } from "react-router-dom";
import "./Toolbar.css";

const ToolBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark p-4">
        <div className="container px-4">
          <NavLink className="name title" to="/">
            <span className=" navbar-brand mb-0 text-white fs-2 ">
              Static Pages
            </span>
          </NavLink>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/pages">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/pages/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/pages/contacts">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/pages/divisions">
                  Divisions
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/pages/education">
                  Education
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/pages/history">
                  History
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/pages/admin">
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ToolBar;
