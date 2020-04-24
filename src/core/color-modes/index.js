import React, { useState, useEffect, useContext, createContext } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { get } from 'styled-system';
import deepmerge from 'deepmerge';


const ColorModeContext = createContext({});

// const STORAGE_KEY = 'vactory-ui-color-mode';

const applyColorMode = (theme, mode) => {
    if (!mode) return theme
    const modes = get(theme, 'colors.modes', {})
    return deepmerge.all([{}, theme, {
      colors: get(modes, mode, {}),
    }]);
  }

  
const useColorModeState = (theme = {}) => {

    // TODO : enable to set init color Mode
    const [mode, setMode] = useState('default');

    // init state
    useEffect(() => {
        // get and set stored color mode 
    }, []);

    useEffect(() => {

        // store mode

    }, []);

    return [mode, setMode];

}  

export const useColorMode = () => {
    const { colorMode, setColorMode } = useContext(ColorModeContext);
    if (typeof setColorMode !== 'function') {
        throw new Error(`[useColorMode] requires the ColorModeProvider component`)
    }


    return [colorMode, setColorMode];
}


export const ColorModeProvider = ({children}) => {

    const outerTheme = useContext(ThemeContext);

    const [colorMode, setColorMode] = useColorModeState(outerTheme);

    const theme = applyColorMode(outerTheme || {}, colorMode);

    const context = {
        theme,
        colorMode,
        setColorMode,
      }

    return (
        <ThemeProvider theme={theme}>
            <ColorModeContext.Provider value={context}>
                {children}
            </ColorModeContext.Provider>
        </ThemeProvider> 
    );
}