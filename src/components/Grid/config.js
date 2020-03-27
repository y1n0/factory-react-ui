
import { css } from 'styled-components'

const THEME_CONF = 'flexboxgrid'
export const DEFAULT_CONFIG = {
  gridSize: 12,
  gutterWidth: 16,
  outerMargin: 8,
  mediaQuery: 'only screen',
  container: {
    sm: '450px', 
    md: '900px', 
    lg: '1200px',  
    xl: '1900px',
  },
  breakpoints: {
    xs: '0',  
    sm: '500px', 
    md: '960px', 
    lg: '1280px', 
    xl: '1920px'
  }
};


const configCache = [];
const makeCacheId = (props) => JSON.stringify((props.theme && props.theme[THEME_CONF]) || {});

const resolveConfig = (props) => {
  const themeConf = (props.theme && props.theme[THEME_CONF]) || {}

  const conf = {
    ...DEFAULT_CONFIG,
    ...themeConf,
    container: {
      ...DEFAULT_CONFIG.container,
      ...themeConf.container
    },
    breakpoints: {
      ...DEFAULT_CONFIG.breakpoints,
      ...themeConf.breakpoints
    }
  }

  conf.media = Object.keys(conf.breakpoints).reduce((media, breakpoint) => {
    const breakpointWidth = conf.breakpoints[breakpoint]
    media[breakpoint] = makeMedia(
      [
        conf.mediaQuery,
        breakpoint !== 0 && `(min-width: ${breakpointWidth})`
      ]
        .filter(Boolean)
        .join(' and ')
    )
    return media
  }, {})


  return conf
}

export const DIMENSION_NAMES = ['xs', 'sm', 'md', 'lg']

export default function config (props) {
  const cacheId = makeCacheId(props)
  if (configCache[0] === cacheId) {
    return configCache[1]
  }

  const conf = resolveConfig(props)

  configCache[0] = cacheId
  configCache[1] = conf

  return conf
}

function makeMedia (media) {
  return (...args) =>  css`
    @media ${media} {
      ${css(...args)}
    }
    `;
}