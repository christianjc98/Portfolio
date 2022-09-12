import {
  Container,
  SocialMediaContainer,
  SocialMedia,
  SocialMediaItem,
  SocialMediaLink,
  PageInfoContainer,
} from "../assets/wrappers/Footer";

import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <Container>
      <SocialMediaContainer>
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
      </SocialMediaContainer>
      <PageInfoContainer>
        <p>
          Designed and builded by <b>Christian Janssen</b> <br />
          <sub>&copy; {date}</sub>
        </p>
      </PageInfoContainer>
    </Container>
  );
};
export default Footer;
