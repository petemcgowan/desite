import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    const pageLinks = this.props.pages.map(page => (
      <li className='nav-item' key={page.name}>
        <NavLink exact to={`/pages/${page.name}`} className='nav-link'>
          {page.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/pages'>
          Diplomatic Enjoy
        </Link>

        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            {pageLinks}
          </ul>
        </div>
      </nav>
    );
  }
}
export default Navbar;