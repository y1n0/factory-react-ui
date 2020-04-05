import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Box } from '../Box';
import {css} from '@styled-system/css';

import Button from './Button';
import Link from './Link';


export const Variant = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Button variant="basic" type="submit">basic</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="primary">primary</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="danger">danger</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="success">success</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="info">info</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="warning">warning</Button>
            </Box>
        </Box>
    );
}


export const Size = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Button variant="primary" outline size="small">small</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="primary" size="medium">medium</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="primary" size="large">large</Button>
            </Box>
        </Box>
    );
}

export const rounded = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Button variant="primary" borderRadius="rounded">primary</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="danger" borderRadius="rounded">danger</Button>
            </Box>
            <Box my="xsmall">
                <Button variant={{_: 'success', sm: 'danger', md: 'primary'}} borderRadius={{sm: 'none', md: 'rounded'}} >Responsive</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="info" borderRadius="rounded">info</Button>
            </Box>
            <Box my="xsmall">
                <Button variant="primary" borderRadius="rounded">warning</Button>
            </Box>
        </Box>
    );
}

export const outline = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Button outline="primary" borderRadius="rounded">primary</Button>
            </Box>
            <Box my="xsmall">
                <Button outline="danger" borderRadius="rounded">danger</Button>
            </Box>
            <Box my="xsmall">
                <Button outline="success" borderRadius="rounded">success</Button>
            </Box>
            <Box my="xsmall">
                <Button outline="info" borderRadius="rounded">info</Button>
            </Box>
            <Box my="xsmall">
                <Button outline="warning" borderRadius="rounded">warning</Button>
            </Box>
        </Box>
    );
}

export const fullWidth = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Button width="100%">full Width</Button>
            </Box>
            <Box my="xsmall">
                <Button width="100%" borderRadius="rounded">full Width</Button>
            </Box>
        </Box>
    );
}

export const AsLink = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Link href="#" outline="primary" borderRadius="rounded">link</Link>
            </Box>
        </Box>
    );
}

export default {
    title: 'Button',
    decorators: [withKnobs],
};