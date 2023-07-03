import React from "react";
import "../styles/styles.css";
import Title from "./Title";

const Skills = () => {
  const ProgressBar = ({ skillName, percentage }) => {
    return (
      <div className="skill">
        <div className="skill-name">{skillName}</div>
        <div className="skill-bar">
          <div className="skill-per" style={{ maxWidth: percentage }}>
            <span className="skill-per-text">{percentage}</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div id="skills" className="skills mx-auto my-10">
      <Title>Skills</Title>
      <ProgressBar skillName="HTML" percentage="90%" />
      <ProgressBar skillName="CSS" percentage="70%" />
      <ProgressBar skillName="Javascript" percentage="90%" />
      <ProgressBar skillName="React Js" percentage="95%" />
      <ProgressBar skillName="Node JS" percentage="70%" />
      <ProgressBar skillName="Material UI" percentage="50%" />
      <ProgressBar skillName="Express.js" percentage="80%" />
      <ProgressBar skillName="Next.js" percentage="60%" />
    </div>
  );
};

export default Skills;
