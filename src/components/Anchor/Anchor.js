
import styled from 'styled-components';
import { color, space, typography, compose, position, variant as StyledVariant, system } from "styled-system";
import { sx, variant } from "../../core/utils";

const outlineVariants = StyledVariant({
    scale: 'buttons.outline',
    prop: 'outline',
    variants: {
        primary: {
        }
    }
})
const Anchor = styled.a`
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    font-size: inherit;
    line-height: inherit;
    color: inherit;
    text-decoration: none;

    ${system({
        prop: 'textDecoration',
        cssProperty: 'textDecoration',
        scale: 'textDecoration',
        defaultScale: ['inherit']
    })}
    ${outlineVariants}
    ${variant}
    ${sx}
    ${compose(
        space,
        color,
        typography,
        position
    )}
`;


Anchor.defaultProps = {
}

export { Anchor };