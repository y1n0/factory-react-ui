import React from 'react';
import { Box } from '../Box';
import { MotionBox } from './MotionBox';
import {IntersectionContext} from '../../core';


export const RevealBox = React.forwardRef(({
    as = MotionBox, 
    delayOrder,
    duration = 0.5,
    easing = [0.42, 0, 0.58, 1],
    children,
    ...rest 
}, ref) => {


    const { inView } = React.useContext(IntersectionContext);
    
    const transition = React.useMemo(
        () => ({
          duration,
          delay: delayOrder / 5,
          ease: easing
        }),
        [duration, delayOrder, easing]
      );

    const variants = {
        hidden: {
          opacity: 0,
          transition
        },
        show: {
          opacity: 1,
          transition
        }
      };


    return (
            <Box as={as}
                initial="hidden" 
                animate={inView ? "show" : "hidden"}
                exit="hidden"
                variants={variants}
                ref={ref}
                {...rest}>{children}</Box>);
});