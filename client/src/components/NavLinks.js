import { Link } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ toggle }) => {
  return (
    <div className={toggle ? "nav-links expanded" : "nav-links"}>
      {links.map((item) => {
        const { id, text, icon, path } = item;
        return (
          <Link className="nav-link" key={id}>
            <span className="icon">{icon}</span>
            {text}
          </Link>
        );
      })}
    </div>
  );
};
export default NavLinks;
