import {
  Container,
  LogoContainer,
  Wrapper,
} from "../assets/wrappers/ProjectPageNavbar";
import Logo from "./Logo";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const ProjectPageNavbar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <AiOutlineHome />
        </Link>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <div></div>
      </Wrapper>
    </Container>
  );
};
export default ProjectPageNavbar;
