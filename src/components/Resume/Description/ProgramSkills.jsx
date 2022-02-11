import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function ProgramSkills() {

const progressbarstyles = {
    width: "40%"
}
    
  return (
    <>
      <div className="grid-container">
        <div className="skills-list">
            <h2 style={{
                paddingBottom: "20px",
                textAlign: "center"
            }}>My Programming Skills</h2>
          <ul style={{listStyleType: "none"}}>
            <li style={{
                paddingBottom: "20px"
            }}>
              <h4>Javascript</h4>
              <div>
                <ProgressBar variant="info" now={40} style={progressbarstyles} />
              </div>
            </li>
            <li style={{
                paddingBottom: "20px"
            }}>
              <h4>React JS</h4>
              <div>
                <ProgressBar variant="info" now={70} style={progressbarstyles} />
              </div>
            </li>
            <li style={{
                paddingBottom: "20px"
            }}>
              <h4>Next JS</h4>
              <div>
                <ProgressBar variant="info" now={70} style={progressbarstyles} />
              </div>
            </li>
            <li style={{
                paddingBottom: "20px"
            }}>
              <h4>HTML</h4>
              <div>
                <ProgressBar variant="info" now={90} style={progressbarstyles} />
              </div>
            </li>
            <li style={{
                paddingBottom: "20px"
            }}>
              <h4>React Native</h4>
              <div>
                <ProgressBar variant="info" now={70} style={progressbarstyles} />
              </div>
            </li>
            <li style={{
                paddingBottom: "20px"
            }}>
              <h4>CSS, SCSS, SASS</h4>
              <div>
                <ProgressBar variant="info" now={80} style={progressbarstyles} />
              </div>
            </li>
            <li style={{
                paddingBottom: "20px"
            }}>
              <h4>Express JS</h4>
              <div>
                <ProgressBar variant="info" now={60} style={progressbarstyles} />
              </div>
            </li>
            <li style={{
                paddingBottom: "20px"
            }}>
              <h4>Mongo DB</h4>
              <div>
                <ProgressBar variant="info" now={80} style={progressbarstyles} />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
