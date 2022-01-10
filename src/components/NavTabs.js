import React from "react";
import "../styles/style.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg navbar-light navigation blue"
    >
      <h2 className="navbar-brand bitter" id="head">
        Will Haberer
      </h2>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse blue" id="navbarTogglerDemo02">
        <ul id="nav-list" className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a
              className={
                currentPage === "About"
                  ? "nav-link active minor"
                  : "nav-link minor"
              }
              href="#about"
              id="toggle"
              onClick={() => handlePageChange("About")}
            >
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
              href="#portfolio"
              id="toggle"
              onClick={() => handlePageChange("Portfolio")}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
              href="#contact"
              id="toggle"
              onClick={() => handlePageChange("Contact")}
            >
              Contact Me
            </a>
          </li>
          <li className="nav-item">
            <a
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
              href="#resume"
              id="toggle"
              onClick={() => handlePageChange("Resume")}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavTabs;
