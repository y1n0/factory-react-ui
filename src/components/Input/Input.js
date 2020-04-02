import styled from 'styled-components';
import { space, color, typography, background, border, position, shadow, variant, compose, width, height, display } from 'styled-system';

const custtomStyledLayout = compose(
    width,
    height,
    display,
);

const styledSystem = compose(
    space,
    color,
    typography,
    background,
    border,
    position,
    shadow,
    custtomStyledLayout,
);



const Input = styled.input`
    display: block;
    padding: 2px;
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    border: 1px solid;
    color: inherit;
    background: transparent;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px;
    }

    ${styledSystem}

    ${variant({
        scale: 'inputs.variants',
        prop: 'variant',
        variants: {
            primary: {

            }
        }
    })}

    ${variant({
        scale: 'inputs.status',
        prop: 'status',
        variants: {
            primary: {

            }
        }
    })}
    ${variant({
        scale: 'inputs.sizes',
        prop: 'size',
        variants: {
            medium: {
                padding: 'xsmall',
                fontSize: '16px',
                lineHeight: '24px'
            }
        }
    })}
`;

Input.defaultProps = {
    type: 'text',
    variant: 'default',
    size: 'medium'
}


export default Input;