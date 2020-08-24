import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions"
import { Box } from '../../Box';
import { Heading, Paragraph } from '../../Typography'
import { Anchor } from '../Anchor';

export const Default = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall">
                <Anchor href="#" onClick={action("click on Anchor")}>Default anchor</Anchor>
            </Box>
            <Box my="xsmall">
                <Heading color="danger600" level={1}>
                    <Anchor href="#" onClick={action("click on Anchor")}>Inside heading1</Anchor>
                </Heading>
            </Box>


            <Box my="xsmall">
                <Paragraph>
                Lorem ipsum dolor sit amet, consectetur <Anchor href="#" variant="primary">primary link</Anchor> elit. Curabitur et porttitor ex, nec placerat velit. Donec pellentesque tortor quis lacus viverra dictum.
                Vestibulum ante ipsum primis <Anchor href="#" variant="danger">danger link</Anchor> faucibus orci luctus et <Anchor href="#" variant="warning">warning link</Anchor> posuere cubilia Curae.
                </Paragraph> 
            </Box>
        </Box>
    );
}


export default {
    title: 'Primitives/Anchor',
    decorators: [withKnobs],
};