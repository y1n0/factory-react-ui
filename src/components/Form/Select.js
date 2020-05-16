import React, { forwardRef, useRef } from 'react';
import { Box, Flex } from '../Box';
import { getMarginProps, omitMarginProps, getLayoutProps } from '../../core';


const SVG = ({ size = 24, ...props }) =>
    <Box
        as='svg'
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill='currentcolor'
        {...props}
    />

const DownArrow = props =>
    <SVG {...props}>
        <path d="M7 10l5 5 5-5z" />
    </SVG>


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

const Select = forwardRef(({ variant, ...props }, ref) => {

    const selectRef = ref || useRef();

    const handleOnChange = (ev) => {
        const value = selectRef.current.value;
        props.onChange(value);
    }
    return <Flex {...getMarginProps(props)} {...getLayoutProps(props)} __css={{ width: 'fit-content',
    position: 'relative' }}>
        <Box
            ref={selectRef}
            as='select'
            variant={`select${variant ? '.' + variant : ''}`}
            {...omitMarginProps(props)}
            onChange={handleOnChange}
            __css={{
                display: 'block',
                width: 'auto',
                p: 'small',
                appearance: 'none',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                border: '1px solid gray500',
                borderRadius: 'medium',
                color: 'inherit',
                pr: '32px',
                bg: 'transparent',
                ':focus': {
                    borderColor: 'primary500',
                    outline: 'none',
                    boxShadow: t => `0 0 0 2px ${t.colors.primary500}`,
                }
            }}
        />
        <SelectIcon {...props} />

    </Flex>
});

Select.Option = ({ children, ...props }) => <option {...props}>{children}</option>;

export { Select };