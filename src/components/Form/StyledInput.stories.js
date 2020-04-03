import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";

import { Box } from '../Box';
import Input, {StyledInput} from './Input';


export const Default = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <StyledInput type="text" variant="default" placeholder="placeholder" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <StyledInput type="text" variant="default" placeholder="placeholder" width="100%" />
            </Box>
        </Box>
    );
}

export default {
    title: 'Styled Input',
    decorators: [withKnobs],
};