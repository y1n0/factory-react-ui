import React, { forwardRef } from 'react';
import { Box } from '../Box';

// TODO : refactor utils
const variantReducer = (accumulator, currentValue) => currentValue ? accumulator + '.' + currentValue : accumulator;
const getVariant = (variant = []) => {
    if (typeof variant === 'string') {
        return variant
    }
    return variant.reduce(variantReducer)
}


export const Tab = forwardRef((
    {   title,
        index,
        isActive,
        onClickTab,
        variant,
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
            variant={getVariant(['tabs', variant, isActive ? 'activeTab' : 'tab'])}
            __css={{
                cursor: 'pointer',
                padding: 0,
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