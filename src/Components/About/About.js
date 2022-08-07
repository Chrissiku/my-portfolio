import React from "react";
import Face_co from "../../Images/face_co.svg";
import skill from "./aboutData";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <h2 className="title">About Me</h2>
        <div className="about-info">
          <div className="about-img">
            <img src={Face_co} alt="Chris's Avatar" />
          </div>
          <div className="about-text">
            <h3>Who Am I</h3>
            <p>
              I'm a transversal software developer with 2 years of experience in
              the management of web development and embedded electronics
              projects. Specialized in building responsive web-based
              applications Sociable and determined, I pursue innovation across
              the world and its cultures. Organize, renew and learn are my
              watchwords. Something I can't do? I will learn it...
            </p>
          </div>
        </div>
        <div className="skills">
          <h3 className="title">Skills</h3>
          <div className="sills-list">
            {skill.map((skill) => (
              <div key={skill.id} className="single-skill">
                {skill.icon}
                <p>{skill.skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
