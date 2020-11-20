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

    return (
        <Box.WithoutConfig
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
        </Box.WithoutConfig>
    );


});