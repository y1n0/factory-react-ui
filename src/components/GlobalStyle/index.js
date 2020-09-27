import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    body, h1, h2, h3, h4, h5, h6, p, ol, ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
    }

    ol, ul {
        list-style: none;
    }


    html, body {
        font-family: ${({ theme }) => theme.fonts.sans};
        font-size: ${({ theme }) => theme.fontSizes.body};;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
    }

`;

export default GlobalStyle;