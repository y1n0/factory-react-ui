import React from 'react';
import {Flex} from '../Box';


export const Footer = (props) => {
    return (
        <Flex
            {...props}
            as='footer'
            cmpt='footer'
            variant={props.variant}
            sx={{
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
        }</Flex>
    )
}