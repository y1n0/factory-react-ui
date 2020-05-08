import React from 'react';
import { Box, Heading } from '../components';
import { motion } from 'framer-motion';

const MotionBox = motion.custom(Box);
const ParallaxBox = ({children, ...props}) => {
    
    const [elementTop, setElementTop] = React.useState(0);


    return <MotionBox>{children}</MotionBox>
}
export const Parallax = () => {


    return (<Box>
        <Heading level="1">Example from framer.io/motion</Heading>
    </Box>)
}


export default {
    title: 'Animation',
};