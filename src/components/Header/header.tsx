import React from "react";
import styled from "styled-components";
import { ReactComponent as BarIcon } from "./assets/bar.svg";
import { Conteiner, HeaderWrap, Menu } from "./styled/styled.tsx";

const MENU = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Peages",
    link: "#",
  },
  {
    title: "Services",
    link: "#",
  },
  {
    title: "Portfolio",
    link: "#",
  },
  {
    title: "News",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
];

const Header = () => {
  return (
    <>
      <header>
        <Conteiner>
          <HeaderWrap>
            <BarIcon />
          </HeaderWrap>
          <span>
            <Menu>
              {MENU.map((item, index) => (
                <li key={index}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </Menu>
          </span>
        </Conteiner>
      </header>
    </>
  );
};

export default Header;






