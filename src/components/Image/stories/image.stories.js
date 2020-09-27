import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Box } from '../../Box';

import {Image} from '../Image';



export const Simple= () => {
    return (
        <Box>
            <Image size="300px" m="medium" borderRadius="xlarge" src="https://images.pexels.com/photos/1407305/pexels-photo-1407305.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </Box>
    )
}

export default {
    title: 'Primitives/Images',
    decorators: [withKnobs],
};