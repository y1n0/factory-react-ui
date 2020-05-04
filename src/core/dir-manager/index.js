import React from 'react';
import { StyleSheetManager } from "styled-components";
import stylisRTLPlugin from 'stylis-plugin-rtl';


export const DirectionManager = ({dir= "ltr", children}) => {
    return <StyleSheetManager stylisPlugins={dir === 'rtl' ? [stylisRTLPlugin] : []}>{children}</StyleSheetManager>
} 