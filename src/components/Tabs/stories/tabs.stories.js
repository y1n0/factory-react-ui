import React from 'react';
import { Box } from '../../Box';


import {Tabs} from '../Tabs';
import {Tab} from '../Tab';


export const Simple= () => {
    
    return (
        <Box >
            <Tabs>
                <Tab title="tab1"><Box p="large" borderTop="1px solid" borderColor="gray500">Content tab 1</Box></Tab>
                <Tab title="tab2"><Box p="large" borderTop="1px solid" borderColor="gray500">Content tab 2</Box></Tab>
                <Tab title="tab3"><Box p="large" borderTop="1px solid" borderColor="gray500">Content tab 3</Box></Tab>
            </Tabs>
        </Box>
    )
}

export const CardType= () => {
    
    return (
        <Box >
            <Tabs m="large" variant="cardType" >
                <Tab title="tab1">
                    <Box>Content tab 1</Box>
                </Tab>
                <Tab title="tab2">
                    <Box>Content tab 2</Box>
                </Tab>
                <Tab title="tab3">
                    <Box>Content tab 3</Box>
                </Tab>
            </Tabs>
        </Box>
    )
}

export const CardContainerType= () => {
    
    return (
        <Box bg="gray300" p="large">
            <Tabs m="large" variant="cardContainerType">
                <Tab title="tab1">
                    <Box>Content tab 1</Box>
                </Tab>
                <Tab title="tab2">
                    <Box>Content tab 2</Box>
                </Tab>
                <Tab title="tab3">
                    <Box>Content tab 3</Box>
                </Tab>
            </Tabs>
        </Box>
    )
}

export default {
    title: 'Components/Tabs',
};