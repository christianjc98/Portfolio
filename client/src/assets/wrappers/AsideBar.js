import styled from "styled-components";

export const Container = styled.div`
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 40px;
  right: auto;
  z-index: 10;
  color: #fffffe;

  @media screen and (max-width: 1300px) {
    display: none;
  }
`;

export const SocialMedia = styled.ul`
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;

  ::after {
    content: "";
    display: block;
    width: 1px;
    height: 120px;
    margin: 0px auto;
    background-color: #fffffe;
  }
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
    font-size: 1.25rem;
  }
`;
