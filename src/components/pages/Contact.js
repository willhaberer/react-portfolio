import React from "react";
import "../../styles/style.css";

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div class="contact-content">
      <div className="jumbotron jumbotron-fluid">
        <div className="contactContainer">
          <br></br>
          <h2>
            Best Way to Reach Me? Send Me an Email:{" "}
            <a href="mailto:vawhab@gmail.com">Here</a>
          </h2>
          <br></br>
          <h3>Otherwise please enter your information here</h3>
          <form className="contact-form">
            <div className="contact-input">
              <label className="label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div className="contact-input">
              <label className="label">Name</label>
              <input type="text" className="form-control" id="name"></input>
            </div>
            <div className="form-group white">
              <label className="label">Leave me a brief message!</label>
              <textarea
                className="form-control"
                id="message"
                rows="3"
                // ref={messageRef}
              ></textarea>
            </div>
            <br></br>
            <button
              type="submit"
              id="submitBtn"
              className="btn btn-primary button label"
              onSubmit={() => handleSubmit()}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
