import React from "react";

function Skills() {
  const skills = [
    "ReactJS",
    "NextJS",
    "GraphQL",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
  ];
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
