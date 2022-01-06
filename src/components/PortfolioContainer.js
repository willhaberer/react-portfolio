import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import ghlogo from "../assets/gh-logo.png";
import lilogo from "../assets/LIlogo.png";
import "../styles/style.css";

export default function PortfolioContainer() {
  const styles = {
    logos: {
      margin: "20px",
    },
  };

  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <div>
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
      <div id="footer">
        <a
          href="https://github.com/willhaberer"
          target="_blank"
          rel="noreferrer"
          style={styles.logos}
        >
          <img src={ghlogo} alt="Github Logo" height="5%" width="5%"></img>
        </a>
        <a
          href="https://www.linkedin.com/in/will-haberer/"
          target="_blank"
          rel="noreferrer"
          style={styles.logos}
        >
          <img src={lilogo} alt="Linkedin Logo" height="7%" width="7%"></img>
        </a>
      </div>
    </>
  );
}
