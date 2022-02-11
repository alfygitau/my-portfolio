import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <span>ALFRED</span>
      <ul>
        <a href="/">
          <li>Home</li>
        </a>
        <a href="/about">
          <li>About Me</li>
        </a>
        <a href="/resume">
          <li>Resume</li>
        </a>
        <a href="/testimonials">
        <li>Testimonials</li>
        </a>
        <a href="/contactme">
        <li>Contact Me</li>
        </a>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 80px;
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    a{
      text-decoration: none;
    }
    li {
      list-style-type: none;
      color: black;
      padding: 20px;
    }
  }
  span {
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 40px;
    flex-direction: left;
    font-family: cursive;
  }
`;
