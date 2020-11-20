import React from 'react';
import { Box } from '../Box';
import { MotionBox } from './MotionBox';
import { useIntersection } from "react-use";

const defaultHidden = {
  opacity: 0,
};

const defaultVisible = {
  opacity: 1,
};
export const RevealBox = React.forwardRef(({
  delayOrder,
  duration = 0.4,
  easing = [0.42, 0, 0.58, 1],
  children,
  threshold = 0.04,
  hidden = defaultHidden,
  visible = defaultVisible,
  reset = false,  // if value set to true -  element will reappear every time it shows up on the screen
  ...rest
}, ref) => {


  const [inView, setInView] = React.useState(false);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold
  });

  React.useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0;
    if (inViewNow) {
      return setInView(inViewNow);
    } else if (reset) {
      return setInView(false);
    }
  }, [intersection, reset]);


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
      ...hidden,
      transition
    },
    show: {
      ...visible,
      transition
    }
  };

  

  return (
    <Box ref={intersectionRef}>
      <Box.WithoutConfig
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        exit="hidden"
        variants={variants}
        ref={ref}
        {...rest}
        as={MotionBox}>{children}
      </Box.WithoutConfig>
    </Box>
  );
});