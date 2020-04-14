import React, { useContext, forwardRef } from 'react';
import styled, { css, keyframes, ThemeContext } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import { Box, Flex} from '../Box';
import { generateMedia } from '../../core/styled-media';


export const StyledLayer = forwardRef(({variant='default', ...props}, ref) => {
    const theme = useContext(ThemeContext);
    const responsiveBreakpoint = themeGet('layer.responsiveBreakpoint',  false)({theme});
    let mediaStyle = {};
    let hidenStyle = {};
    let boundsStyle = {
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
    };

    if (props.position === 'hidden') {
        hidenStyle = {
            left: '-100%',
            right: '100%',
            zIndex: '-1',
            position: 'fixed',
        };
    }

    if(props.targetBounds) {
        const { left, right, top, bottom } = props.targetBounds;
        boundsStyle = {
            position: 'fixed',
            top: `${top}px`,
            left: `${left}px`,
            right: `${right}px`,
            bottom: `${bottom}px`,
        }
    }

    if(props.responsive && responsiveBreakpoint) {
        mediaStyle[`@media (max-width: ${themeGet(`breakpoints.${responsiveBreakpoint}`, 0)({theme})} )`] = {
            position: 'absolute',
            width: '100%',
            height: '100%',
            minHeight: '100%',
        }
    }
    return (
        <Box
            {...props}
            ref={ref}
            variant={`layer${variant ? '.'+variant : ''}`}
            sx={{
                backgroundColor: 'primary200',
                position: 'relative',
                zIndex: themeGet('layer.zIndex')({theme}),
                pointerEvents: 'none',
                outline: 'none',
                ...hidenStyle,
                ...boundsStyle,
                ...mediaStyle,
            }}
            
        >
            {props.children}
        </Box>
    );

})

export const StyledOverlay = props => {
    const theme = useContext(ThemeContext);
    const responsiveBreakpoint = themeGet('layer.responsiveBreakpoint',  false)({theme});
    let mediaStyle = {};
    if(props.responsive && responsiveBreakpoint) {
        mediaStyle[`@media (max-width: ${themeGet(`breakpoints.${responsiveBreakpoint}`, 0)({theme})} )`] = {
            position: 'relative',
        }
    }
    return (
        <Box
            {...props}
            sx={{
                position: 'absolute',
                backgroundColor: !props.plain ? themeGet('layer.overlay.backgroundColor')({theme}) : null,
                top: '0px',
                left: '0px',
                right: '0px',
                bottom: '0px',
                ...mediaStyle,
                pointerEvents: 'all',
            }}
            
        >
            {props.children}
        </Box>
    );

}


const parseMetricToNum = fontAsString => {
    if (fontAsString.match(/\s/) && process.env.NODE_ENV !== 'production') {
      console.warn(`Invalid single measurement value: "${fontAsString}"`);
    }
    return parseFloat(fontAsString.match(/\d+(\.\d+)?/), 10);
  };

const getMargin = (margin, theme, position) => {
    const axis =
      position.indexOf('top') !== -1 || position.indexOf('bottom') !== -1
        ? 'vertical'
        : 'horizontal';
    const marginValue = margin[position] || margin[axis] || margin;
    const marginApplied = theme.space[marginValue] || marginValue;
    const marginInTheme = !!theme.space[marginValue];
  
    return !marginInTheme && typeof marginValue !== 'string'
      ? 0
      : parseMetricToNum(marginApplied);
  };

const getBounds = (bounds, margin, theme, position = undefined) => {
    if (position) {
      return bounds[position] + getMargin(margin, theme, position);
    }
    return {
      bottom: bounds.bottom + getMargin(margin, theme, 'bottom'),
      // 'bottom-left': getMargin(margin, theme, 'bottom-left'),
      // 'bottom-right': getMargin(margin, theme, 'bottom-right'),
      end: bounds.right + getMargin(margin, theme, 'end'),
      left: bounds.left + getMargin(margin, theme, 'left'),
      right: bounds.right + getMargin(margin, theme, 'right'),
      start: bounds.left + getMargin(margin, theme, 'start'),
      top: bounds.top + getMargin(margin, theme, 'top'),
      // 'top-right': getMargin(margin, theme, 'top-right'),
      // 'top-left': getMargin(margin, theme, 'top-left'),
    };
  };

  const POSITIONS = {
    center: {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: 50%;
        transform: translateX(-50%);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        top: 50%;
        transform: translateY(-50%);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
         
      `,
      false: () => css`
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
         
      `,
    },
  
    top: {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: 50%;
        transform: translate(-50%, 0%);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        top: ${bounds.top}px;
        transform: translateY(0);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        transform: translateY(0);
         
      `,
      false: bounds => css`
        top: ${bounds.top}px;
        left: 50%;
        transform: translate(-50%, 0);
         
      `,
    },
  
    bottom: {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: 50%;
        transform: translate(-50%, 0);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        transform: translateY(0);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        transform: translateY(0);
         
      `,
      false: bounds => css`
        bottom: ${bounds.bottom}px;
        left: 50%;
        transform: translate(-50%, 0);
         
      `,
    },
  
    left: {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        transform: translateX(0);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        top: 50%;
        transform: translate(0, -50%);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      false: bounds => css`
        left: ${bounds.left}px;
        top: 50%;
        transform: translate(0, -50%);
         
      `,
    },
  
    right: {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        top: 50%;
        transform: translate(0, -50%);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      false: bounds => css`
        right: ${bounds.right}px;
        top: 50%;
        transform: translate(0, -50%);
         
      `,
    },
  
    start: {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        inset-inline-start: ${bounds.start}px;
        transform: translateX(0);
         
      `,
      horizontal: bounds => css`
        inset-inline-start: ${bounds.start}px;
        inset-inline-end: ${bounds.end}px;
        top: 50%;
        transform: translate(0, -50%);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        inset-inline-start: ${bounds.start}px;
        inset-inline-end: ${bounds.end}px;
        transform: translateX(0);
         
      `,
      false: bounds => css`
        inset-inline-start: ${bounds.start}px;
        top: 50%;
        transform: translate(0, -50%);
         
      `,
    },
  
    end: {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        inset-inline-end: ${bounds.end}px;
        transform: translateX(0);
         
      `,
      horizontal: bounds => css`
        inset-inline-start: ${bounds.start}px;
        inset-inline-end: ${bounds.end}px;
        top: 50%;
        transform: translate(0, -50%);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        inset-inline-start: ${bounds.start}px;
        inset-inline-end: ${bounds.end}px;
        transform: translateX(0);
         
      `,
      false: bounds => css`
        inset-inline-end: ${bounds.end}px;
        top: 50%;
        transform: translate(0, -50%);
         
      `,
    },
  
    'top-right': {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        top: 0;
        transform: translateX(0);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      false: bounds => css`
        top: ${bounds.top}px;
        right: ${bounds.right}px;
        transform: translateY(0);
         
      `,
    },
  
    'top-left': {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        transform: translateX(0);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        top: 0;
        transform: translateX(0);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      false: bounds => css`
        top: ${bounds.top}px;
        left: ${bounds.left}px;
        transform: translateY(0);
         
      `,
    },
  
    'bottom-right': {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        bottom: ${bounds.bottom}px;
        transform: translateY(0);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      false: bounds => css`
        bottom: ${bounds.bottom}px;
        right: ${bounds.right}px;
        transform: translateY(0);
         
      `,
    },
  
    'bottom-left': {
      vertical: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        transform: translateX(0);
         
      `,
      horizontal: bounds => css`
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        bottom: ${bounds.bottom}px;
        transform: translateY(0);
         
      `,
      true: bounds => css`
        top: ${bounds.top}px;
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        right: ${bounds.right}px;
        transform: translateX(0);
         
      `,
      false: bounds => css`
        bottom: ${bounds.bottom}px;
        left: ${bounds.left}px;
        transform: translateY(0);
         
      `,
    },
  };

export const StyledContainer = styled.div`
    display: flex;
    min-height: ${themeGet('sizes.xsmall')};

    outline: none;

    pointer-events: all;
    z-index: ${themeGet('layer.container.zIndex')};

    position: ${props => (props.modal ? 'absolute' : 'fixed')};
    max-height: ${props => `calc(100% - ${getBounds(props.targetBounds, props.margin, props.theme, 'top', )}px - ${getBounds( props.targetBounds, props.margin,props.theme,'bottom',)}px)`};
    max-width: ${props => `calc(100% - ${getBounds( props.targetBounds,props.margin,props.theme,'left',)}px - ${getBounds( props.targetBounds, props.margin, props.theme,'right', )}px)`};
    border-radius: ${props => props.plain ? 0 : themeGet('layer.borderRadius',  0)};
    ${props => ( props.position !== 'hidden' && POSITIONS[props.position][props.full](getBounds(props.targetBounds, props.margin, props.theme), props.targetBounds,)) || ''};
    ${props => {
        const responsiveBreakpoint = themeGet('layer.responsiveBreakpoint', false)(props);
        if(props.responsive && responsiveBreakpoint) {
            return generateMedia(themeGet('breakpoints')(props)).lessThan(responsiveBreakpoint)`
                position: relative;
                max-height: none;
                max-width: none;
                border-radius: 0;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                transform: none;
                animation: none;
                height: 100vh;
                width: 100vw;
            `
        }
    }}

`;
