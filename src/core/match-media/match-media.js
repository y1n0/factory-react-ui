import {useState, useEffect, useContext} from 'react'
import { ThemeContext } from 'styled-components';
import {stripUnit} from 'polished';


const getClosestValue = (val, arr) => {
  const index = arr.sort((a,b) => a - b).findIndex(el => val < el);
  return index > 0 ? arr[index] : null;
}

export const useMedia = mediaQuery => {
    const [doesMatch, onSetDoesMatch] = useState(false);
    const {breakpoints} = useContext(ThemeContext) || {};
    const breakpointsKeys = Object.keys(breakpoints).map(bp => isNaN(bp) ? bp : +bp); 
    let _query = mediaQuery;
    
    if(breakpointsKeys.includes(mediaQuery)) {
        const sortedBreakpointsValues = breakpoints.map(e => stripUnit(e))
        const minWidth = breakpoints[mediaQuery];
        const maxWidth = getClosestValue(stripUnit(minWidth), sortedBreakpointsValues);
        _query = `(min-width: ${minWidth})${maxWidth !== null ? `and (max-width: ${maxWidth}px)` : '' }`;
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
  