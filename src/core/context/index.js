import React from 'react';

export const VactoryThemeContext = React.createContext({
    colorMode: null,
    setColorMode: null,
});

export const useVactoryTheme = () => React.useContext(VactoryThemeContext);