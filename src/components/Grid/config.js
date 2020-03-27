
import { css } from 'styled-components'

export const DEFAULT_CONFIG = {
  gridSize: 12,
  gutterWidth: 16,
  outerMargin: 8,
  container: {
    sm: '450px', 
    md: '900px', 
    lg: '1200px',  
    xl: '1900px',
  }
};

// TODO refactoring : moving to media 
export const BREAKPOINTS = {
  xs: '0',  
  sm: '500px', 
  md: '960px', 
  lg: '1280px', 
  xl: '1920px'
}

// TODO refactoring : movig to gridsystem helpers
const THEME_CONF = 'gridSystem';

// TODO refactoring : movig to gridsystem helpers
const configCache = [];

// TODO refactoring : movig to gridsystem helpers
const makeCacheId = (props) => JSON.stringify((props.theme && props.theme[THEME_CONF]) || {});

// TODO refactoring : movig to gridsystem helpers
const resolveConfig = (props) => {
  const themeConf = (props.theme && props.theme[THEME_CONF]) || {}
  const conf = {
    ...DEFAULT_CONFIG,
    ...themeConf,
    container: {
      ...DEFAULT_CONFIG.container,
      ...themeConf.container
    },
  }
  return conf
}


// TODO refactoring : movig to gridsystem helpers
export const sortPropsBreakpoint = (props) => {
    const propsArr = Object.keys(props);
    const breakpointNames = Object.keys(BREAKPOINTS);
    const breakpoints = propsArr.filter(_prop => ~breakpointNames.indexOf(_prop));
    const sortedBreakpoints = breakpoints.sort((bp1, bp2) => breakpointNames.indexOf(bp1) - breakpointNames.indexOf(bp2));
    return sortedBreakpoints
}

// TODO refactoring : movig to gridsystem helpers
export default function config (props) {

  const cacheId = makeCacheId(props);
  if (configCache[0] === cacheId) {
    return configCache[1]
  }
  const conf = resolveConfig(props);
  configCache[0] = cacheId
  configCache[1] = conf
  return conf;
}


// TODO refactoring : moving to media 
const getSizeFromBreakpoint = (breakpointValue, breakpoints = {})  => {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue)) {
    return breakpointValue;
  } else {
    console.error('styled-media-query: No valid breakpoint or size specified for media.');
    return '0';
  }
}

// TODO refactoring : moving to media 
export const lessThan = (breakpoint) => {
  return (...args) =>  css`
    @media only screen and (min-width: ${getSizeFromBreakpoint(breakpoint, BREAKPOINTS)})  {
      ${css(...args)}
    }
    `;
}