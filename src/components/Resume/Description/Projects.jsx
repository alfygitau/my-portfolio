import React from "react";

export default function Projects() {
  const headingstyles = {
    color: "orange",
    paddingTop: "20px"
  };
  const h5styles = {
    fontSize: "bold",
    color: "rgb(31,34,53)",
  };

  return (
    <div>
      <ul>
        <li>
          <h4 style={headingstyles}>Personal Portfolio Website</h4>
          <h5 style={h5styles}>
            Technologies Used: React JS, Bootsrap, @Mui, React-icons,
            React-typical, styled-components, React-bootstrap, etc.{" "}
          </h5>
          <p>
            A Personal Portfolio website to showcase all my details and projects
            at one place.
          </p>
        </li>
        <li>
          <h4 style={headingstyles}>Mobile E-shop</h4>
          <h5 style={h5styles}>
            Technologies Used: React Native, Mongo DB, Express Js, Node Js,
            Redux.
          </h5>
          <p>
            An ecommerce application designed to sell products online wth
            payment system integration.{" "}
          </p>
        </li>
        <li>
          <h4 style={headingstyles}>Ecommerce Website</h4>
          <h5 style={h5styles}>
            Technologies Used: Mongo DB, Epress Js, React Js, Node JS, Redux,
            Bootstrap.
          </h5>
          <p>
            Online ecommerce website for showcasing and selling products onlne
            with payment system integration, both Paypal and Stripe
          </p>
        </li>
      </ul>
    </div>
  );
}
