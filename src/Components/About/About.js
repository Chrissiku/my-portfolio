import React from 'react';
import Avatar from '../../Images/avatar.jpg';
import skill from './aboutData';

const About = () => (
  <>
    <section className="about" id="about">
      <h2 className="title">About Me</h2>
      <div className="about-info">
        <div className="about-img">
          <img src={Avatar} alt="Chris's Avatar" />
        </div>
        <div className="about-text">
          <h3>Who Am I</h3>
          <p>
            Full-stack software developer and holder of a degree, Bachelor&apos;s degree,  in computer science, I am a bilingual and transversal profile with +3 years of experience in the development of web applications and embedded electronics. Sociable and determined, I pursue innovation across the world and its cultures. Organize, renew and learn are my watchwords. Something I can't do? I learn it!
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

export default About;
