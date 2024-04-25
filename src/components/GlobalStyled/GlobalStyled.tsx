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
        background-color: black;
        color: white;
        width: 1300px;
        margin: auto;
    }
`