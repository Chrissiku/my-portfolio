import React from "react";
const Home = () => {
  return (
    <>
      <section className="home">
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
