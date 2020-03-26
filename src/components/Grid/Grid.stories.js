import React from 'react';
import {Box} from '../Box';
import { withKnobs} from "@storybook/addon-knobs";


const customText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor";

export const BaseTextComponent = () => {

    return (
        <Box>

        </Box>
    );
}

export default {
    title: 'Grid',
    decorators: [withKnobs]
};
  