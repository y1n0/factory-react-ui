import styled from "styled-components";
import { flexbox, color, space, typography, compose, background, position, shadow, border, variant as StyledVariant, buttonStyle, width, height, display } from "styled-system";
import { sx, base, variant } from "../../core";


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


 export const Button = styled.button`

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
       pointer-events: all !important;
    }

`;

Button.defaultProps = {
    fill: 'primary',
    size: 'medium',
    borderRadius: 'small'
}
export default Button;
