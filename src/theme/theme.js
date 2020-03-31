
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
    buttons : {
        primary :  {
            backgroundColor: colors.primary500,
            color: colors.white,
            fontSize: fontSizes.paragraph,
            lineHeight: lineHeights.paragraph,
            borderRadius: radii.rounded,
            '&:hover': {
                backgroundColor: colors.primary100,
                color: colors.primary500,
            }
        }
    },
    
}


export const theme = {
    
    ...baseTheme,
    ...componentsTheme,

};