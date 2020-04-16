import React from "react"
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react';
import {theme} from '../src/theme';

import ExpirementalDefaultFont from '../src/components/Font';
import GlobalStyle from "../src/components/GlobalStyle";

import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// addParameters({
//         viewport: {
//           viewports: INITIAL_VIEWPORTS, // newViewports would be an ViewportMap. (see below for examples)
//           defaultViewport: 'responsive',
//         },
//       });

addDecorator(storyFn =>  <ThemeProvider theme={theme}>
        <ExpirementalDefaultFont />
        <GlobalStyle />
        {storyFn()}
</ThemeProvider>);