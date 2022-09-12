import { useInView } from "react-intersection-observer";
import {
  Background,
  Container,
  IconContainer,
  InformationContainer,
  SkillsContainer,
} from "../assets/wrappers/ExperienceSection";
import SkillIcons from "../components/SkillIcons";

const ExperienceSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  return (
    <Background>
      <div className="custom-shape-divider-top-1662073813">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Container ref={ref} className="container" id="experience-section">
        <InformationContainer className={inView ? "animate" : ""}>
          <h2>Me, And my Code Journey</h2>
          <p>
            Hi! I'm Christian Janssen, mexican full-stack developer passionate
            about solving problems using logic, mathematical reasoning and new
            technologies. I have a deegre on Industrial Engineering by the
            Universidad Marista. I discovered the coding world in 2020 and since
            then i've been learning and working to became a successfull
            porfessional in the tech industry.
          </p>
          <p>
            I'm currently working at Innova Solutions as a full-stack developer
            helping building awesome applications for multiple clients to solve
            their problems.
          </p>
          <IconContainer className="desktop-icons">
            <SkillIcons />
          </IconContainer>
        </InformationContainer>
        <SkillsContainer className={inView ? "animate-right" : ""}>
          <h2>Skills</h2>
          <h3>Front-End</h3>
          <p>
            I have experience building beeautiful client-side applications with
            different technologies such as <b>ReactJS </b>&#40;ReactRouter,
            Redux, Context, styledComponents&#41;, <b>Thymeleaf</b>,{" "}
            <b>CSS frameworks</b>, <b>Wordpress</b>, etc.
          </p>
          <h3>Back-End</h3>
          <p>
            Knowldage and work experience on creating the business logic for
            your website and the building of REST apis using <b>NodeJS</b>
            &#40;Express&#41;, <b>MongoDB</b>, <b>MySQL</b>, <b>SpringBoot</b>,
            etc.
          </p>
          <h3>Additionals</h3>
          <p>
            I have some other important skills such as{" "}
            <b>GIT version control</b> &#40;Gitlab &#38; GitHub&#41;,{" "}
            <b>Team-work</b>, <b>Advanced english</b>, <b>Self-Learning</b>,
            etc.
          </p>
        </SkillsContainer>
        <IconContainer className="mobile-icons">
          <SkillIcons />
        </IconContainer>
      </Container>
      <div className="custom-shape-divider-bottom-1662232040">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </Background>
  );
};
export default ExperienceSection;
