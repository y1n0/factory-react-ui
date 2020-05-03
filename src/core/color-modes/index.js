import React, { useState, useEffect, useContext } from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { get } from 'styled-system';
import deepmerge from 'deepmerge';
import { useVactoryTheme, VactoryThemeContext } from '../index';


const STORAGE_KEY = 'vactory-ui-color-mode';

const storage = {
    get: init => {
        try {
            return window.localStorage.getItem(STORAGE_KEY) || init
        } catch (e) {
            console.warn(
                'localStorage is disabled and color mode might not work as expected.',
                'Please check your Site Settings.',
                e
            )
        }
    },
    set: value => {
        try {
            window.localStorage.setItem(STORAGE_KEY, value)
        } catch (e) {
            console.warn(
                'localStorage is disabled and color mode might not work as expected.',
                'Please check your Site Settings.',
                e
            )
        }
    },
}

const applyColorMode = (theme, mode) => {
    if (!mode) return theme
    const modes = get(theme, 'colors.modes', {})
    return deepmerge.all([{}, theme, {
        colors: get(modes, mode, {}),
    }]);
}


const useColorModeState = (theme = {}) => {

    const [mode, setMode] = useState('default');

    // init state
    useEffect(() => {
        const stored = storage.get();
        if (!stored || stored === mode) return;
        setMode(stored);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    useEffect(() => {
        if (!mode) return
        storage.set(mode)
    }, [mode]);

    return [mode, setMode];

}

export const useColorMode = () => {
    const { colorMode, setColorMode } = useVactoryTheme();
    if (typeof setColorMode !== 'function') {
        throw new Error(`[useColorMode] requires the ColorModeProvider component`)
    }

    return [colorMode, setColorMode];
}


export const ColorModeProvider = ({ children }) => {

    const styledComponentTheme = useContext(ThemeContext);

    const [colorMode, setColorMode] = useColorModeState(styledComponentTheme);

    const theme = applyColorMode(styledComponentTheme || {}, colorMode);

    const context = {
        theme,
        colorMode,
        setColorMode,
    }

    return (
        <ThemeProvider theme={theme}>
            <VactoryThemeContext.Provider value={context}>
                {children}
            </VactoryThemeContext.Provider>
        </ThemeProvider>
    );
}