import styled from "styled-components";

export const Menu = styled.nav`
  list-style: none;
  font-size: 18px;
  transition: font-size 0.2s linear;
  align-content: center;

  li {
    display: inline-block;
    position: relative;
    a {
      transition: color 0.2s linear;
      padding: 21px;
      color: #d9d9d9;
      text-decoration: initial;
    }
    div {
      transition: color 0.2s linear;
      cursor: pointer;
    }
    &:hover {
      a {
        color: red;
      }
      div {
        color: red;
      }
    }
  }
`;

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-top: 40px;
`;

export const Conteiner = styled.div`
  position: relative;
  margin: 0 50px;
  color: #444;
  max-width: 1180px;
  width: 100%;
  overflow: hidden;
  align-items: center;

  span {
    display: flex;
    justify-content: center;
  }

  @media (max-width: 1024px) {
    .root {
      margin: 0 25px;
    }
  }

  @media (max-width: 768px) {
    .root {
      margin: 0 14px;
    }
  }

  @media (max-width: 560px) {
    .root {
      margin: 0 8px;
    }
  }
`;
