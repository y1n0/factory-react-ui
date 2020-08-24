
import React, { forwardRef, Children, cloneElement, Fragment } from "react";
import { Box } from '../Box';
import { getVariant, getSystemProps } from "../../core";



const renderBreadcrumbItems = (children, variant, separator) => Children.toArray(children)
    .filter(child => child)
    .map((child, index) => {

        const childrenCount = Children.count(children);
        const isLastItem = childrenCount === index + 1;

        return (<Fragment key={index}>
            {child}
            {isLastItem || (
                typeof separator === 'string'
                    ?
                    (<Box mx="medium" variant={getVariant([variant, 'separator'])} className="vf-breadcrumb__separator">{separator}</Box>)
                    :
                    cloneElement(separator, { className: 'vf-breadcrumb__separator', variant: getVariant([variant, 'separator']) })
            )}
        </Fragment>);
    })

export const Breadcrumb = forwardRef(({
    variant = 'breadcrumb.default',
    children,
    separator = '/',
    sx,
    ...rest
}, ref) => {

    const items = renderBreadcrumbItems(children, variant, separator);

    return (
        <Box
            className="vf-breadcrumb"
            ref={ref}
            sx={sx}
            {...getSystemProps(rest)}
            variant={getVariant([variant])}
            __css={{
                padding: 'small',
                backgroundColor: 'gray200',
                display: 'flex',
                color: 'primary500',
                alignItems: 'center',
            }}
        >
            {items}
        </Box>
    );


});