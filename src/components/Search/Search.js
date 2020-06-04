import React from 'react';
import ReactDOM  from 'react-dom';
import {Box} from '../Box';

const SearchOverlayContainer = ({children, open = false, ...rest}) => open ? ReactDOM.createPortal(
    <Box __css={{
        position: 'fixed',
        top: 0,
        left: 0,
        width:  '100%',
        height: '100%',
        zIndex: 9999,
        opacity: open ? 1 : 0 ,
        visible : open ? 'visible' : 'hidden',
        backgroundColor: 'gray100',
    
    }} {...rest}>
        {children}
    </Box>,
    document.body
) : null;



export const SearchOverlay = ({
    open = false,
    children,
    ...rest
}) => {


    return (<SearchOverlayContainer open={open} >
       {children}
    </SearchOverlayContainer>);
}