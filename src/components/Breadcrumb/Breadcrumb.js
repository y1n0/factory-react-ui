
import React, { forwardRef, Children, cloneElement, Fragment } from "react";
import {Box} from '../Box';
import { getVariant, getSystemProps } from "../../core";


export const Breadcrumb = forwardRef(({
    variant='breadcrumb',
    children,
    separator = '/',
    sx,
    ...rest
}, ref)=> {



    const items = Children.toArray(children)
                          .filter(child => child)
                          .map((child, index) => {

        const childrenCount = Children.count(children); 
        const isLastItem = childrenCount === index+1;
    

        const item = cloneElement(child, {
            variant: child.props.variant || variant,
        })

        return (<Fragment key={index}>
            {item}
            {isLastItem || (
                typeof separator === 'string'
                ? 
                (<Box mx="medium">{separator}</Box>)
                :
                (separator)
            )}
        </Fragment>)


        

    })


    return (
        <Box
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