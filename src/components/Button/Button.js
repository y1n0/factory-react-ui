import styled from "styled-components";
import { flexbox, color, space, typography, compose, background, position, shadow, border, variant, buttonStyle, width, height, display } from "styled-system";


const fillVariants = variant({
    scale: 'buttons.fill',
    prop: 'fill',
    variants: {
        primary: {
        }
    }
});

const sizeVariants = variant({
    scale: 'buttons.size',
    prop: 'size',
    variants: {
        medium: {
        }
    }
});

const outlineVariants = variant({
    scale: 'buttons.outline',
    prop: 'outline',
    variants: {
        primary: {
        }
    }
})


 export const Button = styled.div`

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
    
    ${fillVariants}
    ${outlineVariants}
    ${sizeVariants}

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

    ${buttonStyle}

    &:disabled {
       cursor: not-allowed;
       pointer-events: all !important;
    }
    ${props => props.sx}

`;

Button.defaultProps = {
    fill: 'primary',
    size: 'medium',
    borderRadius: 'small'
}
export default Button;
