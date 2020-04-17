import React from 'react';
import { Box } from '../Box';


export const Tab = (
    {
        title,
        index,
        isActive,
        onClickTab,
        ...props}
    ) => {

    let normalizedTitle = title;

    const handleOnClickTab = event => {
        if (event) {
          event.preventDefault();
        }
        onClickTab();
    };
    
    return (
        <Box
            {...props}
            variant={isActive ? 'tabs.header.activeItem' : 'tabs.header.item'}
            __css={{
                cursor: 'pointer',
                padding: 0,
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                "&:focus, &:active": {
                    outline: 'none'
                }
            }}
            onClick={handleOnClickTab}
        >
                {normalizedTitle}
        </Box>
    )
}