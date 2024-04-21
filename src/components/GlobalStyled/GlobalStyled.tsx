import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0px;
        margin: 0px;
    }
    body{
        font-family: 'Poppins', sans-serif;
        background: radial-gradient(black, #141414);
        color: white;
        display: grid;

    }
`;
