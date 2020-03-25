import { createGlobalStyle, css } from "styled-components";


import RobotoRegular from './Roboto/Roboto-Regular.ttf';
import RobotoBlack from './Roboto/Roboto-Black.ttf';
import RobotoBold from './Roboto/Roboto-Bold.ttf';
import RobotoLight from './Roboto/Roboto-Light.ttf';
import RobotoMedium from './Roboto/Roboto-Medium.ttf';
import RobotoThin from './Roboto/Roboto-Thin.ttf';

import RobotoSlabBlack from './Roboto_Slab/RobotoSlab-Black.ttf';
import RobotoSlabBold from './Roboto_Slab/RobotoSlab-Bold.ttf';
import RobotoSlabExtraBold from './Roboto_Slab/RobotoSlab-ExtraBold.ttf';
import RobotoSlabExtraLight from './Roboto_Slab/RobotoSlab-ExtraLight.ttf';
import RobotoSlabLight from './Roboto_Slab/RobotoSlab-Light.ttf';
import RobotoSlabMedium from './Roboto_Slab/RobotoSlab-Medium.ttf';
import RobotoSlabRegular from './Roboto_Slab/RobotoSlab-Regular.ttf';
import RobotoSlabSemiBold from './Roboto_Slab/RobotoSlab-SemiBold.ttf';
import RobotoSlabThin from './Roboto_Slab/RobotoSlab-Thin.ttf';

import RobotoMonoBold from './Roboto_Mono/RobotoMono-Bold.ttf';
import RobotoMonoLight from './Roboto_Mono/RobotoMono-Light.ttf';
import RobotoMonoMedium from './Roboto_Mono/RobotoMono-Medium.ttf';
import RobotoMonoRegular from './Roboto_Mono/RobotoMono-Regular.ttf';
import RobotoMonoThin from './Roboto_Mono/RobotoMono-Thin.ttf';


/**
 * Expiremental Default Font
 */
 const ExpirementalDefaultFont = createGlobalStyle`
    /* Robot */
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoThin}) format('truetype');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto';
        src: url(${RobotoBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
    }


    /* Roboto Slab */
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabThin}) format('truetype');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabExtraLight}) format('truetype');
        font-weight: 200;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabExtraBold}) format('truetype');
        font-weight: 800;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Slab';
        src: url(${RobotoSlabBlack}) format('truetype');
        font-weight: 900;
        font-style: normal;
    }

    /* Roboto Mono */
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoThin}) format('truetype');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoLight}) format('truetype');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
        font-family: 'Roboto Mono';
        src: url(${RobotoMonoBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }
 `;

export default ExpirementalDefaultFont; 