import React from 'react';
import Heading from './Heading';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import { 
    fontFamilyOption,
    colorOption,
    themeId
} from './knobes-options.storybook';

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
    title: 'Typography',
    decorators: [withKnobs]
};