import React from 'react';
import { Box } from '../../Box';
import {List, Item} from '../'


import { DirectionManager } from '../../../core';


export const Simple = () => {

    return (
        <Box>
            <List>
                <Item>Apples</Item>
                <Item>Bananas</Item>
                <Item>Oranges</Item>
            </List>
        </Box>
    )
}

export const Ordered = () => {

    return (
        <Box>
            <List ordered>
                <Item>Apples</Item>
                <Item>Bananas</Item>
                <Item>Oranges</Item>
            </List>
        </Box>
    )
}

export const horizontal = () => {

    return (
        <Box>
            <List horizontal>
                <Item>Apples</Item>
                <Item>Bananas</Item>
                <Item>Oranges</Item>
            </List>
        </Box>
    )
}
/*

*/

export default {
    title: 'Components/Lists',
};