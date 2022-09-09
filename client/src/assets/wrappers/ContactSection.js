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
`;

export const FormContainer = styled.div`
  margin-top: 4rem;
`;
