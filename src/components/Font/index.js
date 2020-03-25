import { createGlobalStyle, css } from "styled-components";


import RobotoRegular from './Roboto/Roboto-Regular.ttf';
import RobotoSlabRegular from './Roboto_Slab/RobotoSlab-Regular.ttf';
import RobotoMonoRegular from './Roboto_Mono/RobotoMono-Regular.ttf';


/**
 * Expiremental Default Font
 */
 const ExpirementalDefaultFont = createGlobalStyle`
     @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
 `;

export default ExpirementalDefaultFont; 