import React from 'react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { 
    fontFamilyOption,
    colorOption,
    themeId
} from './knobes-options.storybook';
import {Heading} from '../Text';

const customText = "Heading";

const levelOption = {
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
};


export const HeadingComponent = () => {

    return (
        <Heading level={select("level", levelOption, 1, 'props')}
                 color={select("color",colorOption, 'black', themeId )}
                 fontFamily={select("fontFamily", fontFamilyOption, 'sans', themeId)}
                 >
                {text("text", customText)}
        </Heading>
    );
}

export default {
    title: 'Primitives/Typography',
    decorators: [withKnobs],
    parameters: {
        actions: { disabled: true }
    }
};