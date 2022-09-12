import styled from "styled-components";

export const Container = styled.footer`
  height: 8rem;
  background-color: var(--backgroundColor);
  width: 100%;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 11;
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaContainer = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  margin-left: 1rem;
`;

export const SocialMedia = styled.ul`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;
`;

export const SocialMediaItem = styled.li``;

export const SocialMediaLink = styled.a`
  display: inline-block;
  text-decoration: none;
  text-decoration-skip-ink: auto;
  color: inherit;
  position: relative;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  padding: 10px;
  cursor: pointer;

  :hover {
    transform: scale(1.5);
  }

  svg {
    font-size: 1.4rem;
  }
`;

export const PageInfoContainer = styled.div`
  margin-top: auto;
  margin-bottom: 1rem;
  margin-right: 1rem;

  p {
    margin: 10px;
    text-align: center;
    sub {
      margin-top: 0.5rem;
    }
  }
`;
