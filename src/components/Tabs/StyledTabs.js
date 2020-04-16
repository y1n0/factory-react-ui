import React from 'react';
import {Box, Flex} from '../Box';



export const StyledTabs = (props) =>  <Box
        {...props}
        variant='tabs.container'
        __css={{
            border: "3px solid red",
            padding: "8px",
            borderColor: "success800"
        }}
    >
        {props.children}
    </Box>

export const StyledTabsHeader = (props) =>
        <Flex {...props} variant='tabs.header.container' >
            {props.children}
        </Flex>