import { DEFAULT_CONFIG } from "./config";
import {stripUnit} from 'polished';

// Name of the grid-system config in theme object
const THEME_CONF = 'gridSystem';

// Array to store the merged grid-system config
const configCache = [];

// Generate a config ID
const generateConfigCacheId = (theme) => JSON.stringify((theme && theme[THEME_CONF]) || {});


// Merge default config with global grid-system config
const resolveConfig = (theme) => {
    const themeConf = (theme && theme[THEME_CONF]) || {}
    const conf = {
      ...DEFAULT_CONFIG,
      ...themeConf,
      container: {
        ...DEFAULT_CONFIG.container,
        ...themeConf.container
      },
    }
    return conf;
};

// get grid-system config
const getConfig = ({theme}) => {
    const cacheId = generateConfigCacheId(theme);
    if (configCache[0] === cacheId) {
      return configCache[1]
    }
    const conf = resolveConfig(theme);
    configCache[0] = cacheId
    configCache[1] = conf
    return conf;
};

// sort breakpoint names from props
export const sortBreakpointProps = (props) => {
    const propsArr = Object.keys(props);
    const breakpointNames = Object.keys(props.theme.breakpoints);
    const breakpoints = propsArr.filter(_prop => ~breakpointNames.indexOf(_prop));
    const sortedBreakpoints = breakpoints.sort((bp1, bp2) => {
        const valueBp1 = stripUnit(props.theme.breakpoints[bp1]);
        const valueBp2 = stripUnit(props.theme.breakpoints[bp2]);
        return  valueBp1 - valueBp2
    });
    return sortedBreakpoints;
};

export const getGridSize = (props) => {
    return getConfig(props).gridSize;
};

export const getGutterWidth = (props) => {
    return getConfig(props).gutterWidth;
};

export const getOuterMargin = (props) => {
    return getConfig(props).outerMargin;
};

export const getContainer = (props) => {
    return (breakpoint) => getConfig(props).container[breakpoint];
}




