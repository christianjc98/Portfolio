import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--backgroundColor);
  .svg-container {
    position: absolute;
    width: 40%;
    opacity: 0.25;
    right: 0;
    bottom: 10%;
  }

  @media screen and (max-width: 960px) {
    background-size: cover;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  min-height: calc(100vh - var(--nav-height));
  padding-top: 2rem;
  padding-bottom: 2.5rem;
  .initial {
    opacity: 0;
  }

  .animate {
    opacity: 1;
    animation-duration: 0.75s;
    animation-name: animate-fade;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
    visibility: visible;
  }

  @keyframes animate-fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Landing = styled.div`
  h1 {
    font-size: 5.5rem;
    margin: 0;
    font-weight: 900;
    margin-block: 0;
  }
  h2 {
    font-size: 3.5rem;
  }
  p {
    font-size: 1.5rem;
  }
  .btn {
    padding: 0.5rem 0.85rem;
  }
  @media screen and (max-width: 820px) {
    h1 {
      font-size: 2.75rem;
    }
    h2 {
      font-size: 2.25em;
    }
    p {
      font-size: 1.25rem;
    }
  }
`;

export const LandingText = styled.div`
  margin-top: 5rem;
  @media screen and (max-width: 820px) {
    margin-top: 0;
  }
`;

export const ProfilePicture = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  .profile-picture {
    width: 100%;
    max-width: 20rem;
    height: auto;
    align-self: start;
    border-radius: 50%;
    margin: auto 0;
  }
  @media screen and (max-width: 820px) {
    margin-top: 2rem;
  }
`;
