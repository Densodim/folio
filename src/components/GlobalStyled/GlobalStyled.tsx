import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        font-family: "Poppins", sans-serif;
        overflow-x: hidden;
        background-color: #EDE5FF;
        transition: 0.3s background-color;
    }
`;
