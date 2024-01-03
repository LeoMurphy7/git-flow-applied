import React from "react";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-2">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/homepage">
              Home 
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="price">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/todo">
              todo list
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
