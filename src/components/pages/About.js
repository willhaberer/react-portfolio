import React from "react";
import "../../styles/style.css";
import coverPhoto from "../../assets/coding-info.png";

export default function About() {
  return (
    <div class="main-content">
      <div class="aboutCard">
        <h1 id="page-header">About Me</h1>
        <img src={coverPhoto} alt="CoverPhoto" className="cover-photo"></img>
        <br></br>
        <p>
          Hello! I'm a web developement student at Columbia Coding Bootcamp
          learning full-stack development through HTML, CSS and Javascript.
          Currently I am based in Arlington Virginia.
        </p>
      </div>
    </div>
  );
}
