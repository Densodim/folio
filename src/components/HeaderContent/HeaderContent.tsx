import React from "react";
import Header from "../Header/header.tsx";
import Heading from "../Heading/Heading.tsx";
import {ReactComponent as Icon} from '../assets/Ellipse 2804.svg';
import {ReactComponent as Vector} from '../assets/Vector.svg';

type PropsHeaderContent = {};

const HeaderContent = () => {
  return (
    <>
      <Header />
      <div>
        <Heading color="white" heading="small">
          {" "}
          say hello or wave{" "}
        </Heading>
        <Heading color="white" heading="big">
          i,m Mehedi UI/UX
        </Heading>
        <Heading color="#BAE935" heading="big">
          designer
        </Heading>
        <Heading color="white" heading="small">
          We appreciate your trust greatly our clients choose us & our products
          because they know we are the best.
        </Heading>
        <div>
          <Icon /> <Vector />
        </div>

      </div>
    </>
  );
};

export default HeaderContent;
