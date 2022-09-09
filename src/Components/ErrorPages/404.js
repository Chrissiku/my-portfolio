/* eslint-disable linebreak-style */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
import { Link } from "react-router-dom";

const PageNotFound = () => (
  <>
    <section className="error">
      <Link to="/">Go Back Home</Link>
      <h1 className="title">404</h1>
      <h2>Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </section>
  </>
);
export default PageNotFound;
