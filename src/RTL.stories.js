import React from 'react';
import styled, { StyleSheetManager } from 'styled-components'
import stylisRTLPlugin from 'stylis-plugin-rtl';

const Box = styled.div`
  background: mediumseagreen;
  border-left: 10px solid red;
`

export default {
  title: 'RTL Support ',
};

export const WithoutRTLSupport = () => {

    return (
            <Box>My border is now on the left!</Box>
    );
}
export const WithRTLSupport = () => {

    return (
        <StyleSheetManager stylisPlugins={[stylisRTLPlugin]}>
            <Box>My border is now on the right!</Box>
        </StyleSheetManager>
    );
}