import { useEffect, useState } from "react";
import {
  Background,
  Container,
  CardContainer,
  Main,
} from "../assets/wrappers/ProjectPage";
import ProjectCard from "../components/ProjectCard";
import axios from "axios";
import AsideBar from "../components/AsideBar";
import Footer from "../components/Footer";
import { useInView } from "react-intersection-observer";
import ProjectPageNavbar from "../components/ProjectPageNavbar";
import PageBtnContainer from "../components/PageBtnContainer";

const ProjectPage = () => {
  const [projects, setProjects] = useState(null);
  const [numOfPages, setNumOfPages] = useState(null);
  const [page, setPage] = useState(1);
  const getProjects = async () => {
    let url = `api/v1/projects?limit=6&page=${page}`;
    try {
      const { data } = await axios.get(url);
      setProjects(data.projects);
      setNumOfPages(data.numOfPages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProjects();
  }, [page]);

  const [ref, inView] = useInView();
  const [ref2, inViewProjects] = useInView({ triggerOnce: true });
  console.log(inViewProjects);
  console.log(inView);
  return (
    <Background>
      <ProjectPageNavbar />
      <Main>
        <AsideBar inView={inView} />
        <Container
          ref={ref2}
          className={inViewProjects ? "animate container" : "container"}
        >
          <h2>My Projects</h2>
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
          <PageBtnContainer
            numOfPages={numOfPages}
            setPage={setPage}
            page={page}
          />
        </Container>
      </Main>

      <div ref={ref}>
        <Footer />
      </div>
    </Background>
  );
};
export default ProjectPage;
