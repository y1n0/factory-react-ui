import React from 'react';
import {Box} from '../Box';
import { getVariant } from '../../core/utils';


export const Header = ({variant='header', ...props}) => {
    return (
        <Box
            {...props}
            as='header'
            variant={getVariant([variant])}
            sx={{
                display: 'flex',
                position: 'relative',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                maxWidth: '100%',
                minWidth: '0px',
                minHeight: '0px',
                outline: 'none',
                ...props.sx
            }}
        >
                {props.children
        }</Box>
    )
}