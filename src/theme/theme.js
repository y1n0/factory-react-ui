
import colors from './constants/colors';
import breakpoints from './constants/breakpoints';
import space from './constants/space';
import shadows from './constants/shadows';
import sizes from './constants/sizes';
import fonts from './constants/fonts';
import fontWeights from './constants/fontWeights';
import fontSizes from './constants/fontSizes';
import lineHeights from './constants/lineHeights';
import borders, {radii, borderWidths, borderStyles} from './constants/borders';

import buttons from './components/buttons';
import anchors from './components/anchors';

const baseTheme = {
    colors,
    breakpoints,
    space,
    shadows,
    fonts,
    fontWeights,
    fontSizes,
    lineHeights,
    sizes,
    borders,
    radii,
    borderWidths,
    borderStyles,
}

const componentsTheme = {
    buttons,
    anchors,

}


export const theme = {
    
    ...baseTheme,
    ...componentsTheme,

};