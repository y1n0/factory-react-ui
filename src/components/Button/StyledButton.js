import styled from "styled-components";
import { layout, flexbox, color, space, typography, compose, background, position, shadow, border, variant } from "styled-system";
import css from '@styled-system/css';

const styledSystem = compose(
    space,
    color,
    typography,
    layout,
    flexbox,
    background,
    border,
    position,
    shadow
);



export const StyledButton = styled.button`

    display: inline-block;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font: inherit;
    text-decoration: none;
    margin: 0;
    background: transparent;
    overflow: visible;
    text-transform: none;


    ${styledSystem}

    ${variant({
        scale: 'buttons',
        prop: 'variant'
    })}

    ${props => props.sx &&  props.sx}

`;
