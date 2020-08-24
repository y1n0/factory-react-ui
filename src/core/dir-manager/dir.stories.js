import React from 'react';
import styled from 'styled-components'
import { border, typography } from 'styled-system';
import { DirectionManager } from './index';
import markdown from './README.md'
const Box = styled.div`
  background: mediumseagreen;
  margin-bottom: 10px;
  ${border}
`

const BoxTextRight = styled.div`
    background: green;
    margin-bottom: 10px;
   
    ${typography}
    /* @noflip */
    border-left: 20px solid red;
`;

export const LTR = () => {

  return (<DirectionManager>
    <>
      <Box borderLeft="20px solid red">My border is now on the left!</Box>
      <BoxTextRight textAlign="right">Content aligns along the right side.</BoxTextRight>
    </>
  </DirectionManager>

  );
}
export const RTL = () => {

  return (
    <DirectionManager dir="ltr">
      <>
        <DirectionManager dir="ltr">
          <Box dir="ltr" borderLeft="20px solid red">My border is now on the right!</Box>
        </DirectionManager>
        <BoxTextRight textAlign="right">Content aligns along the right side.</BoxTextRight>
      </>
    </DirectionManager>
  );
}


export default {
  title: 'Core/Direction Manager',
  parameters: {
    notes: { markdown },
  },
};
