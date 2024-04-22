import React from "react";
import styled from "styled-components";
import { Thema } from "../Thema/Thema.tsx";

export const Header = (props) => {
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
            <ul>
              <li>
                <a href="#home" id="nav-link__one">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" id="nav-link__two">
                  Servise
                </a>
              </li>
              <li>
                <a href="#skills" id="nav-link__thre">
                  Skills
                </a>
              </li>
              <li>
                <a href="#portfolio" id="nav-link__four">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" id="nav-link__five">
                  Contact
                </a>
              </li>
            </ul>
            
            <SelectBox>
              <OptionsContainer>
                <Option>
                  <div>
                    <input type="radio" />
                    <label>En</label>
                  </div>
                  <div>
                    <input type="radio"/>
                    <label>Ru</label>
                  </div>
                </Option>
              </OptionsContainer>
            </SelectBox>
            
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

const navMedia = styled.div`
  display: flex;
`;

const SelectBox = styled.div`
  display: flex;
  width: 85px;
  flex-direction: column;
  position: relative;
  label {
    cursor: pointer;
    color: red;
  }
`;

const OptionsContainer = styled.div`
  background: #e2e6eea7;
  color: #f5f6fa;
  max-height: 0;
  width: 100%;
  opacity: 0;
  transition: all 0.4s;
  border-radius: 8px;
  overflow: hidden;
  position: absolute;
  top: 100%;
  left: 0;
  order: 1;
`;

const Option = styled(SelectBox)`
  display: none;
`;

const Selected = styled.div`
  border-right: none;
  margin-bottom: 8px;
  color: red;
  position: relative;
  order: 0;
`;
