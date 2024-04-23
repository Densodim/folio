import React from "react";
import styled from "styled-components";
import { Thema } from "../Thema/Thema.tsx";

export const Header = (props) => {
  const MENU = [
    {
      title: "Home",
      url: "#home",
    },
    {
      title: "Servise",
      url: "#services",
    },
    {
      title: "Skills",
      url: "#skills",
    },
    {
      title: "Portfolio",
      url: "#portfolio",
    },
    {
      title: "Contact",
      url: "#contact",
    },
  ];

  return (
    <>
      <header>
        <Container>
          <Logo>
            <a href="/">
              Portf<span>olio.</span>
            </a>
          </Logo>
          <Links>
            {MENU.map((res, index) => {
              return (
                <ul>
                  <li>
                    <a href={res.url}>{res.title}</a>
                  </li>
                </ul>
              );
            })}
            <Selected>Ru</Selected>
          </Links>
        </Container>
      </header>
    </>
  );
};

const Container = styled.nav`
  position: relative;
  width: 100%;
  max-width: 75rem;
  padding: 0 1.5rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const Logo = styled.a`
  margin-right: 1.5rem;
  font-family: "Abril Fatface", cursive;
  font-size: 1.5rem;
  color: ${Thema.color.secondary.light};
  letter-spacing: 1px;
  transition: 0.3s;
  span {
    color: ${Thema.color.logo.light};
  }
`;

const Links = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  ul {
    display: flex;
    align-items: center;
    width: 100%;
    li {
      position: relative;
      display: inline-block;
      margin: 0 1rem;
      text-transform: uppercase;
      font-size: 0.75rem;
      letter-spacing: 0.5px;
      color: var(--text-color);
      font-weight: 500;
      opacity: 0.9;
      transition: 0.3s;
      &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 10px;
        border-radius: 5px;
        background-color: ${Thema.li.bgColor.light};
        bottom: 0;
        left: -5px;
        z-index: -1;
        opacity: 0;
        transition: 0.3s;
      }
      &:hover {
        &::after {
        }
      }
      &:active {
        color: ${Thema.li.activeColor.light};
        &::after {
          width: 100%;
          opacity: 0.2;
        }
      }
    }
  }
`;

const Selected = styled.div`
  border-right: none;
  margin-bottom: 8px;
  color: red;
  position: relative;
  order: 0;
`;
