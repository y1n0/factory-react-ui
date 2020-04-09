import React from 'react';

import {Header} from './Header';
import {Box, Flex} from '../Box';
import {Text} from '../Typography';

export const Simple = () => {


    return (
        <Box>
            <Header p="large" bg="white" boxShadow={1}>
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">LOGO</Text>
            </Header>
            <Box py="150px" bg="gray200" px="32px">Page Content</Box>
        </Box>);
}


export default {
    title: 'Header'
}