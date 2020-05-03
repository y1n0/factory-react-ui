import React, { forwardRef, useContext } from 'react';
import { Box } from '../Box';
import { ThemeContext } from "styled-components";
import  { get } from '@styled-system/css';
import { getSystemProps, getVariant } from '../../core';



export const Nav = forwardRef(({
    variant = 'navs',
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
        isActiveStyle = get(theme, getVariant([variant, 'activeNav']));

    }
    return (
        <Box
            as={as}
            ref={ref}
            href={href}
            {...getSystemProps(rest)}
            variant={getVariant([variant, 'nav'])}
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