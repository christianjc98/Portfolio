import { BtnContainer, Container } from "../assets/wrappers/ProjectCard";

const ProjectCard = ({ webLink, imgLink, title, description, codeLink }) => {
  return (
    <Container>
      <a target="_blank" href={webLink}>
        <img src={imgLink} alt={title} />
      </a>
      <h4>{title}</h4>
      <p>{description}</p>
      <BtnContainer>
        <a href={codeLink} target="_blank" className="btn">
          Check code!
        </a>
        <a href={webLink} target="_blank" className="btn btn-hipster">
          View Demo!
        </a>
      </BtnContainer>
    </Container>
  );
};
export default ProjectCard;
