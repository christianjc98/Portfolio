import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--primary-900);
  position: relative;
  .custom-shape-divider-top-1662677232 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }

  .custom-shape-divider-top-1662677232 svg {
    position: relative;
    display: block;
    width: calc(101% + 1.3px);
    height: 70px;
    transform: rotateY(180deg);
  }

  .custom-shape-divider-top-1662677232 .shape-fill {
    fill: var(--backgroundColor);
  }
  @media screen and (max-width: 960px) {
    background-size: cover;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  min-height: calc(100vh - var(--nav-height));
  padding-top: 2rem;
  padding-bottom: 2rem;

  .mobile-icons {
    display: none;
  }

  .animate {
    animation: slide-in-anim 1.75s ease-out forwards;
    transform: translateX(-100%);
    opacity: 0;
  }
  @keyframes slide-in-anim {
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  .animate-right {
    animation: slide-in-anim-right 1.75s ease-out forwards;
    transform: translateX(100%);
    opacity: 0;
  }

  @keyframes slide-in-anim-right {
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    .mobile-icons {
      display: grid;
    }
  }
`;

export const ContactInfoContainer = styled.div`
  margin-top: 4rem;
  h2 {
    font-size: 3rem;
    font-weight: 900;
    background: linear-gradient(to right, #a4b9cb 0%, #eee 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  p {
    font-size: 1.15rem;
  }
  img {
    width: 80%;
    margin: 0 auto;
    display: block;
  }

  @media screen and (max-width: 820px) {
    img {
      display: none;
    }
  }
`;

export const FormContainer = styled.div`
  margin-top: 2.5rem;
  h3 {
    font-size: 3rem;
    text-align: center;
    font-weight: 900;
    background: linear-gradient(to right, #a4b9cb 0%, #eee 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 0;
  }
  form {
    margin-top: 0rem;
    background-color: transparent;
    box-shadow: none;
    :hover {
      box-shadow: none;
    }
  }
  button {
    display: flex;
    padding: 1.25em 3em;
    font-size: 1rem;
    align-items: center;
    margin: 0 auto;
    border: 1px solid var(--grey-200);
    background: linear-gradient(
      to right,
      var(--grey-200) 50%,
      var(--primary-900) 50%
    );
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.5s ease-out;
    color: var(--grey-200);
    cursor: pointer;
    :hover {
      background-position: left bottom;
      color: var(--primary-900);
    }
    svg {
      margin-left: 1rem;
    }
  }
  .form-input,
  .form-textarea {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid var(--grey-200);
    border-radius: 0;
    color: var(--textColor);
    resize: none;
    :focus {
      outline: none;
      ::placeholder {
        color: transparent;
      }
    }
  }

  .form-textarea {
    height: 5rem;
  }

  .input-error {
    font-weight: "bold";
    color: #dc3545;
    font-size: var(--extra-small-text);
  }

  @media screen and (max-width: 820px) {
    margin-top: 0.1rem;
    h3 {
      display: none;
    }
  }
`;
