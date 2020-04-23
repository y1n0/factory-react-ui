import React, { forwardRef, useContext } from 'react';
import { Box } from '../Box';
import { props as systemProps } from '@styled-system/should-forward-prop';
import { ThemeContext } from "styled-components";
import css, { get } from '@styled-system/css';



const Props = [
    ...systemProps,
    'sx',
];

const PRE = new RegExp(`^(${Props.join('|')})$`);
const getProps = (test) => (props) => {
    const next = {}
    for (const key in props) {
        if (test(key || '')) next[key] = props[key]
    }
    return next
}
const getSystemProps = getProps(k => PRE.test(k));


// TODO : refactor utils
const variantReducer = (accumulator, currentValue) => currentValue ? accumulator + '.' + currentValue : accumulator;
const getVariant = (variant = []) => {
    if (typeof variant === 'string') {
        return variant
    }
    return variant.reduce(variantReducer)
}


export const Nav = forwardRef(({
    variant,
    children,
    href,
    active,
    as = 'a',
    sx,
    key,
    ...rest
}, ref) => {

    let isActiveStyle = null;
    if (active) {
        const theme = useContext(ThemeContext);
        console.log('isActive yes', variant);
        isActiveStyle = get(theme, getVariant(['navs', variant, 'activeNav']));

        console.log('isActive yes', isActiveStyle);
    }
    return (
        <Box
            as={as}
            ref={ref}
            href={href}
            {...getSystemProps(rest)}
            variant={getVariant(['navs', variant, 'nav'])}
            __css={{
                color: 'primary500',
                textDecoration: 'none',
                // border: '1px solid',
                padding: '12px',
                ':hover': {
                    cursor: 'pointer',
                    color: 'primary700',
                },
            }}
            sx={{
                ...isActiveStyle,
                ...sx,
            }}
        >
            {children}
        </Box>
    );


});