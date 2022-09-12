import {
  Background,
  Container,
  Landing,
  LandingText,
  ProfilePicture,
} from "../assets/wrappers/LandingSection";
import { useInView } from "react-intersection-observer";
import cv from "../assets/documents/cv.pdf";
import profilePic from "../assets/img/Perfil Christian.png";
const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <Background>
      <div className="svg-container">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#1C2126"
            d="M47.3,-61.3C61.4,-54.8,73.2,-41.2,73.2,-27.1C73.2,-13,61.5,1.6,55.6,17.4C49.6,33.3,49.3,50.4,41,61.5C32.7,72.5,16.4,77.5,0,77.5C-16.3,77.4,-32.5,72.3,-46.3,63C-60,53.7,-71.2,40.2,-74.5,25.4C-77.7,10.5,-73,-5.8,-66.3,-20C-59.6,-34.2,-50.9,-46.2,-39.5,-53.6C-28.2,-60.9,-14.1,-63.7,1.2,-65.4C16.6,-67.1,33.1,-67.8,47.3,-61.3Z"
            transform="translate(200 75)"
          />
        </svg>
      </div>
      <Container className="container">
        <Landing ref={ref} className={inView ? "animate" : "initial"}>
          <LandingText>
            <h1>Christian Janssen</h1>
            <h2>Full-Stack Developer</h2>
            <ProfilePicture className={inView ? "animate" : "initial"}>
              <img
                className="profile-picture phone"
                src={profilePic}
                alt="Profile"
              />
            </ProfilePicture>
            <p>
              I'm a full-stack web developer specialized on building exciting
              digital experiences, and using technologies to solve daily
              problems.
            </p>
            <a className="btn" href={cv} download="CV.pdf">
              Download CV
            </a>
          </LandingText>
        </Landing>
        <ProfilePicture className={inView ? "animate " : "initial "}>
          <img
            className="profile-picture desktop"
            src={profilePic}
            alt="Profile"
          />
        </ProfilePicture>
      </Container>
    </Background>
  );
};
export default AboutSection;
