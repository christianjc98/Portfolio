import {
  Background,
  ContactInfoContainer,
  Container,
  FormContainer,
} from "../assets/wrappers/ContactSection";

import contactImg from "../assets/img/contactImg.svg";
import FormRow from "../components/FormRow";

const ContactSection = () => {
  return (
    <Background>
      <div className="custom-shape-divider-top-1662677232">
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
      <Container className="container">
        <ContactInfoContainer>
          <h2>Let's Work Together</h2>
          <p>
            Get in touch with me! Use the form next to me or send an email to{" "}
            <b>christianjanssenc@gmail.com</b>
          </p>
          <img src={contactImg} alt="" />
        </ContactInfoContainer>
        <FormContainer>
          <h3>Contact</h3>
          <form action="" className="form">
            <FormRow />
          </form>
        </FormContainer>
      </Container>
    </Background>
  );
};
export default ContactSection;
