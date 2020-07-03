
import React from "react";
import { Box } from '../Box';

export const BreadcrumbItem = React.forwardRef(({
    variant='breadcrumb',
    children,
    href,
    active,
    as = 'a',
    key,
    ...rest
}, ref) => {
    
    return (
        <Box
            className={`vf-breadcrumb__item ${active && 'vf-breadcrumb__item--active'}`}
            as={as}
            ref={ref}
            href={href}
            {...rest}
            __css={{
                color: active ? 'gray900' : 'primary500',
                textDecoration: 'none',
                ':hover': {
                    cursor: 'pointer',
                    color: active ? 'gray900' : 'primary700',
                },
            }}
            {...rest}
        >
            {children}
        </Box>
    );


});