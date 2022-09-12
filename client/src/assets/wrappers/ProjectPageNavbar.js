import styled from "styled-components";

export const Container = styled.div`
  height: var(--nav-height);
  background-color: var(--backgroundColor);
  width: 100%;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  z-index: 2;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;

  a {
    svg {
      margin-top: 1.5rem;
      font-size: 2.5rem;
      margin-left: 1rem;
      color: var(--textColor);
    }
  }
`;

export const LogoContainer = styled.div`
  margin-right: 0.5rem;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    width: 75px;
    border-radius: 50%;
  }
`;
