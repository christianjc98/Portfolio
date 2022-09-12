import { useInView } from "react-intersection-observer";
import Main from "../assets/wrappers/Home";
import AsideBar from "../components/AsideBar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactSection from "./ContactSection";
import ExperienceSection from "./ExperienceSection";
import LandingSection from "./LandingSection";
import ProjectSection from "./ProjectSection";

const Home = () => {
  const { ref, inView } = useInView();
  return (
    <>
      <Navbar />
      <Main>
        <AsideBar inView={inView} />
        <LandingSection />
        <ExperienceSection />
        <ProjectSection />
        <ContactSection />
      </Main>
      <div ref={ref}>
        <Footer />
      </div>
    </>
  );
};
export default Home;
