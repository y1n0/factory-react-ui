
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


export const Navs = forwardRef(({
    variant,
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
            variant={getVariant(['navs', variant])}
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