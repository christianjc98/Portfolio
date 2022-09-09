import {
  Container,
  SocialMedia,
  SocialMediaItem,
  SocialMediaLink,
} from "../assets/wrappers/AsideBar";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const AsideBar = () => {
  return (
    <Container>
      <SocialMedia>
        <SocialMediaItem>
          <SocialMediaLink>
            <FaLinkedin />
          </SocialMediaLink>
        </SocialMediaItem>
        <SocialMediaItem>
          <SocialMediaLink>
            <FaGithub />
          </SocialMediaLink>
        </SocialMediaItem>
        <SocialMediaItem>
          <SocialMediaLink>
            <FaInstagram />
          </SocialMediaLink>
        </SocialMediaItem>
      </SocialMedia>
    </Container>
  );
};
export default AsideBar;
