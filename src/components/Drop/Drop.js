import React, { forwardRef, useContext, createContext, useMemo, useRef, useState, useEffect } from 'react';
import { Box } from '../Box';
import { ThemeContext } from 'styled-components';
import { createPortal } from 'react-dom';
import { parseMetricToNum, findScrollParents, setFocusWithoutScroll, findVisibleParent, getNewContainer } from '../../core/utils';

const PortalContext = createContext(undefined);
const ContainerTargetContext = React.createContext(
    typeof document === 'object' ? document.body : undefined,
);

const getTransformOriginStyle = align => {
    let vertical = 'top';
    if (align.bottom) {
        vertical = 'bottom';
    }
    let horizontal = 'left';
    if (align.right) {
        horizontal = 'right';
    }
    return `${vertical} ${horizontal}`;
}


export const DropContent = forwardRef(({ children, alignProp = { bottom: true, right: true }, ...rest }, ref) => {

    return <Box ref={ref} {...rest} __css={{
        position: 'fixed',
        zIndex: 1000,
        outline: 'none',
        overflow: 'auto',
        transformOrigin: getTransformOriginStyle(alignProp),
    }}>
        {children}
    </Box>


})



export const DropContainer = forwardRef((
    {
        align = {
            top: 'top',
            left: 'left',
        },
        children,
        dropTarget,
        elevation,
        onClickOutside,
        onEsc,
        onKeyDown,
        plain, // Whether the drop element should have no background nor shadow
        responsive, // Whether the drop element should have no background nor shadow
        restrictFocus, // Whether the drop should control focus
        stretch = 'width',
        sx,
        ...rest
    },
    ref,
) => {

    const theme = useContext(ThemeContext) || {};
    const portalContext = useContext(PortalContext) || [];
    const portalId = useMemo(() => portalContext.length, [portalContext]);
    const nextPortalContext = useMemo(() => [...portalContext, portalId], [
        portalContext,
        portalId,
    ]);
    const dropRef = useRef();
    useEffect(() => {
        // We try to preserve the maxHeight as changing it causes any scroll
        // position to be lost. We set the maxHeight on mount and if the window
        // is resized.
        const place = preserveHeight => {
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const target = dropTarget;
            const container = (ref || dropRef).current;
            if (container && target) {
                // clear prior styling
                container.style.left = '';
                container.style.top = '';
                container.style.bottom = '';
                container.style.width = '';
                if (!preserveHeight) {
                    container.style.maxHeight = '';
                }
                // get bounds
                const targetRect = findVisibleParent(target).getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                // determine width
                const width = Math.min(
                    stretch
                        ? Math.max(targetRect.width, containerRect.width)
                        : containerRect.width,
                    windowWidth,
                );
                // set left position
                let left;
                if (align.left) {
                    if (align.left === 'left') {
                        ({ left } = targetRect);
                    } else if (align.left === 'right') {
                        left = targetRect.left + targetRect.width;
                    }
                } else if (align.right) {
                    if (align.right === 'left') {
                        left = targetRect.left - width;
                    } else if (align.right === 'right') {
                        left = targetRect.left + targetRect.width - width;
                    }
                } else {
                    left = targetRect.left + targetRect.width / 2 - width / 2;
                }
                if (left + width > windowWidth) {
                    left -= left + width - windowWidth;
                } else if (left < 0) {
                    left = 0;
                }
                // set top or bottom position
                let top;
                let bottom;
                let maxHeight = containerRect.height;
                if (align.top) {
                    if (align.top === 'top') {
                        ({ top } = targetRect);
                    } else {
                        top = targetRect.bottom;
                    }

                    // Calculate visible area underneath the control w.r.t window height
                    const percentVisibleAreaBelow =
                        100 - (targetRect.bottom / windowHeight) * 100;

                    // Check whether it is within 20% from bottom of the window or
                    // visible area to flip the control
                    // DropContainer doesn't fit well within visible area when
                    // percentVisibleAreaBelow value<=20%
                    // There is enough space from DropContainer to bottom of the window
                    // when percentVisibleAreaBelow>20%.

                    if (windowHeight === top || percentVisibleAreaBelow <= 20) {
                        // We need more room than we have.
                        // We put it below, but there's more room above, put it above
                        top = '';
                        if (align.top === 'bottom') {
                            bottom = targetRect.top;
                        } else {
                            ({ bottom } = targetRect);
                        }
                        maxHeight = bottom;
                        container.style.maxHeight = `${maxHeight}px`;
                    } else if (top > 0) {
                        maxHeight = windowHeight - top;
                        container.style.maxHeight = `${maxHeight}px`;
                    } else {
                        maxHeight = windowHeight - top;
                    }
                } else if (align.bottom) {
                    if (align.bottom === 'bottom') {
                        ({ bottom } = targetRect);
                    } else {
                        bottom = targetRect.top;
                    }
                    maxHeight = bottom;
                    container.style.maxHeight = `${maxHeight}px`;
                } else {
                    // center
                    top =
                        targetRect.top + targetRect.height / 2 - containerRect.height / 2;
                    maxHeight = windowHeight - top;
                }
                // if we can't fit it all, or we're rather close,
                // see if there's more room the other direction
                if (
                    responsive &&
                    (containerRect.height > maxHeight || maxHeight < windowHeight / 10)
                ) {
                    // We need more room than we have.
                    if (align.top && top > windowHeight / 2) {
                        // We put it below, but there's more room above, put it above
                        top = '';
                        if (align.top === 'bottom') {
                            // top = Math.max(targetRect.top - containerRect.height, 0);
                            // maxHeight = targetRect.top - top;
                            bottom = targetRect.top;
                        } else {
                            // top = Math.max(targetRect.bottom - containerRect.height, 0);
                            // maxHeight = targetRect.bottom - top;
                            ({ bottom } = targetRect);
                        }
                        maxHeight = bottom;
                    } else if (align.bottom && maxHeight < windowHeight / 2) {
                        // We put it above but there's more room below, put it below
                        bottom = '';
                        if (align.bottom === 'bottom') {
                            ({ top } = targetRect);
                        } else {
                            top = targetRect.bottom;
                        }
                        maxHeight = windowHeight - top;
                    }
                }
                container.style.left = `${left}px`;
                if (stretch) {
                    // offset width by 0.1 to avoid a bug in ie11 that
                    // unnecessarily wraps the text if width is the same
                    // NOTE: turned off for now
                    container.style.width = `${width + 0.1}px`;
                }
                // the (position:absolute + scrollTop)
                // is presenting issues with desktop scroll flickering
                if (top !== '') {
                    container.style.top = `${top}px`;
                }
                if (bottom !== '') {
                    container.style.bottom = `${windowHeight - bottom}px`;
                }
                if (!preserveHeight) {
                    if (theme.drop && theme.drop.maxHeight) {
                        maxHeight = Math.min(
                            maxHeight,
                            parseMetricToNum(theme.drop.maxHeight),
                        );
                    }
                    container.style.maxHeight = `${maxHeight}px`;
                }
            }
        };

        let scrollParents;

        const addScrollListeners = () => {
            scrollParents = findScrollParents(dropTarget);
            scrollParents.forEach(scrollParent =>
                scrollParent.addEventListener('scroll', place),
            );
        };

        const removeScrollListeners = () => {
            scrollParents.forEach(scrollParent =>
                scrollParent.removeEventListener('scroll', place),
            );
            scrollParents = [];
        };

        const onClickDocument = event => {
            // determine which portal id the target is in, if any
            let clickedPortalId = null;
            let node = event.target;
            while (clickedPortalId === null && node !== document) {
                const attr = node.getAttribute('data-g-portal-id');
                if (attr !== null) clickedPortalId = parseInt(attr, 10);
                node = node.parentNode;
            }
            if (
                clickedPortalId === null ||
                portalContext.indexOf(clickedPortalId) !== -1
            ) {
                onClickOutside(event);
            }
        };

        const onResize = () => {
            removeScrollListeners();
            addScrollListeners();
            place(false);
        };

        addScrollListeners();
        window.addEventListener('resize', onResize);
        if (onClickOutside) {
            document.addEventListener('mousedown', onClickDocument);
        }

        place(false);


        return () => {
            removeScrollListeners();
            window.removeEventListener('resize', onResize);
            if (onClickOutside) {
                document.removeEventListener('mousedown', onClickDocument);
            }
        };
    }, [
        align,
        dropTarget,
        onClickOutside,
        portalContext,
        portalId,
        ref,
        responsive,
        restrictFocus,
        stretch,
        theme.drop,
    ]);

    useEffect(() => {
        if (restrictFocus) {
            (ref || dropRef).current.focus();
        }
    }, [ref, restrictFocus]);

    let content = (
        <DropContent
            sx={sx}
            ref={ref || dropRef}
            plain={plain}
            // elevation={
            //     !plain
            //         ? elevation || theme.global.drop.shadowSize || 'small'
            //         : undefined
            // }
            elevation={undefined}
            tabIndex="-1"
            alignProp={align}
            data-g-portal-id={portalId}
            {...rest}
        >
            {children}
        </DropContent>
    );

    return (
        <PortalContext.Provider value={nextPortalContext}>
            {/* <FocusedContainer onKeyDown={onEsc && preventLayerClose}>
            <Keyboard
              onEsc={
                onEsc
                  ? event => {
                      event.stopPropagation();
                      onEsc(event);
                    }
                  : undefined
              }
              onKeyDown={onKeyDown}
              target="document"
            > */}
            {content}
            {/* </Keyboard>
          </FocusedContainer> */}
        </PortalContext.Provider>
    );
});


export const Drop = forwardRef(
    (
        {
            restrictFocus,
            target: dropTarget, // avoid DOM leakage
            sx,
            ...rest
        },
        ref,
    ) => {
        const theme = useContext(ThemeContext) || {};
        const [originalFocusedElement, setOriginalFocusedElement] = useState();
        useEffect(() => setOriginalFocusedElement(document.activeElement), []);
        const [dropContainer, setDropContainer] = useState();
        const containerTarget = useContext(ContainerTargetContext);
        useEffect(() => setDropContainer(getNewContainer(containerTarget)), [
            containerTarget,
        ]);

        // just a few things to clean up when the Drop is unmounted
        useEffect(
            () => () => {
                if (restrictFocus && originalFocusedElement) {
                    if (originalFocusedElement.focus) {
                        setFocusWithoutScroll(originalFocusedElement);
                    } else if (
                        originalFocusedElement.parentNode &&
                        originalFocusedElement.parentNode.focus
                    ) {
                        // required for IE11 and Edge
                        setFocusWithoutScroll(originalFocusedElement.parentNode);
                    }
                }
                if (dropContainer) {
                    containerTarget.removeChild(dropContainer);
                }
            },
            [containerTarget, dropContainer, originalFocusedElement, restrictFocus],
        );

        return dropContainer
            ? createPortal(
                <DropContainer
                    ref={ref}
                    dir={theme && theme.dir}
                    dropTarget={dropTarget}
                    restrictFocus={restrictFocus}
                    sx={sx}
                    {...rest}
                />,
                dropContainer,
            )
            : null;

    },
);