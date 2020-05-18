import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { Box, Flex } from '../../Box';

import Icon from '../Icon';

import iconSet from '../selection.json';

const iconNameList = iconSet.icons.map(icon => icon.properties.name);

export const Sizes = () => {
    console.log(iconSet);
    return (
        <Box>
            <Box display="flex" flexDirection="column">
                <Flex  sx={{
                    flexDirection: 'row',
                    flexWrap: 'wrap'
                }}>
                    {
                        iconNameList.map((iconName, key) => (
                            <Flex
                            key={key} sx={{
                                border: '2px solid',
                                borderColor: 'gray200',
                                m: 'small',
                                p: 'medium',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexDirection: 'column',
                                color: 'black500',
                                height: "130px",
                                width: "130px",
                            }}>
                                <Icon name={iconName} size="large" />
                                <Box mt="medium">{iconName}</Box>
                            </Flex>
                        ))
                    }
                </Flex>
            </Box>
        </Box>
    )
}

export default {
    title: 'Icons',
    decorators: [withKnobs],
};