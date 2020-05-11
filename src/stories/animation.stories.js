import React from 'react';
import { Box, ParallaxBox } from '../components';

export const Parallax = () => {


    return (<Box height="200vh">
        <Box bg='gray200' height="90px" p="large" border="2px solid" borderColor="gray500" >
        </Box>

        <ParallaxBox sx={{
            width: '200px',
            height: '300px',
            color: 'white',
            alignItems: 'center',
            fontSize: '52px',
            justifyContent: 'center',
            backgroundColor: 'primary500'
        }} >1</ParallaxBox>

        <Box bg='gray200'p="large" border="2px solid" borderColor="gray500" >
            <ParallaxBox  sx={{
                width: '100%',
                height: '150px',
                alignItems: 'center',
                fontSize: '52px',
                justifyContent: 'center',
                color: 'white',
                backgroundColor: 'success300'
            }} >2</ParallaxBox>
        </Box>
    </Box>)
}


export default {
    title: 'Animation',
};