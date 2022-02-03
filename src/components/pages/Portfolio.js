import React from "react";
import "../../styles/style.css";
import FMSN from "../../assets/FMSN.png";
import Ftnss from "../../assets/Ftnss.png";
import WD from "../../assets/WD.png";
import PG from "../../assets/PG.png";

export default function Portfolio() {
  return (
    <>
      <div class="main-content">
        <h1>Portfolio</h1>

        <div class="row portfolio">
          <div class="col-9">
            <div class="card-container project">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Find Me Something New</h5>
                  <img
                    src={FMSN}
                    alt="FMSN-Page"
                    height="50%"
                    width="70%"
                  ></img>
                  <p class="card-text">
                    FMSN offers users an app to find new music with a low amount
                    of streams
                  </p>
                  <a
                    href="https://github.com/willhaberer/Find-Me-Something-New"
                    class="card-link"
                  >
                    View the Git Repository here
                  </a>
                </div>
              </div>
            </div>
            <div class="card-container project">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Ftnss Jnks</h5>
                  <img
                    src={Ftnss}
                    alt="Ftnss-Page"
                    height="50%"
                    width="70%"
                  ></img>
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
            <div class="card-container project">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Weather Dashboard</h5>
                  <img src={WD} alt="WD-Page" height="50%" width="70%"></img>
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
            <div class="card-container project">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Password Generator</h5>
                  <img src={PG} alt="FMSN-Page" height="50%" width="70%"></img>
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
          </div>
        </div>
      </div>
    </>
  );
}
