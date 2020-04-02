import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions"
import { Box } from '../Box';

import { Anchor } from './Anchor';


export const Variant = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Anchor href="#" onClick={action("click on Anchor")} outline="primary" borderRadius="rounded">Anchor</Anchor>
            </Box>
        </Box>
    );
}


export default {
    title: 'Anchor',
    decorators: [withKnobs],
};