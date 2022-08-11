/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import { useSelector } from "react-redux/es/exports";
import { useParams, Link } from "react-router-dom";

const SingleWork = () => {
  const params = useParams();
  const workState = useSelector((state) => state);
  const CurrentWork = workState.find((works) => works.id === params.id);
  const {
    id, title, picture, caption,
  } = CurrentWork;
  return (
    <>
      <Link to="/">Go Back Home</Link>

      <div key={id}>
        <img src={picture} alt={title} />
        <h2>{title}</h2>
        <p>{caption}</p>
      </div>
    </>
  );
};

export default SingleWork;
