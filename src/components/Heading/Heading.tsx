import React from "react";
import styled, { css } from "styled-components";

type PropsText = {
  heading?: string;
  color?: string;
  children?: React.ReactNode;
};

const Heading = ({ color, heading, children }) => {
  return (
    <>
      <StyledText heading={heading} color={color}>
        <span>{children}</span>
      </StyledText>
    </>
  );
};

export default Heading;

const StyledText = styled.div`
  span {
    margin-top: 50px;
    margin-left: 150px;
    font-style: italic;
    display: flex;
    justify-content: left;
    align-items: center;
  }

  ${(s) =>
    s.heading === "big" &&
    css<PropsText>`
      font-size: 30px;
      color: ${s.color};
    `};
  ${(s) =>
    s.heading === "small" &&
    css<PropsText>`
      font-size: 15px;
      color: ${s.color};
    `}
`;
