import React from "react";
import { FaProjectDiagram, FaLaptopCode, FaUniversity } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

import "./Resume.css";
import Education from "./Description/Education";
import JobHistory from "./Description/JobHistory";
import ProgramSkills from "./Description/ProgramSkills";
import Projects from "./Description/Projects";
import Interests from "./Description/Interests";

export default function Resume() {
  const [education, setEducation] = React.useState(false);
  const [workHistory, setWorkHistory] = React.useState(false);
  const [programSkills, setProgramSkills] = React.useState(false);
  const [projects, setProjects] = React.useState(false);
  const [interests, setInterests] = React.useState(false);

  const handleEducation = () => {
    setEducation(true);
    setWorkHistory(false);
    setProgramSkills(false);
    setProjects(false);
    setInterests(false);
  };
  const handleWorkHistory = () => {
    setEducation(false);
    setWorkHistory(true);
    setProgramSkills(false);
    setProjects(false);
    setInterests(false);
  };
  const handleProgramSkills = () => {
    setEducation(false);
    setWorkHistory(false);
    setProgramSkills(true);
    setProjects(false);
    setInterests(false);
  };
  const handleProjects = () => {
    setEducation(false);
    setWorkHistory(false);
    setProgramSkills(false);
    setProjects(true);
    setInterests(false);
  };
  const handleInterests = () => {
    setEducation(false);
    setWorkHistory(false);
    setProgramSkills(false);
    setProjects(false);
    setInterests(true);
  };

  React.useEffect(() => {
    setEducation(true);
  }, []);

  return (
    <>
      <div className="wrapper">
        <div className="navigation">
          <ul>
            <li className="list active">
              <div onClick={handleEducation}>
                <span className="icon">
                  <FaUniversity />
                </span>
                <span className="title">Education</span>
              </div>
            </li>
            <li className="list">
              <div onClick={handleWorkHistory}>
                <span className="icon">
                  <MdWorkOutline />
                </span>
                <span className="title">Work History</span>
              </div>
            </li>
            <li className="list">
              <div onClick={handleProgramSkills}>
                <span className="icon">
                  <FaLaptopCode />
                </span>
                <span className="title">Programming Skills</span>
              </div>
            </li>
            <li className="list">
              <div onClick={handleProjects}>
                <span className="icon">
                  <FaProjectDiagram />
                </span>
                <span className="title">Projects</span>
              </div>
            </li>
            <li className="list">
              <div onClick={handleInterests}>
                <span className="icon">
                  <AiOutlineLike />
                </span>
                <span className="title">Interests</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="explainer">
          {education && (
            <div>
              <Education />
            </div>
          )}
          {workHistory && (
            <div>
              <JobHistory />
            </div>
          )}
          {programSkills && (
            <div>
              <ProgramSkills />
            </div>
          )}
          {projects && (
            <div>
              <Projects />
            </div>
          )}
          {interests && (
            <div>
              <Interests />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
