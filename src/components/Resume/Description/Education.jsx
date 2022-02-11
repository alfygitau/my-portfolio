import React from "react";
import Chip from "@mui/material/Chip";

export default function Education() {
  const h3style = {
    marginTop: "20px",
    marginLeft: "20px",
    textAlign: "left",
    color: "orange"
  };

  const chipstyle = {
    float: "right",
    color: "blue"
  };

  const liststyle = {
    paddingBottom: "20px",
    paddingLeft: "20px",
  };

  return (
    <div>
      <h3 style={h3style}>My Formal Bio details </h3>
      <h4 style={h3style}>Educational Background</h4>
      <ul>
        <li style={liststyle}>
          <h4>
            University of Kabianga, Kenya{" "}
            <span>
              {" "}
              <Chip label="2012-2016" variant="outlined" style={chipstyle} />
            </span>
          </h4>
          <p>BACHELOR OF SCIENCE MICROBIOLOGY</p>
        </li>
        <li style={liststyle}>
          <h4>
            National Youth Service Corps{" "}
            <span>
              {" "}
              <Chip label="2019-2020" variant="outlined" style={chipstyle} />
            </span>
          </h4>
          <p>Ministry Of Health And Science, Medical Laboratory Science</p>
        </li>
        <li style={liststyle}>
          <h4>
            High School{" "}
            <span>
              {" "}
              <Chip label="2006-2010" variant="outlined" style={chipstyle} />
            </span>
          </h4>
          <p>Kieni Secondary School Mbiri</p>
        </li>
      </ul>
    </div>
  );
}
