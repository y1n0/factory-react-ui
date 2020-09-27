import React from 'react';
import { StyleSheetManager } from "styled-components";
import stylisRTLPlugin from 'stylis-plugin-rtl';


export const DirectionManagerContext = React.createContext("ltr");

export const DirectionManager = ({dir= "ltr", children}) => {
    return <DirectionManagerContext.Provider value={dir}>
            <StyleSheetManager stylisPlugins={dir === 'rtl' ? [stylisRTLPlugin] : []}>
                 <div dir={dir}>{children}</div>
            </StyleSheetManager>
        </DirectionManagerContext.Provider>
            
} 