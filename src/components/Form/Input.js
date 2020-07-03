import React from 'react';
import styled  from 'styled-components';
import { color, typography, background, border, position, shadow, variant as StyledVariant, compose, width, height, display, padding } from 'styled-system';

import { sx, variant, getLayoutProps, getMarginProps } from "../../core";
import { Flex } from '../Box';

const variantVariants = StyledVariant({
    scale: 'inputs.variants',
    prop: 'variant',
    variants: {
        primary: {

        }
    }
});
const variantStatus = StyledVariant({
    scale: 'inputs.status',
    prop: 'status',
    variants: {
        primary: {

        }
    }
});

const variantSizes = StyledVariant({
    scale: 'inputs.sizes',
    prop: 'size',
    variants: {
        medium: {
            padding: 'xsmall',
            fontSize: '16px',
            lineHeight: '24px'
        }
    }
});


const StyledInput = styled.input`
    display: block;
    padding: 2px;
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    border: 1px solid;
    color: inherit;
    background: transparent;
    width: auto;
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px;
    }

    ${variantVariants}
    ${variantStatus}
    ${variantSizes}


    ${variant}
    ${sx}
    ${compose(
        padding,
        color,
        typography,
        background,
        border,
        position,
        shadow,
        width,
        height,
        display,
    )}
`;

StyledInput.defaultProps = {
    type: 'text',
    variant: 'default',
    size: 'medium'
}


export const Input  = React.forwardRef(({as,size,reverse,  ...props}, ref) => {


    return (
        <Flex __css={{
            position: 'relative',
            width: 'fit-content'
        }} {...getMarginProps(props)}  {...getLayoutProps(props)}  >
            {props.icon && 

                    <Flex
                        __css={{
                            color:'inherit',
                            position: 'absolute',
                            width: 'auto',
                            alignItems: 'center',
                            justifyContent: 'center',
                            top:0,
                            bottom: 0,
                            right: reverse ? 0 : null,
                            left: reverse ? null : 0,
                        }}>
                        {props.icon}
                    </Flex>
            }
            <StyledInput as={as} reverse={reverse} size={size} {...props} ref={ref} />
        </Flex>

    );
})

Input.defaultProps = {
    as: 'input',
    type: 'text',
    variant: 'default',
    size: 'medium'
}


export default Input;