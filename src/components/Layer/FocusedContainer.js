
import React, { useEffect, useRef, useState } from 'react';
import { makeNodeFocusable, makeNodeUnfocusable, isNotAncestorOf, getBodyChildElements } from '../../core';

export const FocusedContainer = ({
  hidden = false,
  restrictScroll = false,
  children,
  ...rest
}) => {
  const [bodyOverflowStyle, setBodyOverflowStyle] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const removeTrap = () => {
      const child = ref.current;
      getBodyChildElements()
        .filter(isNotAncestorOf(child))
        .forEach(makeNodeFocusable);
      if (restrictScroll) {
        document.body.style.overflow = bodyOverflowStyle;
      }
    };

    const trapFocus = () => {
      const child = ref.current;
      getBodyChildElements()
        .filter(isNotAncestorOf(child))
        .forEach(makeNodeUnfocusable);

      if (restrictScroll) {
        setBodyOverflowStyle(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
      }
    };

    const timer = setTimeout(() => {
      if (!hidden) {
        trapFocus();
      }
    }, 0);

    return () => {
      removeTrap();
      clearTimeout(timer);
    };
  }, [hidden, bodyOverflowStyle, restrictScroll]);

  return (
    <div ref={ref} aria-hidden={hidden} {...rest}>
      {children}
    </div>
  );
};