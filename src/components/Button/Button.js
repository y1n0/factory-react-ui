import styled, { css } from "styled-components";
import {  flexbox, color, space, typography, compose, background, position, shadow, border, variant, buttonStyle, width, height, display, minWidth, maxWidth } from "styled-system";


const custtomStyledLayout = compose(
    width,
    height,
    display,
)

const styledSystem = compose(
    display,
    space,
    color,
    typography,
    custtomStyledLayout,
    flexbox,
    background,
    border,
    position,
    shadow
);


 const Button = styled.button`

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

    

    ${variant({
        scale: 'buttons.variants',
        prop: 'variant',
        variants: {
            primary: {

            }
        }
    })}
    ${variant({
        scale: 'buttons.sizes',
        prop: 'size',
        variants: {
            medium: {
                paddingTop: 'xxsmall',
                paddingBottom: 'xxsmall',
                paddingLeft: 'large',
                paddingRight: 'large',
                fontSize: '16px',
                lineHeight: '24px'
            }
        }
    })}

    ${variant({
        scale: 'buttons.outline',
        prop: 'outline',
        variants: {
            primary: {
            }
        }
    })}

    ${styledSystem}

    ${buttonStyle}

    &:disabled {
       cursor: not-allowed;
       pointer-events: all !important;
    }
    ${props => props.sx}

`;

Button.defaultProps = {
    variant: 'primary',
    size: 'medium',
    borderRadius: 'small'
}

export default Button;
