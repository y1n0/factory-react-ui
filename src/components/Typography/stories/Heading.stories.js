import React from 'react';
import deepmerge from 'deepmerge';
import {ThemeProvider} from 'styled-components';
import { withKnobs, text, select, boolean } from "@storybook/addon-knobs";
import {DirectionManager} from "../../../core/dir-manager";
import {vactoryTheme} from "../../../theme";
import {
    fontFamilyOption,
    colorOption,
    themeId
} from './knobes-options.storybook';
import {Heading} from '../Text';

const customThem = {
    fonts: {
        sans: 'Cairo',
        serif: 'Cairo',
        monospace: 'Cairo',
        montserrat: "Cairo"
    }
};

const customText = "Heading";
const levelOption = [1, 2, 3, 4, 5, 6];
const groupRtl = "Version arabe";
const activeRtl = true;


export const HeadingComponent = () => {

    return (
        <div>
            {levelOption.map((level, index) => {
                return <Heading key={index} level={level}
                         color={select("color",colorOption, 'black', themeId )}
                         fontFamily={select("fontFamily", fontFamilyOption, 'sans', themeId)}
                >
                    {text("text", customText)}
                </Heading>
            })}
        </div>
    );
}

export const HeadingComponentArabe = () => {
    const rtl = boolean('Activer RTl', activeRtl, groupRtl)
    const theme = rtl ? deepmerge.all([vactoryTheme, customThem]) : vactoryTheme;

    return (
        <ThemeProvider theme={theme}>
            <DirectionManager dir={rtl ? 'rtl' : 'ltr'}>
                <div>
                    {levelOption.map((level, index) => {
                        return <Heading key={index} level={level}
                                        color={select("color", colorOption, 'black', themeId)}
                                        fontFamily={select("fontFamily", fontFamilyOption, 'sans', themeId)}
                        >
                            {text("text", customText)}
                        </Heading>
                    })}
                </div>
            </DirectionManager>
        </ThemeProvider>
    );
}

export default {
    title: 'Primitives/Typography',
    decorators: [withKnobs],
    parameters: {
        actions: { disabled: true }
    }
};
