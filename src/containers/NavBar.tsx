import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = (props) => {

  const logoutLink = <Link to="/login" onClick={() => {
    sessionStorage.removeItem('username');
    window.location.href = '/login';
  } } className="nav-link">Logout</Link>;

  const links = (
    <div className="navbar-nav">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/posts" className="nav-link">
        Posts
      </Link>
      {logoutLink}
    </div>
  );

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Social Media
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            {sessionStorage.username && links}
          </div>
        </div>
      </nav>
      <br/>
    </div>
  );
};

export default NavBar;
