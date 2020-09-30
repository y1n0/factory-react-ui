import React from 'react';
import {Box} from '../Box';
import { getVariant } from '../../core';


export const Footer = ({variant='footer',children,  ...rest}) => {
    return (
        <Box
            as='footer'
            variant={getVariant([variant])}
            __css={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '100%',
                minWidth: '0px',
                minHeight: '0px',
                outline: 'none',
            }}
            {...rest}
        >
                {children}
        </Box>
    )
}