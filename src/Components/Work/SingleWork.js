/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import React from "react";
import { useSelector } from "react-redux/es/exports";
import { useParams, Link } from "react-router-dom";
import Icon from "react-icons-kit";
import { arrowLeft } from "react-icons-kit/fa/arrowLeft";

const SingleWork = () => {
  const params = useParams();
  const workState = useSelector((state) => state);
  const CurrentWork = workState.find((works) => works.title === params.title);
  // eslint-disable-next-line object-curly-newline, no-unused-vars
  const { title, id, picture, caption } = CurrentWork;
  return (
    <>
      <main className="single-work">
        <Link to="/" className="back">
          <Icon icon={arrowLeft} size={30} />
        </Link>
        <div className="content">
          <div className="left">
            <div className="image">
              {/* <img src={picture} alt={title} /> */}
            </div>
            <div className="social">
              <Icon icon={arrowLeft} size={30} />
              <Icon icon={arrowLeft} size={30} />
              <Icon icon={arrowLeft} size={30} />
              <Icon icon={arrowLeft} size={30} />
            </div>
          </div>
          <div>hello</div>
        </div>
      </main>
    </>
  );
};

export default SingleWork;
