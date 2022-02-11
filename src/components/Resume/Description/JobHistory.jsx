import React from "react";
import Chip from "@mui/material/Chip";

export default function JobHistory() {
  const substyles = {
    paddingBottom: "10px",
    paddingTop: "20px",
    textAlign: "left",
    paddingLeft: "20px",
    color: "orange"
  };

  const listyles = {
    paddingBottom: "10px",
  };
  const chipstyle = {
    float: "right",
    color: "blue"
  };

  return (
    <div>
      <h4 style={substyles}>
        Institution: Ehizeex Technoloy{" "}
        <Chip label="2021 - Present" variant="outlined" style={chipstyle} />
      </h4>
      <h5 style={substyles}>Job Title: FULL STACK DEVELOPER INTERN</h5>
      <h5 style={substyles}>Responsibilities: </h5>
      <ul>
        <li>
          <p>
            <li style={listyles}>
              Working as a MERN stack web and mobile developer and also
              an online instructor on udemy.{" "}
            </li>
            <li style={listyles}>
              Developed an ecommerce website for client with the dashboard for
              managing the products, managing reviews, users, payment etc. .{" "}
            </li>
            <li style={listyles}>
              Integrated the web app with backend services to create new user
              onboarding application with dynamic form content.{" "}
            </li>
            <li style={listyles}>
              I stretch my mental capacity to develope UI as per the given
              designs.{" "}
            </li>
          </p>
        </li>
      </ul>
    </div>
  );
}
