import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    html {
        font-family: ${({theme}) => theme.fonts.sans};
        font-size: 16px;
        box-sizing: border-box;
    }

`;

export default GlobalStyle;