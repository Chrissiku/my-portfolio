/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Icon from "react-icons-kit";
import { arrowUp } from "react-icons-kit/fa/arrowUp";
import { arrowDown } from "react-icons-kit/fa/arrowDown";
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

  //   useEffect(() => {
  //     const url = "https://jsonplaceholder.typicode.com/todos/1";

  //     const fetchData = async () => {
  //       try {
  //         const response = await fetch(url);
  //         const json = await response.json();
  //         console.log("test", json);
  //       } catch (error) {
  //         console.log("error", error);
  //       }
  //     };

  //     fetchData();
  // }, []);

  const [visible, setVisible] = useState(6);

  const showMore = () => {
    setVisible((prev) => prev + works.length - 6);
  };

  const showLess = () => {
    setVisible((prev) => prev === 6);
  };

  function LoadMore() {
    if (works.length > 6) {
      if (visible === works.length) {
        return (
          <button type="button" className="btn" onClick={showLess}>
            Show Less
            {' '}
            <Icon icon={arrowUp} size={15} />
          </button>
        );
      }
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
                <Link to={`/work/${work.title}`} className="read-more">
                  Read more
                </Link>
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
