import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  a {
    width: 100%;
    height: 70%;
  }
  img {
    width: 100%;
    border-radius: 5px;
    height: 100%;
    opacity: 80%;
    :hover {
      opacity: initial;
      transform: translateY(-5%);
    }
  }
  h4 {
    margin-bottom: 0;
    margin-top: 1rem;
    font-weight: 700;
  }
  p {
    margin-top: 0.5rem;
    color: var(--primary-50);
  }
  @media screen and (max-width: 820px) {
    :not(:first-child) {
      margin-top: 3rem;
    }
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  a {
    height: 100%;
    width: 40%;
    text-align: center;
    margin: 0 0 0 0.75rem;
  }

  .btn-hipster {
    color: var(--primary-900);
    background-color: var(--primary-400);
    :hover {
      background: var(--primary-200);
    }
  }
`;
