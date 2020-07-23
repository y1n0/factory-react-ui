
import colors from './constants/colors';
import breakpoints, {gridSystem} from './constants/breakpoints';
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
import inputs from './components/inputs';

import labels from './components/labels';
import radio from './components/radio';
import checkbox from './components/checkbox';
import select from './components/select';
import {layer} from './components/layer';
import tabs from './components/tabs';
import accordion from './components/accordion';
import breadcrumb from './components/breadcrumb';
import navs from './components/navs';
import {heading} from './components/text';
import {searchOverlay} from './components/search-overlay';

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
    gridSystem,
}

const componentsTheme = {
    buttons,
    anchors,
    inputs,
    labels,
    radio,
    checkbox,
    select,
    layer,
    tabs,
    accordion,
    breadcrumb,
    navs,
    heading,
    searchOverlay,

    card: {
        variant1: {
            title: {
                
            },
            body: {
                padding: 'small',
            },
            excerpt: {
                
            }
        }
    }
}


export const theme = {
    
    ...baseTheme,
    ...componentsTheme,
};