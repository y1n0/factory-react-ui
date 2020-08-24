import React from 'react';
import {Text} from '../Text';
import { withKnobs, text, select } from "@storybook/addon-knobs";

import { 
    fontFamilyOption,
    colorOption,
    fontSizeAndLineHeightOption,
    fontWeightOption,
    textAlignOption,
    spaceOption,
    themeId
} from './knobes-options.storybook';


const customText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor";

export const BaseTextComponent = () => {

    return (
        <>
            <Text
                fontFamily={select("fontFamily", fontFamilyOption, 'sans', themeId)}
                color={select("color",colorOption, 'black', themeId )}
                fontSize={select("fontSize", fontSizeAndLineHeightOption, 'paragraph' ,themeId)}
                lineHeight={select("lineHeight", fontSizeAndLineHeightOption, 'paragraph' ,themeId)}
                fontWeight={select("fontWeight", fontWeightOption, 'regular' ,themeId)}
                textAlign={select("textAlign", textAlignOption, 'left' ,themeId)}
                marginBottom={select("marginBottom", spaceOption, "none", themeId)}>
                {text("text", customText)}
            </Text>
            <Text
                marginBottom={select("marginBottom", spaceOption, 'none', themeId)}>
                {text("text", customText)}
            </Text>
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
  