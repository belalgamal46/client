import { createGlobalStyle } from "styled-components/macro";

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Raleway', sans-serif;
    }
`;

export default GlobalStyles;
