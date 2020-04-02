import React from 'react';
import styled from 'styled-components';
import { color, space, typography, compose, position, variant, system} from "styled-system";


const styledSystem = compose(
    space,
    color,
    typography,
    position
);

const textDecoration = system({
    prop: 'textDecoration',
    cssProperty: 'textDecoration',
    scale: 'textDecoration',
    defaultScale: ['inherit']
})

const Anchor = styled.a`
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    text-decoration: none;

    ${styledSystem}

    ${textDecoration}

    ${variant({
        scale: 'anchors.variants',
        prop: 'variant',
        variants: {
            primary: {
            }
        }
    })}

`;


Anchor.defaultProps = {
}

export {Anchor};