import React from 'react';
import { withKnobs, text, select } from "@storybook/addon-knobs";
import {
    fontFamilyOption,
    colorOption,
    themeId
} from './knobes-options.storybook';
import {Heading} from '../Text';

const customText = "Heading";

const levelOption = [1,2,3,4,5,6];


export const HeadingComponent = () => {

    return (
        <div>
            {levelOption.map((level, index) => {
                return <Heading level={level}
                         color={select("color",colorOption, 'black', themeId )}
                         fontFamily={select("fontFamily", fontFamilyOption, 'sans', themeId)}
                >
                    {text("text", customText)}
                </Heading>
            })}
        </div>
    );
}

export default {
    title: 'Primitives/Typography',
    decorators: [withKnobs],
    parameters: {
        actions: { disabled: true }
    }
};
