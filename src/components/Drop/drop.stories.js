import React, { useState, useRef } from 'react';
import { Box, Flex } from '../Box';
import { Icon } from '../Icon';
import { DirectionManager } from '../../core/rtl-manager';
import { Drop } from './Drop';


const OneDrop = ({ align, target }) => (
    <Drop align={align} target={target} stretch={false}>
        <Box p="large" backgroundColor="rgba(0,0,0,0.1)"></Box>
    </Drop>
);


export const Simple = () => {
    const [over, setOver] = useState();
    const ref = useRef();

    return (
        <Box >

            <Box
                onMouseOver={() => setOver(true)}
                onMouseOut={() => setOver(false)}
                ref={ref}
                sx={{
                    backgroundColor: 'gray500',
                    width: '152px',
                    height: '152px',
                }}>
                &nbsp;
            </Box>
            {over && (<Drop  target={ref.current} align={{ top: "top" }} stretch={false}>
                <Box p="large" backgroundColor="rgba(0,0,0,0.1)"></Box>
            </Drop>)}
        </Box>
    )
}


export default {
    title: 'Drop',
};