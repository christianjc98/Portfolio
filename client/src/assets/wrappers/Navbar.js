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
`;

export const LogoContainer = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    align-items: center;
    width: 75px;
    border-radius: 50%;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  margin-right: 0.5rem;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: var(--nav-height);
    right: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: calc(100vh - var(--nav-height));
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    background-color: var(--primary-900);
    margin-right: 0;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  .menu-item-link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0.5rem 1rem;
    color: var(--textColor);
    cursor: pointer;
    transition: 0.5s all ease;

    &:hover {
      color: #7f5af0;
      transition: 0.5s all ease;
    }

    div {
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;

      svg {
        margin-right: 0.5rem;
      }
    }

    @media screen and (max-width: 960px) {
      width: 100%;

      div {
        width: 35%;
        justify-content: left;
      }
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
      margin-top: 2rem;
    }
  }
`;

export const MenuItemLink = styled.a``;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
      fill: #7f5af0;
      margin-right: 0.5rem;
    }
  }
`;
