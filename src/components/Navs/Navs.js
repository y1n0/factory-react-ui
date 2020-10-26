
import React, { forwardRef, Children, cloneElement, Fragment } from "react";
import {Box, } from '../Box';
import { getSystemProps } from "../../core";

export const Navs = forwardRef(({
    variant= "navs",
    children,
    sx,
    ...rest
}, ref)=> {

    console.warn("Deprecation Warning: this component should no longer be used. ",
                 "Use the List/Item instead");
    console.groupCollapsed("View warning trace");
    console.trace("The above warning was raised in: ");
    console.groupEnd();

    const navs = Children.toArray(children)
                          .filter(child => child)
                          .map((child, index) => {

        const nav = cloneElement(child, {
            variant: child.props.variant || variant,
        })

        return (<Fragment key={index}>
            {nav}
        </Fragment>)
    })


    return (
        <Box
            ref={ref}
            sx={sx}
            {...getSystemProps(rest)}
            variant={variant}
            __css={{
                padding: 'small',
                display: 'flex',
                alignItems: 'center',
                // TODO unset this
                flexDirection: ['column' , 'row']
            }}
        >
                {navs}
        </Box>
    );


});