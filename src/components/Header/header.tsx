import React from "react";
import styled, { css } from "styled-components";
import { ReactComponent as Bar } from "../assets/bar.svg";
import { ReactComponent as FingersHand } from "../assets/fingersHand.svg";
import { ReactComponent as PointerArrow } from "../assets/pointerArrow.svg";
import { Thema } from "../Thema/Thema.tsx";
import { Sprite } from "../sprite/sprite.tsx";
import vscode from "../assets/images/vs-code.png";
import sass from "../assets/images/sass.png";
import react from "../assets/images/react.png";
import js from "../assets/images/javascript.png";
import html from "../assets/images/html5.png";
import firebase from "../assets/images/firebase.png";

type TextProps = {
  display?: string;
  fondsize?: string;
  size?: string;
  thema?: string;
  iconid?: string;
  placeholder?: string;
};

const Header = () => {
  return (
    <>
      <header>
        <Logo>
          <Sprite iconid="bar" />
          <Nav>
            <ul>
              <li>Home</li>
              <li>Pages</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </Nav>
        </Logo>
      </header>

      <section>
        <Box>
          <Text as="h5">
            <FingersHand />
            say hello or wave
          </Text>
          <Text as="h2" fondsize="60px">
            i,m Mehedi UI/UX <span>designer</span>
          </Text>
          <Text as="p">
            We appreciate your trust greatly our clients choose us & our
            products because they know we are the best.
          </Text>
          <Text as="h3">
            <a href="#">
              <PointerArrow />
              View Works
            </a>
          </Text>
        </Box>
      </section>

      <section>
        <Text>
          <p>Who i Do?</p>
        </Text>
        <Text as="h2" display={"flex-end"}>
          Featured Services.
          <a href="#">
            <PointerArrow />
            View all services
          </a>
        </Text>
        <Card thema="skills">
          <ol>
            <li>
              <Sprite iconid="Card1" />
              <Text as="h3">
                Brand Strategy & Art Direction
                <p>
                  <Sprite iconid="cardFlake" /> Graphics art{" "}
                  <Sprite iconid="cardFlake" /> Sketching & layout
                </p>
              </Text>
            </li>
            <li>
              <Sprite iconid="Card2" />
              <Text as="h2">
                UX/UI Design & Website/App Design
                <p>
                  <Sprite iconid="cardFlake" /> Ui/Ux Design{" "}
                  <Sprite iconid="cardFlake" /> Web & Mobile app
                </p>
              </Text>
            </li>
            <li>
              <Sprite iconid="Card3" />
              <Text as="h2">
                Frontend development & Digital Marketing
                <p>
                  <Sprite iconid="cardFlake" /> Wordpress fr
                  <Sprite iconid="cardFlake" /> Web & Mobile app
                </p>
              </Text>
            </li>
            <li>
              <Sprite iconid="Card4" />
              <Text as="h2">
                Brand Strategy & Art Direction
                <p>
                  <Sprite iconid="cardFlake" /> Wordpress fr
                  <Sprite iconid="cardFlake" /> Web & Mobile app
                </p>
              </Text>
            </li>
          </ol>
        </Card>
      </section>

      <section>
        <Text as="h2" fondsize="40px" size="center">
          <Sprite iconid="cardFlake" />
          My Work Portfolio
        </Text>
        <Card thema="projects">
          <ol>
            <li>Project 1</li>
            <li>Project 1</li>
            <li>Project 1</li>
            <li>Project 1</li>
            <li>Project 1</li>
          </ol>
        </Card>
        <BtmCard>More works</BtmCard>
      </section>

      <section>
        <Text>
          <Sprite iconid="cardFlake" />
          Proffesional Work
        </Text>
        <Text as="h2" size="left">
          Proffesional skill
        </Text>
        <Card thema="list">
          <ol>
            <li>
              <span>
                <Sprite iconid="calendar" /> 2017 - 2019
              </span>
              <Text as="h2" fondsize="25px" size="right">
                Excelent product design
              </Text>
            </li>
            <li>
              <span>
                <Sprite iconid="calendar" /> 2017 - 2019
              </span>
              <Text as="h2" fondsize="25px" size="right">
                Fullstack Front Developer
              </Text>
            </li>
            <li>
              <span>
                <Sprite iconid="calendar" /> 2017 - 2019
              </span>
              <Text as="h2" fondsize="25px" size="right">
                lead Creative UI Designer
              </Text>
            </li>
          </ol>
        </Card>
        <Card thema="skillset">
          <ol>
            <li>
              <img src={vscode} />
              <Text>VSCode</Text>
            </li>
            <li>
              <img src={sass} />
              <Text>SASS</Text>
            </li>
            <li>
              <img src={react} />
              <Text>React</Text>
            </li>
            <li>
              <img src={js} />
              <Text>JavaScript</Text>
            </li>
            <li>
              <img src={html} />
              <Text>HTML</Text>
            </li>
            <li>
            <img src={firebase} />
              <Text>firebase</Text>
            </li>
          </ol>
        </Card>
      </section>

      <section>
      <Text as="h2" fondsize="40px" size="center">
          <Sprite iconid="cardFlake" />
          Get in touch
        </Text>
        <form>
          <fieldset>
            <legend>Message</legend>
          <Text fondsize="20px" size="center">What’s your name?</Text>
          <TextInput placeholder="Full Name here"/>
          <Text fondsize="20px" size="center">Enter Your Email address?</Text>
          <TextInput type="email" placeholder="Full Name here"/>
          <Text fondsize="20px" size="center">What’s your name?</Text>
          <TextInput type="textarea" placeholder="Write Messege....."/>
          <BtmCard>Send</BtmCard>
          </fieldset>
        </form>
      </section>

      <footer>
        <Text fondsize="50px" size="center" color="#bae935">Have any Projects in Mind? Get in <a href="#">touch</a></Text>
        <Text fondsize="20px" size="center">© 2020 - 2021. All rights reserved.</Text>
      </footer>
    </>
  );
};

export default Header;


const TextInput = styled.input.attrs(({placeholder, type})=>({
  type: type || 'text',
  placeholder: placeholder,
}))`
  width: 100%;
  max-width: 300px;
  min-height: 60px;
  max-height: 100px;
  border: 1px solid #bae935;
  border-radius: 6px;
  background-color: transparent;
  display:flex;
  margin: auto;
  margin-top: 5px;
  color: white;
  font-size: 18px;
`;

const Logo = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  background-color: #262626;
  /* width: 110px; */
  /* height: 96px; */
  svg {
    display: flex;
    justify-content: center;
    width: 50px;
    height: 50px;
    fill: #bae935;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ul {
    display: flex;
    justify-content: center;
    list-style: none;
  }
  li + li {
    margin: 0 50px;
    &:hover {
      cursor: pointer;
      color: #bae935;
    }
  }
`;


const Box = styled.div`
  width: 692px;
  height: 532px;
  margin-top: 50px;
  margin-left: 50px;
  line-height: 2;
`;

const Text = styled.div<TextProps>`
  color: white;
  font-size: ${(props) => (props.fondsize ? props.fondsize : "20px")};
  gap: 20px;

  ${(props) =>
    props.size === "center" &&
    css<TextProps>`
      display: flex;
      justify-content: center;
      gap: 10px;
      margin-top: 50px;
    `};
  ${(props) =>
    props.size === "left" &&
    css<TextProps>`
      font-size: 40px;
      display: flex;
      margin-top: 10px;
      justify-content: left;
    `};
  ${(props) =>
    props.size === "right" &&
    css<TextProps>`
      display: flex;
    `};

  span {
    color: #bae935;
    display: table-caption;
  }
  p {
    font-size: 16px;
  }
  a {
    color: ${(props) => (props.color && props.color || "white")};
    display: flex;
    justify-content: ${(props) =>
      props.display ? props.display : "flex-start"};
    svg {
      width: 40px;
      height: 40px;
      fill: #6ea62a;
      &:hover {
        fill: red;
      }
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

const Card = styled.nav<TextProps>`
  ol {
    counter-reset: card 0;
    display: flex;
    gap: 20px;
    list-style: none;
    flex-wrap: wrap;
    ${(props) =>
      props.thema === "list" &&
      css<TextProps>`
        justify-content: flex-end;
      `}
    ${(props) =>
      props.thema === "skillset" &&
      css<TextProps>`
        flex-wrap: nowrap;
        gap: 0px;
      `}
  }
  li {
    counter-increment: card 1;

    ${(props) =>
      props.thema === "projects" &&
      css<TextProps>`
        width: ${Thema.Card.projects.width};
        height: ${Thema.Card.projects.height};
      `};
    ${(props) =>
      props.thema === "skills" &&
      css<TextProps>`
        width: ${Thema.Card.skills.width};
        height: ${Thema.Card.skills.height};
      `};
    ${(props) =>
      props.thema === "list" &&
      css<TextProps>`
        width: ${Thema.list.width};
        height: ${Thema.list.height};
        justify-content: flex-end;
      `}
    ${(props) =>
      props.thema === "skillset" &&
      css<TextProps>`
        width: ${Thema.skillset.width};
        height: ${Thema.skillset.height};
        margin-top: 20px;
        gap: 0px;
      `};

    background-color: #111010;
    color: white;
    padding: 20px;
    position: relative;

    &::after {
      content: counter(card);
      color: #ffffff6f;
      font-size: 5rem;
      position: absolute;
      right: 10px;
      top: -10px;
    }
    svg {
      color: white;
    }
    span {
      color: white;
      svg {
        width: 20px;
        height: 20px;
      }
    }
    img {
      margin: auto;
    }
  }
`;

const BtmCard = styled.a`
  height: 66px;
  width: 235px;
  border: 1px solid #bae935;
  display: flex;
  margin: auto;
  margin-top: 50px;
  border-radius: 6px;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  &:hover {
    border: 2px solid #bae935;
    color: #bae935;
  }
`;

