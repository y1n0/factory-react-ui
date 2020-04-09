  
import React, { useEffect, useRef, useState } from 'react';



// TODO : move to util/dom
export const getBodyChildElements = () => {
    const excludeMatch = /^(script|link)$/i;
    const children = [];
    [].forEach.call(document.body.children, node => {
      if (!excludeMatch.test(node.tagName)) {
        children.push(node);
      }
    });
    return children;
  };

  // TODO : move to util/dom
const TABINDEX = 'tabindex';
const TABINDEX_STATE = 'data-g-tabindex';

  export const makeNodeFocusable = node => {
    // do not touch aria live containers so that announcements work
    if (!node.hasAttribute('aria-live')) {
      node.setAttribute('aria-hidden', false);
      // allow children to receive focus again
      const elements = node.getElementsByTagName('*');
      // only reset elements we've changed in makeNodeUnfocusable()
      Array.prototype.filter
        .call(elements || [], element => element.hasAttribute(TABINDEX_STATE))
        .forEach(element => {
          const prior = element.getAttribute(TABINDEX_STATE);
          if (prior >= 0) {
            element.setAttribute(TABINDEX, element.getAttribute(TABINDEX_STATE));
          } else if (prior === 'none') {
            element.removeAttribute(TABINDEX);
          }
          element.removeAttribute(TABINDEX_STATE);
        });
    }
  };

  const autoFocusingTags = /(a|area|input|select|textarea|button|iframe)$/;
  export const makeNodeUnfocusable = node => {
    // do not touch aria live containers so that announcements work
    if (!node.hasAttribute('aria-live')) {
      node.setAttribute('aria-hidden', true);
      // prevent children to receive focus
      const elements = node.getElementsByTagName('*');
      // first, save off the tabindex of any element with one
      Array.prototype.filter
        .call(elements || [], element => element.getAttribute(TABINDEX) !== null)
        .forEach(element => {
          element.setAttribute(TABINDEX_STATE, element.getAttribute(TABINDEX));
          element.setAttribute(TABINDEX, -1);
        });
      // then, if any element is inherently focusable and not handled above,
      // give it a tabindex of -1 so it can't receive focus
      Array.prototype.filter
        .call(elements || [], element => {
          const currentTag = element.tagName.toLowerCase();
          return (
            currentTag.match(autoFocusingTags) &&
            element.focus &&
            element.getAttribute(TABINDEX_STATE) === null
          );
        })
        .forEach(element => {
          element.setAttribute(TABINDEX_STATE, 'none');
          element.setAttribute(TABINDEX, -1);
        });
    }
  };

  
const isNotAncestorOf = child => parent => !parent.contains(child);

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