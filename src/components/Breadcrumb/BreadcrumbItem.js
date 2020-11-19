
import React from "react";
import { Box } from '../Box';
import { getVariant } from "../../core";

export const BreadcrumbItem = React.forwardRef(({
    variant='breadcrumb.default',
    children,
    href,
    active,
    as = 'a',
    key,
    ...rest
}, ref) => {
    
    return (
        <Box.WithoutConfig
            className={`vf-breadcrumb__item ${active && 'vf-breadcrumb__item--active'}`}
            as={as}
            ref={ref}
            href={href}
            variant={getVariant([variant, 'item', active && 'active'])}
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
        </Box.WithoutConfig>
    );


});