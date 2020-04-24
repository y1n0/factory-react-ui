import React from 'react';


export const VactoryThemeContext = React.createContext({
    theme: null,
});

export const useVactoryTheme = () => React.useContext(VactoryThemeContext);