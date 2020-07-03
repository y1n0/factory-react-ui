import React from 'react';
import {Box} from '../../components';

export const Anchor = React.forwardRef(({
        variant = "anchor.default",
        ...rest
    }, ref) => {

    return <Box as="a" ref={ref}  variant={variant} {...rest} __css={{
        boxSizing: 'border-box',
        cursor: 'pointer',
        outline: 'none',
        fontSize: 'inherit',
        lineHeight: 'inherit',
        color: 'inherit',
        textDecoration: 'none',

    }}
        className="vf-anchor"
    />

});