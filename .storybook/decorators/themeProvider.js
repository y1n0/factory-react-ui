import React from "react"
import { ThemeProvider } from 'styled-components'
import { addDecorator } from '@storybook/react';
import {theme} from '../../src/theme';

import ExpirementalDefaultFont from '../../src/components/Font';
import GlobalStyle from "../../src/components/GlobalStyle";

addDecorator(storyFn =>  <ThemeProvider theme={theme}>

        {storyFn()}
</ThemeProvider>);