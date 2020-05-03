
import React, { forwardRef, Children, cloneElement, Fragment } from "react";
import {Box, } from '../Box';
import { getSystemProps } from "../../core";

export const Navs = forwardRef(({
    variant= "navs",
    children,
    sx,
    ...rest
}, ref)=> {

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
                flexDirection: ['column' , 'row']
            }}
        >
                {navs}
        </Box>
    );


});