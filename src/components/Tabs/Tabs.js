import React, { useState, Children, cloneElement } from "react";

import {StyledTabs, StyledTabsHeader, StyledTabsContent} from './StyledTabs';
import {Box, Flex} from '../Box';



const POSITIONS = {
    top: {
        display: 'flex'
    }
}


export const Tabs = ({
    children,
    theme,
    activeTab: propsActiveKey,
    position="top",
    sx,

    onChange, // Callback executed when active tab is changed
    onTabClick, // Callback executed when tab is clicked
    onNextClick, //Callback executed when next button is clicked
    onPrevClick, // Callback executed when prev button is clicked



    ...rest
}) => {

    const [activeKey, setActiveKey] = useState(rest.activeTab || 0);

    if(activeKey !== propsActiveKey && propsActiveKey !== undefined) {
        setActiveKey(propsActiveKey);
    }

    const handleClickTab = key => {
            
        if(propsActiveKey === undefined) {
            setActiveKey(key)
        }
        if(onTabClick) {
            onTabClick(key)
        }
        if(onChange && activeKey !== key ) {
            onChange(key)
        }
        if(onNextClick && activeKey + 1 === key ) {
            onNextClick()
        }
        if(onPrevClick && activeKey - 1 === key) {
            onPrevClick()
        }
    }

    delete rest.activeIndex;
    delete rest.onActive;

    let activeContent;
    let activeTitle;

    const tabs = Children.map(
        children,
        (tab, index) => {
            if (!tab) return undefined;
            const tabProps = tab.props || {};
            const isTabActive = index === activeKey;


            if(isTabActive) {
                activeContent = tabProps.children;
                if (typeof tabProps.title === 'string') {
                    activeTitle = tabProps.title;
                } else {
                    activeTitle = index + 1;
                }
            }

            return cloneElement(tab, {
                index,
                isActive: isTabActive,
                onClickTab: () => handleClickTab(index),
            });
        },
        this
    );

    return (
        <StyledTabs sx={sx} position={position} >
            <StyledTabsHeader >{tabs}</StyledTabsHeader>

            <StyledTabsContent sx={{flexGrow: 1}}>
                {activeContent}
            </StyledTabsContent>
            
        </StyledTabs>
    )




}