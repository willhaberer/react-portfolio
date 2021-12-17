import React from "react";
import "../../styles/style.css";

export default function Portfolio() {
  return (
    <>
      <div class="main-content">
        <h1>Portfolio</h1>

        <div class="row portfolio">
          <div class="col-9">
            <div class="card-container">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Ftnss Jnks</h5>
                  <p class="card-text">
                    This tool will allow a user to plan a workout schedule as
                    well as find recipes to support their workouts
                  </p>
                  <a
                    href="https://github.com/hyanez/Ftnss-Jnks"
                    class="card-link"
                  >
                    View the Git Repository here
                  </a>
                </div>
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">GreenTrip Planner</h5>
                  <p class="card-text">
                    A free tool to plan trips with your carbon footprint in
                    mind. Outputs a map and your CO2 emissions
                  </p>
                  <a
                    href="https://github.com/Jimbo8702/Project-One.git"
                    class="card-link"
                  >
                    View the Git Repository here
                  </a>
                </div>
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Password Generator</h5>
                  <p class="card-text">
                    Using prompts, confirms and alerts a user can generate a
                    random password
                  </p>
                  <a
                    href="https://github.com/willhaberer/HW-3-PW-Gen"
                    class="card-link"
                  >
                    View the Git Repository here
                  </a>
                </div>
              </div>
            </div>
            <div class="card-container">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Weather Dashboard</h5>
                  <p class="card-text">
                    Allows users to search for a city and see both current and
                    upcoming weather
                  </p>
                  <a
                    href="https://github.com/willhaberer/HW-3-PW-Gen"
                    class="card-link"
                  >
                    View the Git Repository here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
