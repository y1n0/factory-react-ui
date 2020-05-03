import React, { useState, Children, cloneElement, forwardRef } from "react";

import { Box, Flex } from '../Box';
import { getVariant } from "../../core";


export const Tabs = forwardRef(({
    children,
    theme,
    activeTab: propsActiveKey,
    sx,
    variant,

    onChange, // Callback executed when active tab is changed
    onTabClick, // Callback executed when tab is clicked
    onNextClick, //Callback executed when next button is clicked
    onPrevClick, // Callback executed when prev button is clicked

    ...rest

}, ref) => {

    const [activeKey, setActiveKey] = useState(rest.activeTab || 0);

    if (activeKey !== propsActiveKey && propsActiveKey !== undefined) {
        setActiveKey(propsActiveKey);
    }

    const handleClickTab = key => {

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
    // let activeTitle;

    const tabs = Children.map(
        children,
        (tab, index) => {
            if (!tab) return undefined;
            const tabProps = tab.props || {};
            const isTabActive = index === activeKey;


            if (isTabActive) {
                activeContent = tabProps.children;
                // if (typeof tabProps.title === 'string') {
                //     activeTitle = tabProps.title;
                // } else {
                //     activeTitle = index + 1;
                // }
            }

            const key = tab.props.tabKey || index;
            return cloneElement(tab, {
                index,
                isActive: isTabActive,
                variant,
                onClickTab: () => handleClickTab(key),
            });
        },
        this
    );

    return (
        <Box
            sx={sx}
            {...rest}
            variant={getVariant(['tabs', variant])}
            __css={{
                display: 'flex',
                flexDirection: 'column',
                border:"1px solid",
                borderColor:"gray500"
            }}
        >

            <Flex __css={{  backgroundColor: 'gray100',}} variant={getVariant(['tabs', variant, 'header'])} >
                {tabs}
            </Flex>

            <Box __css={{
                flexGrow: 1
            }} variant={getVariant(['tabs', variant, 'content'])}>
                {activeContent}
            </Box>
        </Box>
    );

});