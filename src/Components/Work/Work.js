/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Icon from "react-icons-kit";
import { arrowDown } from "react-icons-kit/fa/arrowDown";
import { github } from "react-icons-kit/fa/github";
import { eye } from "react-icons-kit/fa/eye";
import LoadAllWOrks from "../../Redux/FetchData";
import works from "./WorkData";

const Work = () => {
  const dispatch = useDispatch();
  const worksState = useSelector((state) => state);
  useEffect(() => {
    if (worksState.length === 0) {
      dispatch(LoadAllWOrks());
    }
  }, []);

  const [visible, setVisible] = useState(3);

  const showMore = () => {
    setVisible((prev) => prev + works.length - 3);
  };

  function LoadMore() {
    if (works.length > visible) {
      return (
        <button type="button" className="btn" onClick={showMore}>
          Show More
          {' '}
          <Icon icon={arrowDown} size={15} />
        </button>
      );
    }
  }

  return (
    <>
      <section className="work" id="work">
        <h2 className="title">Works</h2>
        <div className="works-list">
          {worksState.slice(0, visible).map((work) => (
            <div className="single-work" key={work.id}>
              <div className="work-img">
                <img src={work.picture} alt={work.title} />
              </div>
              <h2 className="work-title">{work.title}</h2>
              <p>
                {work.caption.substring(0, 90)}
                {" . . . "}
                <br />
              </p>
              <div className="project-btn">
                {work.project[0] && (
                  <a
                    href={work.project[1]}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon icon={github} size={20} />
                    Project
                  </a>
                )}
                {work.live[0] && (
                  <a
                    href={work.live[1]}
                    className="link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon icon={eye} size={20} />
                    Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {LoadMore()}
      </section>
    </>
  );
};

export default Work;
