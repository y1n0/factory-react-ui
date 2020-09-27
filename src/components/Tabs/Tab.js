import React, { forwardRef } from 'react';
import { Box } from '../Box';
import { getVariant } from '../../core';

export const Tab = forwardRef((
    {   title,
        index,
        isActive,
        onClickTab,
        variant = 'tabs',
        header,
        sx,
        ...props
    },
    ref
) => {
    
    const handleOnClickTab = event => {
        if (event) {
            event.preventDefault();
        }
        onClickTab();
    };

    return (
        <Box
            ref={ref}
            {...props}
            sx={sx}
            variant={getVariant([variant, isActive ? 'activeTab' : 'tab'])}
            className={`vf-tabs__tab ${isActive ? 'vf-tabs__tab--active' : ''}`}
            __css={{
                cursor: 'pointer',
                margin: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                backgroundColor: isActive ? 'gray400' : 'gray100', 
                padding: 'medium',
                "&:focus, &:active": {
                    outline: 'none'
                }
            }}
            onClick={handleOnClickTab}
        >
            {title}
        </Box>
    );
})