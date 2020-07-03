import React from 'react';
import {Box} from '../../components';


export const CardVariant1 = ({
    children,
    variant = 'card.variant1',
    ...rest
}) => {


    return <Box __css={{

    }} className="vf-card" variant={variant} {...rest}>
        {children}
    </Box>
}