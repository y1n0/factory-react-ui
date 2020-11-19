import React from 'react';
import { Box } from '../Box';
import { useViewportScroll, useTransform } from 'framer-motion';
import { MotionBox } from './MotionBox';


export const ParallaxBox = ({
    as = MotionBox, 
    children,
    easing = [0.42, 0, 0.58, 1],
    ...rest }) => {

    const [elementTop, setElementTop] = React.useState(0);

    const ref = React.useRef(null);
    const { scrollY } = useViewportScroll();
    

    React.useEffect(() => {
        if (!ref.current) return;
        const setValues = () => {
            setElementTop(ref.current.offsetTop);
        };
      
        setValues();

        document.addEventListener("load", setValues);
        window.addEventListener("resize", setValues);

        return () => {
            document.removeEventListener("load", setValues);
            window.removeEventListener("resize", setValues);
        };

    }, [ref]);

    const transformInitialValue = elementTop - 1; 
    const transformFinalValue = elementTop + 1;
    const yRange = [transformInitialValue, transformFinalValue];

    const y = useTransform(scrollY, yRange, [0, -1], {
        clamp: false,
        easing
    });
    return <Box.WithoutConfig as={as} ref={ref}  style={{ y }} {...rest}>{children}</Box.WithoutConfig>
}