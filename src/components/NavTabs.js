import React from "react";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//the prop is passed in when the page is rendered
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          //forget the word but its an or statement

          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange("About")}
          //  TODO: Add a comment explaining what this logic is doing
          //checking to see what info it has to decide what to render

          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#blog"
          onClick={() => handlePageChange("Blog")}
          //  TODO: Add a comment explaining what this logic is doing
          //checking if the current page is blog to style the nav bar

          className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
