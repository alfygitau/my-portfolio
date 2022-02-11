import React from "react";

export default function Interests() {

const headingstyles = {
    color: "orange"
}

  return (
    <div>
      <ul>
        <li>
          <h5 style={headingstyles}>Teaching</h5>
          <p>
            Apart from being a tech enthusiast and a code writer, i also love to
            teach people what i know simply because i believe in sharing.
          </p>
        </li>
        <li>
          <h5 style={headingstyles}>Music</h5>
          <p>
            Listening to soothing music is something i can never compromise
            with, skimming through Spotify's pop songs charts is at times the
            best stress reliever that i can get my hands on.
          </p>
        </li>
        <li>
          <h5 style={headingstyles}>Competitive Gaming</h5>
          <p>
            I like to challenge my reflexes a lot while competing in football
            games, pushing the rank and having interactive gaming sessions
            excites me the most.
          </p>
        </li>
      </ul>
    </div>
  );
}
