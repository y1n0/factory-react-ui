import React from 'react';
import {Box, Flex} from '../Box';



const flexDirectionByPosition = position => {
    if( position === 'start' || position === 'end' ) {
        return 'row';
    } else {
        return 'column';
    }
}

export const StyledTabs = ({position, ...props}) =>  <Box
        {...props}
        variant='tabs.container'
        __css={{
            display: 'flex',
            flexDirection: flexDirectionByPosition(position)
        }}
    >
        {props.children}
    </Box>

export const StyledTabsHeader = (props) =>
        <Flex {...props} variant='tabs.header.container' >
            {props.children}
        </Flex>


export const StyledTabsContent = (props) => <Box
        {...props}
        variant='tabs.content.container'
    >
        {props.children}
    </Box>
