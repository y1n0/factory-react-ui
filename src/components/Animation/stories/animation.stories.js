import React from 'react';
import { ParallaxBox } from '../ParallaxBox';
import { RevealBox } from '../RevealBox';
import { Box, Flex } from '../../Box';

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

        <Box bg='gray200' p="large" border="2px solid" borderColor="gray500" >
            <ParallaxBox sx={{
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

export const Reveal = () => {
    return (<Box height="200vh">
        {
            [1, 2, 3, 4, 5, 6, 7, 8].map(e =>
                <RevealBox reset={true} key={e}><Flex sx={{
                    width: '100%',
                    height: '300px',
                    color: 'white',
                    alignItems: 'center',
                    fontSize: '52px',
                    justifyContent: 'center',
                    mb: 'large',
                    backgroundColor: 'primary500'
                }}>
                    {e}
                </Flex></RevealBox>
            )
        }

    </Box>)
}

export const RevealY = () => {
    return (<Box>
        <RevealBox hidden={{ y: 50, opacity: 0 }} visible={{ y: 0, opacity: 1 }}>
            <Flex justifyContent="space-between" alignItems="center" >
                {
                    [1, 2, 3, 4, 5, 6].map(e =>

                        <Flex key={e} sx={{
                            width: '150px',
                            height: '150px',
                            color: 'white',
                            alignItems: 'center',
                            fontSize: '52px',
                            justifyContent: 'center',
                            mb: 'large',
                            backgroundColor: 'primary500'
                        }}>
                            {e}
                        </Flex>
                    )
                }
            </Flex>
        </RevealBox>
    </Box>)
}


export default {
    title: 'Core/Animation',
};