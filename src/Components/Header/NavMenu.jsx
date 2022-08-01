import linksArray from "./headerData";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          {linksArray.map((menu) => (
            <Link to={menu.path}>
              <li>
                <a href={menu.path}>{menu.item}</a>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};
export default Navigation;
