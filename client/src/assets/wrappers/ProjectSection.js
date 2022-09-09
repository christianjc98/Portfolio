import styled from "styled-components";

export const Background = styled.div`
  background-color: var(--backgroundColor);
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

  @media screen and (max-width: 960px) {
  }
`;

export const Container = styled.div`
  min-height: calc(100vh - var(--nav-height));
  padding-top: 2rem;

  h2 {
    font-size: 3rem;
    font-weight: 900;
    background: linear-gradient(to right, #a4b9cb 0%, #eee 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-content: center;
  margin-top: 2rem;

  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MoreProjectsDiv = styled.div`
  margin-top: 2rem;
  p {
    margin-left: auto;
    max-width: 9em;
    font-size: 1.5rem;
    a {
      display: flex;
      align-items: center;
      cursor: pointer;
      :hover {
        text-decoration: underline;
        svg {
          transform: translateX(50%);
        }
      }
    }

    svg {
      margin-left: 0.5rem;
    }
  }
  @media screen and (max-width: 820px) {
  }
`;
