import React from "react";
import "../../styles/style.css";

export default function Contact() {
  return (
    <div class="main-content">
      <h1>Contact Page</h1>
      <ul class="contact-list">
        <li id="contact-item">
          Github:{" "}
          <a href="https://github.com/willhaberer">Github.com/willhaberer</a>
        </li>
        <li id="contact-item">Phone: 888-888-8888</li>
        <li id="contact-item">
          Email:{" "}
          <a href="mailto:willhaberer@gmail.com">willhaberer@gmail.com</a>
        </li>
      </ul>
    </div>
  );
}
