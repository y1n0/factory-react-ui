import React from 'react';
import { Box } from '../Box';
import {  getVariant } from '../../core';



export const Nav = React.forwardRef(({
    variant = 'navs',
    children,
    href,
    active = false,
    as = 'a',
    key,
    ...rest
}, ref) => {

    console.warn("Deprecation Warning: this component should no longer be used. ",
                 "Use the List/Item Instead");
    console.groupCollapsed("View warning trace");
    console.trace("The above warning was raised in: ");
    console.groupEnd();

    return (
        <Box
            as={as}
            ref={ref}
            href={href}
            {...rest}
            variant={getVariant([variant, active ? 'activeNav' :'nav'])}
            __css={{
                color: 'primary500',
                textDecoration: 'none',
                padding: '12px',
                ':hover': {
                    cursor: 'pointer',
                    color: 'primary700',
                },
            }}
            {...rest}
        >
            {children}
        </Box>
    );


});