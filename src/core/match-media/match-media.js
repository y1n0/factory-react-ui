import {useState, useEffect, useContext} from 'react'
import { ThemeContext } from 'styled-components';

export const useMedia = mediaQuery => {
    const [doesMatch, onSetDoesMatch] = useState(false);
    const {breakpoints} = useContext(ThemeContext) || {};
    const breakpointsKeys = Object.keys(breakpoints).map(bp => isNaN(bp) ? bp : +bp); 
    let _query = mediaQuery;

    if(breakpointsKeys.includes(mediaQuery)) {
        _query = `screen and (min-width: ${breakpoints[mediaQuery]})`;
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
  