import React from 'react';
import styled from 'styled-components';
import { color,space, layout, flexbox, border, compose, typography } from 'styled-system';

const Box = styled('div')(
  compose(
    space,
    color,
    layout,
    flexbox,
    border,
    typography
  )
);

const ColorToken = ({colorType, colorShade = ''}) => {
  return (<Box mr='1rem' flexDirection='column' alignItems='center'>
    <Box borderRadius="4px" width="4rem" height="4rem" backgroundColor={`${colorType}${colorShade}`}></Box>
    <Box textAlign="center">
      {/* {colorType}<br />{colorShade} */}
    </Box>
  </Box>)
}

const ColorTokenList = (props) => {
  const {colorType, ...rest} = props;
  return (
    <Box mb="2rem" display="flex" width="100%" {...rest}>
      {[1,2,3,4,5,6,7,8,9].map(n => <ColorToken colorType={colorType} colorShade={`${n}00`}></ColorToken>)}
    </Box>
  )
}

export const Colors = (props ) => {

  return (
    <Box>
      <ColorTokenList colorType="black"></ColorTokenList>
      <ColorTokenList colorType="brand"></ColorTokenList>
      <ColorTokenList colorType="gray"></ColorTokenList>
      <ColorTokenList colorType="success"></ColorTokenList>
      <ColorTokenList colorType="info"></ColorTokenList>
      <ColorTokenList colorType="warning"></ColorTokenList>
      <ColorTokenList colorType="danger"></ColorTokenList>
    </Box>
  )
};


export default {
  title: 'Design Tokens/Colors',
  component: Colors
};
