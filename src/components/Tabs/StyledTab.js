

import React from 'react';
import {Box, Flex} from '../Box';



export const StyledTab = (props) => {

    return  (
    <Box
        {...props}
        sx={{
            border: "2px solid red",
            borderColor: "danger800",
            padding: '8px',
        }}
    >
        {props.children}
    </Box>
    )
}