import React from 'react';
import {Box} from '../Box';


export const Header = ({variant, ...props}) => {
    return (
        <Box
            {...props}
            as='header'
            variant={`header${variant ? '.'+variant : ''}`}
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