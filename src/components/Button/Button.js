import styled from "styled-components";
import { css } from "@styled-system/css";
import { flexbox, color, space, typography, compose, background, position, shadow, border, variant as StyledVariant, buttonStyle, width, height, display } from "styled-system";
import { sx, base, variant } from "../../core";

import { props as systemProps } from '@styled-system/should-forward-prop';

const fillVariants = StyledVariant({
    scale: 'buttons.fill',
    prop: 'fill',
    variants: {
        primary: {
        }
    }
});

const sizeVariants = StyledVariant({
    scale: 'buttons.size',
    prop: 'size',
    variants: {
        medium: {
        }
    }
});

const outlineVariants = StyledVariant({
    scale: 'buttons.outline',
    prop: 'outline',
    variants: {
        primary: {
        }
    }
})


 export const Button = styled('button').withConfig({
    shouldForwardProp: (prop, defaultValidatorFn) => { return defaultValidatorFn(prop) && ![...systemProps, "fill", "outline"].includes(prop);}
  })`

    display: inline-flex;
    align-items: center;
    flex-direction: row;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font: inherit;
    text-decoration: none;
    margin: 0;
    background: transparent;
    overflow: visible;
    text-transform: none;
    border-style: solid;
    ${css({
        borderRadius: 'small'
    })}

    ${ ({stretch}) => stretch && {
            '&::after': {
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                zIndex: 1,
                pointerEvents: 'auto',
                content: '""',
                backgroundColor: '#0000',
            },
        }
    }
    
    ${buttonStyle}
    ${fillVariants}
    ${outlineVariants}
    ${sizeVariants}
    ${variant}
    ${base}
    ${sx}
    ${compose(
        width,
        height,
        display,
        space,
        color,
        typography,
        flexbox,
        background,
        border,
        position,
        shadow
    )}


    &:disabled {
       cursor: not-allowed;
       pointer-events: all;
    }

`;

Button.defaultProps = {
    fill: 'primary',
    size: 'medium',
}
export default Button;
