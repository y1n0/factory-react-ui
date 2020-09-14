import React from "react"
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react';
import {theme} from '../src/theme';


import GlobalStyle from "../src/components/GlobalStyle";

import { addParameters } from '@storybook/react';
// import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// addParameters({
//   viewport: {
//     defaultViewport: 'responsive',
//   },
// });
addParameters({
  backgrounds: [
    { name: 'white', value: 'white', default: true },
    { name: 'gray', value: '#f7f8f9', default: false },
    { name: 'Capital Azur', value: '#eef2f2', default: false },
  ]
});

addDecorator(storyFn =>  <ThemeProvider theme={theme}>
        <GlobalStyle />
        {storyFn()}
</ThemeProvider>);