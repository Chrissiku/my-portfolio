import React from "react";
import work_img from "../../Images/face_co.svg";

const Work = () => {
  return (
    <>
      <section className="work">
        <h2 className="title">Works</h2>
        <div className="works-list">
          <div className="single-work">
            <div className="work-img">
              <img src={work_img} alt="work title" />
            </div>
            <h2 className="work-title">This is a project</h2>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! .
            </p>
            <button type="button" className="btn">
              Read more
            </button>
          </div>

          <div className="single-work">
            <div className="work-img">
              <img src={work_img} alt="work title" />
            </div>
            <h2 className="work-title">This is a project</h2>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! .
            </p>
            <button type="button" className="btn">
              Read more
            </button>
          </div>

          <div className="single-work">
            <div className="work-img">
              <img src={work_img} alt="work title" />
            </div>
            <h2 className="work-title">This is a project</h2>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! .
            </p>
            <button type="button" className="btn">
              Read more
            </button>
          </div>

          <div className="single-work">
            <div className="work-img">
              <img src={work_img} alt="work title" />
            </div>
            <h2 className="work-title">This is a project</h2>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! .
            </p>
            <button type="button" className="btn">
              Read more
            </button>
          </div>

          <div className="single-work">
            <div className="work-img">
              <img src={work_img} alt="work title" />
            </div>
            <h2 className="work-title">This is a project</h2>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! .
            </p>
            <button type="button" className="btn">
              Read more
            </button>
          </div>

          <div className="single-work">
            <div className="work-img">
              <img src={work_img} alt="work title" />
            </div>
            <h2 className="work-title">This is a project</h2>
            <p>
              I can help you build a product , feature or website Look through
              some of my work and experience! .
            </p>
            <button type="button" className="btn">
              Read more
            </button>
          </div>
        </div>
        <button type="button" className="btn">
          View more
        </button>
      </section>
    </>
  );
};

export default Work;
