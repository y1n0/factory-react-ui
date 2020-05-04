import React from 'react';
import { StyleSheetManager } from "styled-components";
import stylisRTLPlugin from 'stylis-plugin-rtl';


export const DirectionManager = ({dir= "ltr", children}) => {
    console.log("Dir Manager", React.Fragment);
    return <StyleSheetManager stylisPlugins={dir === 'rtl' ? [stylisRTLPlugin] : []}><React.Fragment>{children}</React.Fragment></StyleSheetManager>
} 