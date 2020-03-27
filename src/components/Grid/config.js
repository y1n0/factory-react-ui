
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
};


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