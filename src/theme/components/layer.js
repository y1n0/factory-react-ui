import { css } from "styled-components";



export const layer = {
    responsiveBreakpoint: 'md',
    zIndex: 1000,

    overlay: {
        background: 'gray500'
    },
    extend:  css`
        border: 8px solid red;
    `
};