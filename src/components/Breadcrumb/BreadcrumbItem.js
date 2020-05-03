
import React, { forwardRef, useContext } from "react";
import { Box } from '../Box';
import { get } from '@styled-system/css';
import { ThemeContext } from "styled-components";
import { getVariant, getSystemProps } from "../../core";



export const BreadcrumbItem = forwardRef(({
    variant='breadcrumb',
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
        isActiveStyle = get(theme, getVariant([variant, 'activeItem']))
    }
    return (
        <Box
            as={as}
            ref={ref}
            href={href}
            {...getSystemProps(rest)}
            variant={getVariant([variant, 'item'])}
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