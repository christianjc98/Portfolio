import {
  Background,
  ContactInfoContainer,
  Container,
  FormContainer,
} from "../assets/wrappers/ContactSection";

import contactImg from "../assets/img/contactImg.svg";
import FormRow from "../components/FormRow";
import FormTextarea from "../components/FormTextarea";
import { useInView } from "react-intersection-observer";
import { BsArrowRight } from "react-icons/bs";
import { useForm } from "../utils/customHooks/useForm";

const ContactSection = () => {
  const initialForm = { name: "", email: "", message: "" };
  const { ref, inView } = useInView({ triggerOnce: true });

  const validationsForm = (form) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    let regexComments = /^.{1,255}$/;

    if (!form.name.trim()) {
      errors.name = "Field 'Name' is required";
    } else if (!regexName.test(form.name.trim())) {
      errors.name = "Field 'Name' only accpets letters";
    }
    if (!form.email.trim()) {
      errors.email = "Field 'Email' is required";
    } else if (!regexEmail.test(form.email.trim())) {
      errors.email = "Email must have a correct format";
    }
    if (!form.message.trim()) {
      errors.message = "Field 'Message' is required";
    } else if (!regexComments.test(form.message.trim())) {
      errors.message = "Field 'message' must have less than 250 characters";
    }
    return errors;
  };

  const { form, errors, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );
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
      <Container ref={ref} className="container" id="contact-section">
        <ContactInfoContainer className={inView ? "animate" : ""}>
          <h2>Let's Work Together</h2>
          <p>
            Get in touch with me! Use the form next to me or send an email to{" "}
            <b>christianjanssenc@gmail.com</b>
          </p>
          <img src={contactImg} alt="" />
        </ContactInfoContainer>
        <FormContainer className={inView ? "animate-right" : ""}>
          <h3>Contact</h3>
          <form onSubmit={handleSubmit} className="form">
            <FormRow
              name="name"
              type="text"
              value={form.name}
              handleChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && <p className="input-error">{errors.name}</p>}
            <FormRow
              name="email"
              type="email"
              value={form.email}
              handleChange={handleChange}
              placeholder="Enter your email address"
            />
            {errors.email && <p className="input-error">{errors.email}</p>}
            <FormTextarea
              name="message"
              value={form.message}
              handleChange={handleChange}
              placeholder="Tell me a little more about your needs"
            />
            {errors.message && <p className="input-error">{errors.message}</p>}
            <button type="submit" onSubmit={handleSubmit}>
              Send! <BsArrowRight />
            </button>
          </form>
        </FormContainer>
      </Container>
    </Background>
  );
};
export default ContactSection;
