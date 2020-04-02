import React, { useState } from 'react';
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



const StyledPassword = styled.div`
    display:flex;
    width: fit-content;
    position: relative;
    > button {
        position: absolute;
        display: block;
        right: 0;
        bottom: 0;
        top: 0;
        width: 30px;
        background: transparent;
        padding: ${props => props.theme.inputs.sizes[props.size].paddingX || '12px'};
        border: none;
        &:focus,
        &:active,
        &:hover {
            outline: none;
        }
    }

    > input {
        padding-right: 30px;
    }

    ${width}
`;

StyledPassword.defaultProps = {
    size: 'medium'
}

export const Password = ({width, size, ...props}) => {

    const [isPasswordVisible, setPasswordVisible] = useState(false);

    return (
        <StyledPassword width={width} size={size}>
            <Input width={width} size={size} onChange={props.onChange} type={isPasswordVisible? 'text' : 'password'} {...props} />
            <button onClick={() => setPasswordVisible(!isPasswordVisible)}>{isPasswordVisible? 'H' : 'S'}</button>
        </StyledPassword>
    )
}


export default Input;