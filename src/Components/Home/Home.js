// import React from "react";
import ParticlesBg from "particles-bg";
import icon from "./Icon";
const Home = () => {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-50, 50],
    alpha: [0.6, 0],
    scale: [0.1, 0.9],
    body: icon,
    position: "all",
    cross: "dead",
    random: 10,
  };
  return (
    <>
      <section className="home">
        <ParticlesBg type="custom" config={config} bg={true} />
        <ParticlesBg num={50} type="cobweb" bg={true} color="#0ab4e7" />
        <div className="dev-info">
          <h1>Hi, I'm Chris Siku</h1>
          <h2>A Software Developer</h2>
        </div>
        <p>
          I can help you build a product , feature or website Look through some
          of my work and experience! If you like what you see and have a project
          you need coded, don’t hesitate to contact me.
        </p>
        <div className="buttons">
          <button type="button" className="btn">
            Contact
          </button>
          <button type="button" className="btn">
            Download Cv
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;
