import React, { useState } from "react";
import { works } from "./WorkData";
import Icon from "react-icons-kit";
import { arrowUp } from "react-icons-kit/fa/arrowUp";
import { arrowDown } from "react-icons-kit/fa/arrowDown";

const Work = () => {
  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible((prev) => prev + works.length - 6);
  };

  const showLess = () => {
    setVisible((prev) => (prev = 6));
  };

  const LoadMore = () => {
    if (works.length > 6) {
      if (visible === works.length) {
        return (
          <button type="button" className="btn" onClick={showLess}>
            Show Less <Icon icon={arrowUp} size={15} />
          </button>
        );
      } else {
        return (
          <button type="button" className="btn" onClick={showMore}>
            Show More <Icon icon={arrowDown} size={15} />
          </button>
        );
      }
    }
  };

  return (
    <>
      <section className="work" id="work">
        <h2 className="title">Works</h2>
        <div className="works-list">
          {works.slice(0, visible).map((work) => (
            <div className="single-work" key={work.id}>
              <div className="work-img">
                <img src={work.image} alt={work.title} />
              </div>
              <h2 className="work-title">{work.title}</h2>
              <p>
                {work.text.substring(0, 90)}
                {" . . . "}
                <a className="read-more" href="true">
                  Read more
                </a>
              </p>
            </div>
          ))}
        </div>
        {LoadMore()}
      </section>
    </>
  );
};

export default Work;
