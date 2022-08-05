import React from "react";
import Face_co from "../../Images/face_co.svg";
import Icon from "react-icons-kit";
import { gears } from "react-icons-kit/fa/gears";

const About = () => {
  return (
    <>
      <section className="about">
        <h2 className="title">About</h2>
        <div className="about-info">
          <div className="about-img">
            <img src={Face_co} alt="Chris's Avatar" />
          </div>
          <div className="about-text">
            <h3>Who Am I</h3>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! If you like what you see and have
              a project you need coded, don’t hesitate to contact me. I can help
              you build a product , feature or website Look through some of my
              work and experience! If you like what you see and have a project
              you need coded, don’t hesitate to contact me
            </p>
          </div>
        </div>
        <div className="skills">
          <h3 className="title">Skills</h3>
          <div className="sills-list">
            <div className="single-skill">
              <i>
                <Icon icon={gears} size={50} />
              </i>
              <p>
                I can help you build a product , feature or website Look through
                some of my work and experience! If you like what you see and
              </p>
            </div>
            <div className="single-skill">
              <i>
                <Icon icon={gears} size={50} />
              </i>
              <p>
                I can help you build a product , feature or website Look through
                some of my work and experience! If you like what you see and
              </p>
            </div>
            <div className="single-skill">
              <i>
                <Icon icon={gears} size={50} />
              </i>
              <p>
                I can help you build a product , feature or website Look through
                some of my work and experience! If you like what you see and.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
