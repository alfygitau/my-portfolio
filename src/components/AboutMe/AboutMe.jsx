import React from "react";
import styled from "styled-components";

export default function AboutMe() {
  return (
    <Container>
      <div>
        <img src={require("../../assets/me.jpg")} alt="grad" />
      </div>
      <div>
          <h2>Why Choose Me</h2>
        <p>
          Full stack web and mobile developer with background knowledge of MERN
          stacks with redux, along with a knack of building applications with
          utmost efficiency. Strong professional with a BSC willing to be an
          asset for an organization.
        </p>
        <h3>Here are a few highlights</h3>
        <ul>
            <li>Full Stack web and mobile development</li>
            <li>Interactive Front End as per the design</li>
            <li>React and React Native</li>
            <li>Redux for State Mnanagement</li>
            <li>Building REST API</li>
            <li>Managing database</li>
        </ul>
        <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button>
            <a href="ehizcv.pdf" download="Ehiedu ehizcv.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  display: grid;
  grid-template-columns: 400px 400px;
  margin: 10px 200px 0px 200px;
  padding: 10px 10px 10px 10px;
  border: 1px solid black;
  box-shadow: 5px 10px 8px 10px #888888;
  border-radius: 10px;
  div {
    height: 600px;
    width: 100%;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      background-size: cover;
      background-position: center;
    }
  }
  h2, h3{
    margin-top: 20px;
    margin-left: 20px;
    text-align: space-between;
  }
  p{
      margin-top: 20px;
      margin-left: 20px;
      text-align: space-between;
  }
  button{
      margin-left: 30px;
  }
`;
