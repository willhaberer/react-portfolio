import React from "react";
import "../../styles/style.css";

export default function Portfolio() {
  return (
    <>
      <div class="main-content">
        <h1>Portfolio Page</h1>
        <p>
          Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula.
          Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu
          dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci,
          finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta
          dictum nunc, sed pretium risus rutrum eget. Nam consequat, ligula in
          faucibus vestibulum, nisi justo laoreet risus, luctus luctus mi lacus
          sit amet libero. Class aptent taciti sociosqu ad litora torquent per
          conubia nostra, per inceptos himenaeos. Mauris pretium condimentum
          tellus eget lobortis. Interdum et malesuada fames ac ante ipsum primis
          in faucibus. Donec placerat accumsan mi, ut congue neque placerat eu.
          Donec nec ipsum in velit pellentesque vehicula sit amet at augue.
          Maecenas aliquam bibendum congue. Pellentesque semper, lectus non
          ullamcorper iaculis, est ligula suscipit velit, sed bibendum turpis
          dui in sapien.
        </p>
      </div>
      <div class="row portfolio">
        <h3 class="col-3 sec-header">Portfolio</h3>
        <a id="portfolio-header"></a>
        <div class="col-9">
          <div class="card-container">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Ftnss Jnks</h5>
                <p class="card-text">
                  This tool will allow a user to plan a workout schedule as well
                  as find recipes to support their workouts
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
                  A free tool to plan trips with your carbon footprint in mind.
                  Outputs a map and your CO2 emissions
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
    </>
  );
}
