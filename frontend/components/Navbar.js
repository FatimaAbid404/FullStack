import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link class="navbar-brand" href="/">
          <img src="/vid-click.png" alt="Logo" height="30" />
        </Link>
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/videos"
              >
                Videos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/search">
                Search
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/upload">
                Upload <i class="fa fa-upload" aria-hidden="true"></i>
              </Link>
            </li>
          </ul>
          <div
            className={`form-check form-switch text-${
              props.mode === 'light' ? 'dark' : 'light'
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}
