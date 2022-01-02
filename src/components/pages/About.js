import React from "react";
import "../../styles/style.css";

export default function About() {
  return (
    <div class="main-content">
      <h1 id="page-header">About Me</h1>
      <div class="row me-info">
        <div class="col-6">
          Will Haberer is a web developement student at Columbia Coding Bootcamp
          learning full-stack development through HTML, CSS and Javascript. He
          is based in Arlington Virginia.
        </div>
        <div class="col-3">
          <img
            src="https://www.trilogyed.com/blog/wp-content/uploads/2018/05/columbia_coding_boot_camp2_brandon_colbert.jpg"
            alt="Columbia Coding Bootcamps"
            id="about-image"
          ></img>
        </div>
      </div>
      <div class="row work-info">
        <div class="col-3">
          <img
            src="https://www.trilogyed.com/blog/wp-content/uploads/2018/05/columbia_coding_boot_camp2_brandon_colbert.jpg"
            alt="Work"
            id="about-image"
          ></img>
        </div>
        <div class="col-6" id="work-text-container">
          <p id="work-text">My previous work is certainly something</p>
        </div>
      </div>
      <div class="row hobby-info">
        <div class="col-6">
          <p>
            In my free time i enjoy cooking, hiking and working on creative
            projects such as making videos, coding projects and creating puzzles
          </p>
        </div>
        <div class="col-3">
          <img
            src="https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_1280.jpg"
            alt="Cooking"
            id="about-image"
          ></img>
        </div>
      </div>
    </div>
  );
}
