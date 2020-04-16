import React from 'react';
import { Box } from '../Box';
import { StyledTab } from "./StyledTab";


export const Tab = (
    {
        index,
        isActive,
        onClickTab,
        ...props}
    ) => {
    const handleOnClickTab = event => {

        if (event) {
          event.preventDefault();
        }
        onClickTab();
      };
    return (
        <Box
            {...props}
            variant={isActive ? 'tabs.header.item.active' : 'tabs.header.item'}
            __css={{
                border: "2px solid red",
                borderColor: "warning500",
                cursor: 'pointer',
                fontWeight: isActive ? 800 : 200, 
                padding: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                "&:focus, &:active": {
                    outline: 'none'
                }
            }}
            onClick={handleOnClickTab}
        >
                {props.title}
        </Box>
    )
}