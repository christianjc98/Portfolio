import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MobileIcon,
  Wrapper,
} from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import links from "../utils/links";
import { IconContext } from "react-icons/lib";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2rem" } }}>
          <LogoContainer>
            <Logo />
          </LogoContainer>
          <MobileIcon
            onClick={() => {
              setShowMobileMenu(!showMobileMenu);
            }}
          >
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={showMobileMenu}>
            {links.map((link, index) => {
              return (
                <MenuItem key={index}>
                  <Link class="menu-item-link" to={`/${link.path}`}>
                    <div>
                      {link.icon}
                      {link.text}
                    </div>
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};
export default Navbar;
