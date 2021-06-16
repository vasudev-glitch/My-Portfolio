import React from "react";
import logo from "../logo.png";
// React FONT AWESOME IMPORT//
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        ""
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo.." />
          </a>
          Navbar
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{color:"whitesmoke"}}/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              
            
                  <li className="nav-item">
                <a className="nav-link" href="#">Serivces</a></li>
                <li className="nav-item">
                <a className="nav-link" href="#">About Me</a></li>
                <li className="nav-item">
                <a className="nav-link" href="#">Portfolio</a></li>
                <li className="nav-item">
                <a className="nav-link" href="#">Contact</a></li>
              

            </ul>

          </div>

        </div>

      </nav>

    </div>
  );
};

export default Navbar;
