import React from "react";
import "../../styles/style.css";

export default function About() {
  return (
    <div class="main-content">
      <h1>About Me</h1>

      <div class="row about-me">
        <div class="col-6">
          Will Haberer is a web developement student at Columbia Coding Bootcamp
          learning full-stack development through HTML, CSS and Javascript. He
          is based in Arlington Virginia.
        </div>
        <div class="col-3">
          <img
            src="https://www.trilogyed.com/blog/wp-content/uploads/2018/05/columbia_coding_boot_camp2_brandon_colbert.jpg"
            alt="Columbia Coding Bootcamps"
          ></img>
        </div>
      </div>
    </div>
  );
}
