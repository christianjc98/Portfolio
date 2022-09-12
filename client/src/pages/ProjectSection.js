import {
  Background,
  CardContainer,
  Container,
  MoreProjectsDiv,
} from "../assets/wrappers/ProjectSection";
import axios from "axios";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ProjectSection = () => {
  const [projects, setProjects] = useState(null);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const getProjects = async () => {
      let url = "api/v1/projects?limit=3";
      try {
        const { data } = await axios.get(url);
        setProjects(data.projects);
      } catch (error) {
        console.log(error);
      }
    };
    getProjects();
  }, []);

  return (
    <Background>
      <Container
        ref={ref}
        className={inView ? "animate container" : "container"}
        id="project-section"
      >
        <h2>My work</h2>
        <CardContainer>
          {projects &&
            projects.map((project, index) => {
              return (
                <ProjectCard
                  key={index}
                  webLink={project.websiteUrl}
                  title={project.title}
                  description={project.description}
                  imgLink={project.imageUrl}
                  codeLink={project.codeUrl}
                />
              );
            })}
        </CardContainer>
        {projects && (
          <MoreProjectsDiv>
            <p>
              <Link to="/projects">
                More Projects <FaArrowRight />
              </Link>
            </p>
          </MoreProjectsDiv>
        )}
      </Container>
    </Background>
  );
};
export default ProjectSection;
