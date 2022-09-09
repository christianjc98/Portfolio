import Main from "../assets/wrappers/Home";
import AsideBar from "../components/AsideBar";
import Navbar from "../components/Navbar";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import LandingSection from "./LandingSection";
import ProjectSection from "./ProjectSection";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main>
        <AsideBar />
        <LandingSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </Main>
    </>
  );
};
export default Home;
