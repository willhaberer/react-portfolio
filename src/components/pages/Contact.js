import React from "react";
import "../../styles/style.css";

export default function Contact() {
  const styles = {
    forms: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "7px",
    },
  };
  return (
    <div class="main-content">
      <h1>Contact Page</h1>
      <div style={styles.forms} class="window-body">
        <div class="field-row">
          <label for="text17">Name:</label>
          <input id="text17" type="text" />
        </div>
        <div class="field-row">
          <label for="text17">Email:&nbsp; </label>
          <input id="text17" type="text" />
        </div>
        <div class="field-row">
          <label for="text17">Message:&nbsp; &nbsp;</label>
          <input id="text17" type="text" />
        </div>
        <form>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
