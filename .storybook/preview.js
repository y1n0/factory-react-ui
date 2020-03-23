import React from "react"
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react';
import {theme} from '../src/theme';

addDecorator(storyFn =>  <ThemeProvider theme={theme}>
    {/* <GlobalStyle /> */}
        {storyFn()}
</ThemeProvider>);