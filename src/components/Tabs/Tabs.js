import React, { useState, Children, cloneElement, forwardRef, useRef, useEffect } from "react";

import { Box, Flex } from '../Box';
import { getVariant } from "../../core";
import { MotionBox } from '../Animation'
import { useAnimation } from "framer-motion";

export const Tabs = forwardRef(({
    children,
    theme,
    activeTab: propsActiveKey,
    sx,
    variant = 'tabs',
    showBar = false,
    onChange, // Callback executed when active tab is changed
    onTabClick, // Callback executed when tab is clicked
    onNextClick, //Callback executed when next button is clicked
    onPrevClick, // Callback executed when prev button is clicked

    ...rest

}, ref) => {


    const [activeKey, setActiveKey] = useState(rest.activeTab || 0);

    const tabRefs = [];

    const headerAnimationCtrls = useAnimation();
    const inkBarAnimationCtrls = useAnimation();
    const motionVariantsContent = {
        active: {
            opacity: [0, 1],
        }
    }

    const headerTabRef = useRef(null);

    const animateInkBar = (key) => {
        const currentTabBCR = tabRefs[key].current.getBoundingClientRect();
        const headerTabBCR = headerTabRef.current.getBoundingClientRect();

        inkBarAnimationCtrls.start({
            left: (currentTabBCR.x - headerTabBCR.x),
            width: currentTabBCR.width,
        })
    }

    if (activeKey !== propsActiveKey && propsActiveKey !== undefined) {
        setActiveKey(propsActiveKey);
    }

    useEffect(() => {
       if(showBar){
                animateInkBar(activeKey);
       }
    }, [activeKey, showBar]) // eslint-disable-line react-hooks/exhaustive-deps

    const handleClickTab = key => {
        headerAnimationCtrls.start('active');

        if (propsActiveKey === undefined) {
            setActiveKey(key)
        }
        if (onTabClick) {
            onTabClick(key)
        }
        if (onChange && activeKey !== key) {
            onChange(key)
        }
        if (onNextClick && activeKey + 1 === key) {
            onNextClick()
        }
        if (onPrevClick && activeKey - 1 === key) {
            onPrevClick()
        }
    }

    delete rest.activeIndex;
    delete rest.onActive;

    let activeContent;


    const tabs = Children.map(
        children,
        (tab, index) => {
            if (!tab) return undefined;
            const tabProps = tab.props || {};
            const isTabActive = index === activeKey;

            const ref = useRef();
            const key = tab.props.tabKey || index;
            tabRefs[key] = ref;

            if (isTabActive) {
                activeContent = tabProps.children;
            }
            return cloneElement(tab, {
                index,
                isActive: isTabActive,
                variant,
                onClickTab: () => handleClickTab(key),
                ref
            });
        }
    );



    return (
        <Box
            className="vf-tabs-container"
            sx={sx}
            {...rest}
            variant={getVariant([variant])}
            __css={{
                display: 'flex',
                flexDirection: 'column',
                border: "1px solid",
                borderColor: "gray500"
            }}
        >

            <Flex
                className="vf-tabs__header-container"
                ref={headerTabRef}
                __css={{ position: 'relative', backgroundColor: 'gray100', }}
                variant={getVariant([variant, 'header'])}
                >
                {tabs}
                {showBar &&
                    <MotionBox
                        transition={{ ease: 'easeInOut' }}
                        animate={inkBarAnimationCtrls}
                        className="vf-tabs__ink-bar"
                        sx={{
                            backgroundColor: 'primary500',
                            position: 'absolute',
                            bottom: '0',
                            pointerEvents: 'none',
                            width: "0",
                            height: '2px',
                            m: 0,
                            p: 0
                        }}></MotionBox>}
            </Flex>

            <Box
                className="vf-tabs__content-container"
                __css={{
                    flexGrow: 1
                }}
                variant={getVariant([variant, 'content'])}
                
            >
                <MotionBox
                    className="vf-tabs__animated-content-container"
                    initial="active"
                    animate={headerAnimationCtrls}
                    variants={motionVariantsContent}
                >
                    {activeContent}
                </MotionBox>
            </Box>
        </Box>
    );

});