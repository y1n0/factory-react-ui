import React from 'react';
import { ColorModeProvider, useColorMode } from './core/color-modes';
import { Box } from './components/Box';
import {Button}  from './components/Button';

const Comp = () => {


    return <Box
        sx={{
            padding: 'large',
            backgroundColor: 'background',
            color: 'text',
        }}
    >This is a box</Box>

}

const ChangeColorModeButton = () => {
    const [colorMode, setColorMode] = useColorMode();
    return (
    <Button outline="primary" onClick={e => {
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }}> Toggle {colorMode === 'default' ? 'Dark' : 'Light'}</Button>
    )
}

export const Example = () => {
   
    return (<ColorModeProvider>
        <Comp />
        <ChangeColorModeButton/>

    </ColorModeProvider>);

}


export default {
    title: 'Color Modes',
};
