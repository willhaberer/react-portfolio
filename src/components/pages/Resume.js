import React from "react";
import "../../styles/style.css";

export default function Home() {
  return (
    <>
      <div class="resumeContainer">
        <h1>Work Experience</h1>
        <ul id="resumeWorkList">
          <li>Digital and Data Director-WRS, August 2020-June 2021</li>
          <li>Administrative Assistant-Benefits in A Card, May-July 2019</li>
        </ul>
      </div>
      <div class="resumeContainer">
        <h1>Volunteer Experience</h1>
        <ul id="resumeVolList">
          <li>
            Head Coach-Soccer Organization of the Charlottesville Area,
            September 2017- October 2020
          </li>
          <li>Head Coach-Nashville Sled Preds Tier V Adult, 2015-2017</li>
        </ul>
      </div>
      <div class="resumeContainer">
        <h1>Education</h1>
        <ul id="resumeVolList">
          <li>Columbia University Web Development Bootcamp- 2021</li>
          <li>University of Virginia BA, Government- 20127-2020</li>
        </ul>
      </div>
    </>
  );
}
