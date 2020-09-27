import React from 'react';
import { withKnobs, select } from "@storybook/addon-knobs";
import { 
    fontFamilyOption,
    colorOption,
    themeId
} from './knobes-options.storybook';
import {Paragraph} from '../Text';


export const ParagraphComponent = () => {

    return (
        <>
            <Paragraph  color={select("color",colorOption, 'black', themeId )}
                        fontFamily={select("fontFamily", fontFamilyOption, 'sans', themeId)}
                    >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu posuere tortor. Curabitur ullamcorper maximus neque non gravida. Cras sollicitudin purus molestie sapien lobortis consectetur. Vestibulum facilisis lacinia sem non ultricies. Aliquam dapibus massa elit, a fringilla sapien sodales quis.
            </Paragraph>
            <Paragraph>Suspendisse malesuada laoreet orci, sit amet sodales arcu finibus ut. Nunc porta ligula arcu, id sagittis eros auctor eget. Aliquam iaculis condimentum sollicitudin. Quisque lacinia a tellus at consequat. Donec pretium dolor sit amet purus pulvinar placerat. Nulla maximus ullamcorper ornare. Etiam eu pretium magna, sed lacinia velit. </Paragraph>
        </>
    );
}

export default {
    title: 'Primitives/Typography',
    decorators: [withKnobs],
    parameters: {
        actions: { disabled: true }
    }
};