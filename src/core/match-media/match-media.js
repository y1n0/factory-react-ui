import {useState, useEffect, useContext} from 'react'
import { ThemeContext } from 'styled-components';
import {stripUnit} from 'polished';


const getClosestValue = (val, arr) => {
  const index = arr.sort((a,b) => a - b).findIndex(el => val < el);
  return index > 0 ? arr[index] : null;
}

export const useMediaLessThan = breakpoint => {
  return useMedia([breakpoint], 'max-width');
}
export const useMediaGreaterThan = breakpoint => {
  return useMedia([breakpoint], 'min-width');
}
export const useMediaBetween = (bp1, bp2) => {
  return useMedia([bp1, bp2], 'between');
}

export const useMedia = (bp, mediaQuery = 'default' ) => {
    if(!(bp instanceof Array)) {
      bp = [bp];
    }
    const [doesMatch, onSetDoesMatch] = useState(false);
    const {breakpoints} = useContext(ThemeContext) || {};
    const breakpointsKeys = Object.keys(breakpoints).map(_bp => isNaN(_bp) ? _bp : +(_bp)); 
    let _query = bp[0];
    
    if(breakpointsKeys.includes(bp[0])) {

        const sortedBreakpointsValues = breakpoints.map(e => stripUnit(e))
        const maxWidth = getClosestValue(stripUnit(breakpoints[bp[0]]), sortedBreakpointsValues);
        switch (mediaQuery) {
          case 'max-width':
              _query = `(max-width: ${breakpoints[bp[0]]})`;
              break;
          case 'min-width':
              _query = `(min-width: ${breakpoints[bp[0]]})`;
              break;
          case 'between':
              _query = `(min-width: ${breakpoints[bp[0]]}) and (max-width: ${breakpoints[bp[1]]})`;
              break;
          default:
            console.warn("[vactory-ui] useMedia("+bp+")  ne sera pas prise en charge dans les versions à venir, utiliser plutot useMediaLessThan(), useMediaGreaterThan() ou useMediaBetween()");
            _query = `(min-width: ${breakpoints[bp[0]]})${maxWidth !== null ? `and (max-width: ${maxWidth}px)` : '' }`;
            break;
        }
       //  _query = `(min-width: ${minWidth})${maxWidth !== null ? `and (max-width: ${maxWidth}px)` : '' }`;
    }

    useEffect(() => {
      const onUpdateMatch = ({matches}) => {
        onSetDoesMatch(matches)
      }
  
      const matcher = window.matchMedia(_query)
  
      const isModern = 'addEventListener' in matcher
      if (isModern) {
        matcher.addEventListener('change', onUpdateMatch)
      } else {
        matcher.addListener(onUpdateMatch)
      }
  
      onUpdateMatch(matcher)
  
      return () => {
        if (isModern) {
          matcher.removeEventListener('change', onUpdateMatch)
        } else {
          matcher.removeListener(onUpdateMatch)
        }
      }
    }, [_query, onSetDoesMatch])
  
    return doesMatch
  }
  