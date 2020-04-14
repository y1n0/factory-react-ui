import React, { forwardRef } from 'react';
import { Box, Flex } from '../Box';
import { props as systemProps } from '@styled-system/should-forward-prop';
import { Icon } from '../Icon';




// TODO: Refactor
const MRE = /^m[trblxy]?$/;
const getProps = (test) => (props) => {
    const next = {}
    for (const key in props) {
        if (test(key || '')) next[key] = props[key]
    }
    return next
}
const getMarginProps = getProps(k => MRE.test(k));
const omitMarginProps = getProps(k => !MRE.test(k));

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


const SelectIcon = ({icon} )=>{
    console.log('Select Icon icon: ', icon);
    return <Box
                sx={{
                    ml: -28,
                    alignSelf: 'center',
                    pointerEvents: 'none',
                }}
            >
                {icon || <DownArrow />}
            </Box>;
};

export const Select = forwardRef(({ variant, ...props }, ref) =>
    <Flex {...getMarginProps(props)}>
        <Box
            ref={ref}
            as='select'
            variant={`select${variant ? '.'+variant : ''}`}
            {...omitMarginProps(props)}
            __css={{
                display: 'block',
                width: '100%',
                p: 'small',
                appearance: 'none',
                fontSize: 'inherit',
                lineHeight: 'inherit',
                border: '1px solid gray500',
                borderRadius: 'medium',
                color: 'inherit',
                bg: 'transparent',
                ':focus': {
                    borderColor: 'primary500',
                    outline: 'none',
                    boxShadow: t => `0 0 0 2px ${t.colors.primary500}`,
                }
            }}
        />
        <SelectIcon {...props}/>
        
    </Flex>);