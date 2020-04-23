
import React, { forwardRef, Children, cloneElement, Fragment } from "react";
import { props as systemProps } from '@styled-system/should-forward-prop';
import {Box, Flex} from '../Box';

const Props = [
    ...systemProps,
    'sx',
];

const PRE = new RegExp(`^(${Props.join('|')})$`);
const getProps = (test) => (props) => {
  const next = {}
  for (const key in props) {
    if (test(key || '')) next[key] = props[key]
  }
  return next
}
const getSystemProps = getProps(k => PRE.test(k));


// TODO : refactor utils
const variantReducer = (accumulator, currentValue) => currentValue ? accumulator + '.' + currentValue : accumulator;
const getVariant = (variant = []) => {
    if (typeof variant === 'string') {
        return variant
    }
    return variant.reduce(variantReducer)
}


export const Breadcrumb = forwardRef(({
    variant,
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
            variant={getVariant(['breadcrumb', variant])}
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