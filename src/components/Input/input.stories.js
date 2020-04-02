import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { css } from '@styled-system/css';

import {Text} from '../Typography';
import { Box } from '../Box';
import Input from './Input';

export const Default = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" variant="default" placeholder="placeholder" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" variant="default" placeholder="placeholder" width="100%" />
            </Box>
        </Box>
    );
}

export const Status = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" value="default" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="primary" value="primary" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="success" value="success" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="danger" value="danger" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="info" value="info" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="warning" value="warning" />
            </Box>
        </Box>
    );
}
export const Sizes = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="small" value="small" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="medium" value="medium" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="large" value="large" />
            </Box>
        </Box>
    );
}

export const Types = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">Text</Text>
                <Input type="text" placeholedr="placeholder" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">Date</Text>
                <Input type="date" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">Textarea</Text>
                <Input  as="textarea"></Input>
            </Box>
        </Box>
    );
}
export const Disabled = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" disabled value="disabled" />
            </Box>
        </Box>
    );
}

export default {
    title: 'Input',
    decorators: [withKnobs],
};