import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import {css} from '@styled-system/css';
import { Box } from '../Box';

import Icon from './Icon';



export const Sizes = () => {
    return (
        <Box>
            <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row">
                    <Box border="gray" m="small" p="medium" display="flex" alignItems="center" justifyContent="center" color="black500"><Icon name="add-simple"  color="primary500" size="small" /></Box>
                    <Box border="gray" m="small" p="medium" display="flex" alignItems="center" justifyContent="center" color="black500"><Icon name="arrows-left" color="primary500" size="medium" /></Box>
                    <Box border="gray" m="small" p="medium" display="flex" alignItems="center" justifyContent="center" color="black500"><Icon name="chevron-top" color="primary500" size="large" /></Box>
                    <Box border="gray" m="small" p="medium" display="flex" alignItems="center" justifyContent="center" color="black500"><Icon name="chevron-down"color="primary500"  size="xlarge" /></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default {
    title: 'Icons',
    decorators: [withKnobs],
};