import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import {css} from '@styled-system/css';
import { Box } from '../Box';

import Icon from './Icon';

export const Icons = () => {
    return (
        <Box>
            <Box display="flex" flexDirection="column">
                <Box display="flex" flexDirection="row">
                    <Box border="gray" m="small" p="medium" display="flex" alignItems="center" justifyContent="center" color="black500"><Icon icon="add-simple"  size="24px" /></Box>
                    <Box border="gray" m="small" p="medium" display="flex" alignItems="center" justifyContent="center" color="black500"><Icon icon="arrows-left" size="24px" /></Box>
                    <Box border="gray" m="small" p="medium" display="flex" alignItems="center" justifyContent="center" color="black500"><Icon icon="chevron-top" size="24px" /></Box>
                    <Box border="gray" m="small" p="medium" display="flex" alignItems="center" justifyContent="center" color="black500"><Icon icon="chevron-down"size="24px" /></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default {
    title: 'Icons',
    decorators: [withKnobs],
};