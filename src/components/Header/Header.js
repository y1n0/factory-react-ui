import React from 'react';
import { Box } from '../Box';
import { getVariant } from '../../core';
import Headroom from 'react-headroom';

export const Header = React.forwardRef(({
    fixed = false,
    sticky = false,
    variant = 'header',
    children,
    ...rest }, ref) => {

    let fixedStyle = {};
    if (fixed) {
        fixedStyle = {
            position: 'fixed',
            top: '0px',
            left: '0px',
            right: '0px',
        }
    }
    const Wrapper = sticky ? Headroom : 'div';
    return (
        <Wrapper style={{
            zIndex: 10
        }}>
            <Box
                ref={ref}
                as='header'
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
                    ...fixedStyle
                }}
                {...rest}
            >
                {children}
            </Box>
        </Wrapper>

    );
});