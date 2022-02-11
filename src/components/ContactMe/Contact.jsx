import React from "react";
import "./Contact.css";
import { BiMailSend } from "react-icons/bi";
import emailjs from "emailjs-com";

export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4pz7qg7",
        "template_i84cv9n",
        e.target,
        "user_ev7OBnk8cShHPVeDxtGjD"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }

  const iconscolor = {
    color: "blue",
  };

  const buttonstyles = {
    borderRadius: "10px",
    marginLeft: "20px",
    marginTop: "20px",
  };

  const formstyles = {
    width: "400px",
    marginLeft: "20px",
  };

  const labelstyles = {
    marginLeft: "20px",
  };

  return (
    <div className="gridn">
      <h4 style={{ textAlign: "center" }}>
        Get in Touch <BiMailSend />
      </h4>
      <div className="colz">
        <div className="colz-icon">
          <a href="https://www.facebook.com/alfred.kariuki2">
            <i
              className="fa fa-facebook-square"
              style={{ color: "blue", marginLeft: "100px" }}
            ></i>
          </a>
          <a href="https://myaccount.google.com/profile/name">
            <i className="fa fa-google-plus-square" style={iconscolor}></i>
          </a>
          <a href="https://www.instagram.com/alfygitau/">
            <i className="fa fa-instagram" style={iconscolor}></i>
          </a>
          <a href="https://www.youtube.com/channel/UCAwCQzwpQZcJ4SxWIJ-fAMA">
            <i className="fa fa-youtube-square" style={iconscolor}></i>
          </a>
          <a href="https://twitter.com/Alfygitau">
            <i className="fa fa-twitter" style={iconscolor}></i>
          </a>
        </div>
      </div>
      <div className="contact-grid">
        <div className="wrapperk1">
          <img src={require("../../assets/email.jpg")} alt="mail" />
        </div>
        <div className="wrapperk">
          <h3 style={labelstyles}>Send your email here</h3>
          <form className="form-group" onSubmit={sendEmail}>
            <label for="exampleInputEmail1" style={labelstyles}>
              Name
            </label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="name"
              style={formstyles}
            />
            <label for="exampleInputEmail1" style={labelstyles}>
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="user_email"
              placeholder="email"
              style={formstyles}
            />
            <label for="exampleInputEmail1" style={labelstyles}>
              Message
            </label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              placeholder="message"
              style={formstyles}
            />
            <input
              type="submit"
              value="Send"
              className="form-control btn btn-primary"
              style={buttonstyles}
            />
          </form>
        </div>
      </div>
    </div>
  );
}
