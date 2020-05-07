import React from 'react';
import { Box } from '../Box';
import { getVariant } from '../../core';
import Headroom from 'react-headroom';


export const Header = ({ sticky = false, variant = 'header', ...props }) => {

    const Wrapper = sticky ? Headroom : React.Fragment;
    return (
        <Wrapper>
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
        </Wrapper>

    )
}