import links from "../utils/links";

const NavLinks = ({ toggle }) => {
  return (
    <div className={toggle ? "nav-links expanded" : "nav-links"}>
      {links.map((item) => {
        const { id, text, icon, path } = item;
        return (
          <a href={path} className="nav-link" key={id}>
            <span className="icon">{icon}</span>
            {text}
          </a>
        );
      })}
    </div>
  );
};
export default NavLinks;
