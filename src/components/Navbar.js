import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

/* Use active style if you need to style the active link, so className="nav-link" becomes activeClassName="nav-link" because nav-link is the CSS needed for the active link */

const Navbar = (props) => {
  const pageLinks = props.pages.map((page) => (
    <li className="nav-item" key={page.name}>
      <NavLink exact to={`/pages/${page.name}`} className="nav-link">
        {page.name}
      </NavLink>
    </li>
  ));

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <Link className="navbar-brand" to="/pages">
        Diplomatic Enjoy DE1
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">{pageLinks}</ul>
      </div>
    </nav>
  );
};
export default Navbar;
