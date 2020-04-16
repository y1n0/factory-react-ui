import React, {useState} from 'react';
import { Box } from '../Box';

import { action } from "@storybook/addon-actions"

import {Tabs} from './Tabs';
import {Tab} from './Tab';


export const Simple= () => {
    
    return (
        <Box >
            <Tabs
                sx={{
                    flexDirection: 'row'
                }}
                onTabClick={action("onTabClick")}
                onChange={action("onChange")}
                onPrevClick={action("onPrevClick")}
                onNextClick={action("onNextClick")}
            >
                <Tab title="tab1">Content tab 1</Tab>
                <Tab title="tab2">Content tab 2</Tab>
                <Tab title="tab3">Content tab 3</Tab>
            </Tabs>
        </Box>
    )
}

export const Controlled= () => {
    const [activeKey, setActiveKey] = useState(0);
    return (
        <Box >
            <Tabs activeTab={activeKey} onChange={key => setActiveKey(key)}>
                <Tab title="test1" sx={{padding: 'small'}}>KK</Tab>
                <Tab title="test2">JJ</Tab>
                <Tab title="test3">DD</Tab>
            </Tabs>
        </Box>
    )
}

export default {
    title: 'Tabs',
};