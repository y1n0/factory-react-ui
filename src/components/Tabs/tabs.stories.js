import React, {useState} from 'react';
import { Box } from '../Box';

import { action } from "@storybook/addon-actions"

import {Tabs} from './Tabs';
import {Tab} from './Tab';
import {Icon}  from '../Icon';


export const Simple= () => {
    
    return (
        <Box >
            <Tabs>
                <Tab title="tab1">Content tab 1</Tab>
                <Tab title="tab2">Content tab 2</Tab>
                <Tab title="tab3">Content tab 3</Tab>
            </Tabs>
        </Box>
    )
}

export const CustomTab= () => {
    
    return (
        <Box >
            <Tabs
                onTabClick={action("onTabClick")}
                onChange={action("onChange")}
                onPrevClick={action("onPrevClick")}
                onNextClick={action("onNextClick")}
            >
                <Tab marginX="small" title="tab1">Content tab 1</Tab>
                <Tab marginX="small" title="tab2">Content tab 2</Tab>
                <Tab marginX="small" title="tab3">Content tab 3</Tab>

                <Tab p={0} title={
                    <Box sx={{backgroundColor: 'primary300', padding: 'medium'}}>TAB 4</Box>
                }>Content tab 4</Tab>
            </Tabs>
        </Box>
    )
}

export const WithIcon= () => {
    
    return (
        <Box >
            <Tabs>
                <Tab title={<Icon name="add-simple" size="small" />}>Content tab 1</Tab>
                <Tab title={<Icon name="chevron-top" size="small" />}>Content tab 2</Tab>
                <Tab title={<Icon name="chevron-down" size="small" />}>Content tab 3</Tab>
            </Tabs>
        </Box>
    )
}

export const Controlled= () => {
    const [activeKey, setActiveKey] = useState(0);
    return (
        <Box >
            <Tabs activeTab={activeKey} onChange={key => setActiveKey(key)}>
                <Tab title="test1">KK</Tab>
                <Tab title="test2">JJ</Tab>
                <Tab title="test3">DD</Tab>
            </Tabs>
        </Box>
    )
}

export default {
    title: 'Tabs',
};