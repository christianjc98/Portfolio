import {
  Container,
  LogoContainer,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  Wrapper,
} from "../assets/wrappers/Navbar";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import links from "../utils/links";
import { IconContext } from "react-icons/lib";
import { useState } from "react";

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
                  <MenuItemLink
                    onClick={() => {
                      setShowMobileMenu(!showMobileMenu);
                    }}
                  >
                    <div>
                      {link.icon}
                      {link.text}
                    </div>
                  </MenuItemLink>
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
