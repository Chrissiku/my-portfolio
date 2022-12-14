// import React from "react";
import ParticlesBg from 'particles-bg';
import { Link } from 'react-scroll';
import icon from './Icon';
import Resume from '../../Resume/Christian_Siku_Resume.pdf';

const Home = () => {
  const config = {
    num: [1, 1],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.2],
    body: icon,
    position: 'all',
    cross: 'dead',
    random: 2,
  };
  return (
    <>
      <section className="home" id="home">
        <ParticlesBg type="custom" config={config} bg />
        <ParticlesBg num={50} type="cobweb" bg color="#0ab4e7" />
        <div className="dev-info">
          <h1>Hi, I&apos;m Chris Siku</h1>
          <h2>A Software Developer</h2>
        </div>
        <p>
          Your products deserve state-of-the-art technology. I can help you
          create a product, a feature, a web application that meets your
          expectations. take your time and browse some of my work and
          experience! If you like what you see and have a project, a request you
          need, or simply want to collaborate with me, do not hesitate to
          contact me.
        </p>
        <div className="buttons">
          <Link
            to="contact"
            spy
            smooth
            offset={-50}
            duration={1000}
            delay={100}
          >
            <button type="button" className="btn contact-btn">
              Contact Me
            </button>
          </Link>
          <a href={Resume} rel="noreferrer" className="btn cv" target="_blank">
            My Resume
          </a>
        </div>
      </section>
    </>
  );
};

export default Home;
