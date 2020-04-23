
import React, { forwardRef, Children, useContext } from "react";
import { props as systemProps } from '@styled-system/should-forward-prop';
import { Box, Flex } from '../Box';
import css, { get } from '@styled-system/css';
import { ThemeContext } from "styled-components";


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


export const BreadcrumbItem = forwardRef(({
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
        isActiveStyle = get(theme, getVariant(['breadcrumb', variant, 'activeItem']))
    }
    return (
        <Box
            as={as}
            ref={ref}
            href={href}
            {...getSystemProps(rest)}
            variant={getVariant(['breadcrumb', variant, 'item'])}
            __css={{
                color: active ? 'gray900' : 'primary500',
                textDecoration: 'none',
                ':hover': {
                    cursor: 'pointer',
                    color: active ? 'gray900' : 'primary700',
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