import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Box } from '../../Box';

import Button from '../Button';
import Link from '../Link';

import { Icon } from '../../Icon';

export const Variant = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Button fill="basic" type="submit">basic</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="primary">primary</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="danger">danger</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="success">success</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="info">info</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="warning">warning</Button>
            </Box>
        </Box>
    );
}

export const WithIcon = () => {
    return (
        <Box display="flex" flexDirection="column">

            <Box my="xsmall">
                <Button fill="primary"><Icon mr="14px" name="add-simple" size="14px"/> primary</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="danger">danger <Icon ml="14px" name="chevron-down" size="14px"/></Button>
            </Box>
            <Box my="xsmall">
                <Button fill="success" p="14px"><Icon name="chevron-down" size="14px"/></Button>
            </Box>
            <Box my="xsmall">
                <Button fill="info">info</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="warning">warning</Button>
            </Box>
        </Box>
    );
}


export const Size = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Button fill="primary" outline size="small">small</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="primary" size="medium">medium</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="primary" size="large">large</Button>
            </Box>
        </Box>
    );
}

export const rounded = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Button fill="primary" borderRadius="rounded">primary</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="danger" borderRadius="rounded">danger</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="success"  borderRadius="rounded" >Success</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="info" borderRadius="rounded">info</Button>
            </Box>
            <Box my="xsmall">
                <Button fill="warning" borderRadius="rounded">warning</Button>
            </Box>
        </Box>
    );
}


export const responsive= () => {
    return (
        <Box display="flex" flexDirection="column">

<Box my="xsmall">
                <Button fill={{_: 'danger', sm: 'primary', md: 'success'}} >variant</Button>
            </Box>
            <Box my="xsmall">
                <Button outline={{_: 'primary', sm: 'danger', md: 'success'}} >outline</Button>
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
                <Button sx={{color: 'danger400'}}width="100%" borderRadius="rounded">full Width</Button>
            </Box>
        </Box>
    );
}

export const AsLink = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Link href="#" outline="primary" borderRadius="rounded">add</Link>
            </Box>
            <Box my="xsmall">
                <Link display="inline-flex" alignItems="center" href="#" outline="primary" borderRadius="rounded">add <Icon ml="14px" name="add-simple" size="14px"/></Link>
            </Box>
            <Box my="xsmall">
                <Link display="inline-flex" alignItems="center" href="#" outline="primary" borderRadius="rounded"><Icon mr="14px" name="add-simple" size="14px"/> add</Link>
            </Box>
        </Box>
    );
}


export default {
    title: 'Primitives/Button',
    decorators: [withKnobs],
};