import React, { forwardRef, useRef } from 'react';
import styled, {css} from 'styled-components';
import {variant} from 'styled-system';
import { Box, Flex } from '../Box';
import { getMarginProps, omitMarginProps, getLayoutProps } from '../../core';


const DownArrow = ({size = 24, ...rest}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill='currentcolor'
    >
        <path d="M7 10l5 5 5-5z" />
    </svg>
)


const SelectIcon = ({ icon }) => {
    return <Flex
        sx={{
            ml: -28,
            alignSelf: 'center',
            alignItems: 'center',
            pointerEvents: 'none',
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,

        }}
    >
        {icon || <DownArrow />}
    </Flex>;
};

const StyledSelectBox = styled(Box)(
    variant({
        prop: 'state',
        scale: 'select.states',
        variants: {
            default: {
                borderColor: 'primary',
                ':focus': {
                    boxShadow: css`${t => `0 0 0 2px ${t.colors.primary}`}`,
                },  
            },
            danger: {
                borderColor: 'danger',
                ':hover,:active': {
                    boxShadow: css`${t => `0 0 0 2px ${t.colors.danger}`}`,
                },
            },
            success: {
                borderColor: 'success',
                ':hover,:active': {
                    boxShadow: css`${t => `0 0 0 2px ${t.colors.success}`}`,
                }
            },
            info: {
                borderColor: 'info',
                ':hover,:active': {
                    boxShadow: css`${t => `0 0 0 2px ${t.colors.info}`}`,
                }
            },
        }
    })
);

const Select = forwardRef(({ variant, children, options, ...props }, ref) => {

    const selectRef = ref || useRef();

    return <Flex {...getMarginProps(props)} {...getLayoutProps(props)} __css={{ width: 'fit-content',
    position: 'relative' }}>
        <StyledSelectBox
            ref={selectRef}
            as='select'
            variant={`select${variant ? '.' + variant : ''}`}
            {...omitMarginProps(props)}
            __css={{
                display: 'block',
                width: 'auto',
                p: 'small',
                appearance: 'none',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                border: '1px solid',
                borderColor: 'gray500',
                borderRadius: 'medium',
                color: 'inherit',
                pr: '32px',
                bg: 'transparent',
                ':focus': {
                    outline: 'none',
                }
            }} >

            { options
                ? Object.entries(options).map( ([option, attrs], i) => (
                    <option key={i} {...attrs}>{option}</option>
                ) )
                : children
            }

        </StyledSelectBox>
        <SelectIcon />

    </Flex>
});

Select.Option = ({ children, ...props }) => <option {...props}>{children}</option>;

export { Select };