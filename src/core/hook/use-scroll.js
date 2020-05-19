// /**
//  * useScroll React custom hook
//  * Usage:
//  *    const { scrollX, scrollY, scrollDirection } = useScroll();
//  */

// import { useState, useEffect } from "react";

// export function useScroll() {
//   const [lastScrollTop, setLastScrollTop] = useState(0);
//   const [bodyOffset, setBodyOffset] = useState(
//     document.body.getBoundingClientRect()
//   );
//   const [scrollY, setScrollY] = useState(bodyOffset.top);
//   const [scrollX, setScrollX] = useState(bodyOffset.left);
//   const [scrollDirection, setScrollDirection] = useState();

//   const listener = e => {
//     setBodyOffset(document.body.getBoundingClientRect());
//     setScrollY(-bodyOffset.top);
//     setScrollX(bodyOffset.left);
//     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
//     setLastScrollTop(-bodyOffset.top);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", listener);
//     return () => {
//       window.removeEventListener("scroll", listener);
//     };
//   });

//   return {
//     scrollY,
//     scrollX,
//     scrollDirection
//   };
// }

import { useRef } from 'react'
  
import { useLayoutEffect, useEffect } from 'react'

export const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect

const isBrowser = typeof window !== `undefined`

function getScrollPosition({ element, useWindow }) {
  if (!isBrowser) return { x: 0, y: 0 }

  const target = element ? element.current : document.body
  const position = target.getBoundingClientRect()

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top }
}

export function useScrollPosition(effect, deps, element, useWindow, wait) {
  const position = useRef(getScrollPosition({ useWindow }))

  let throttleTimeout = null

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow })
    effect({ prevPos: position.current, currPos })
    position.current = currPos
    throttleTimeout = null
  }

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait)
        }
      } else {
        callBack()
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, deps)
}

useScrollPosition.defaultProps = {
  deps: [],
  element: false,
  useWindow: false,
  wait: null,
}