import React from 'react';
import { Box } from '../components/Box';


const ColorToken = ({ colorType, colorShade = '' }) => {
  return (<Box mr='1rem' flexDirection='column' alignItems='center'>
    <Box borderRadius="4px" width="4rem" height="4rem" backgroundColor={`${colorType}${colorShade}`}></Box>
    <Box textAlign="center" fontWeight="light" color="black200" fontSize="caption">
      {colorType}<br />{colorShade}
    </Box>
  </Box>)
}

const ColorTokenList = (props) => {
  const { colorType, ...rest } = props;
  return (
    <Box mb="1rem" display="flex" width="100%" {...rest}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(n => <ColorToken key={n} colorType={colorType} colorShade={`${n}00`}></ColorToken>)}
    </Box>
  )
}

export const Colors = (props) => {
  return (
    <Box>
      <Box mb="1rem" display="flex" width="100%">
        <ColorToken colorType="black"></ColorToken>
        <ColorToken colorType="white"></ColorToken>
        <ColorToken colorType="transparent"></ColorToken>
      </Box>
      <ColorTokenList colorType="black"></ColorTokenList>
      <ColorTokenList colorType="primary"></ColorTokenList>
      <ColorTokenList colorType="gray"></ColorTokenList>
      <ColorTokenList colorType="success"></ColorTokenList>
      <ColorTokenList colorType="info"></ColorTokenList>
      <ColorTokenList colorType="warning"></ColorTokenList>
      <ColorTokenList colorType="danger"></ColorTokenList>
    </Box>
  )
};
export const FontFamily = (props) => {
  return (
    <Box>
      <Box color="black900" fontSize="title" fontFamily="sans" borderBottom="2px solid black" borderColor="black400" my="1rem">sans</Box>
      <Box display="flex" flexDirection="column" fontFamily="sans" color="black900" fontSize="title">
        <Box mb="0.5rem" ml="1rem" fontWeight="thin">Thin</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="light">Light</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="regular">Regular</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="medium">Medium</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="bold">Bold</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="black">Black</Box>
      </Box>
      <Box color="black900" fontSize="title" fontFamily="serif" borderBottom="2px solid black" borderColor="black400" my="1rem">serif</Box>
      <Box display="flex" flexDirection="column" fontFamily="serif" color="black900" fontSize="title">
        <Box mb="0.5rem" ml="1rem" fontWeight="thin">Thin</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="light">Light</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="regular">Regular</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="medium">Medium</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="bold">Bold</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="black">Black</Box>
      </Box>
      <Box color="black900" fontSize="title" fontFamily="monospace" borderBottom="2px solid black" borderColor="black400" my="1rem">monospace</Box>
      <Box display="flex" flexDirection="column" fontFamily="monospace" color="black900" fontSize="title">
        <Box mb="0.5rem" ml="1rem" fontWeight="thin">Thin</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="light">Light</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="regular">Regular</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="medium">Medium</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="bold">Bold</Box>
        <Box mb="0.5rem" ml="1rem" fontWeight="black">Black</Box>
      </Box>
    </Box>
  )
};

export const FontSize = (props) => {
  return (
    <Box>
    <Box color="black900" fontSize="title" fontFamily="sans" borderBottom="2px solid black" borderColor="black400" my="1rem">Font size</Box>
      <Box display="flex" flexDirection="column" fontFamily="sans" color="black900">
        <Box mb="0.5rem" ml="1rem" fontSize="tiny">Tiny</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="caption">Caption</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="body">Body</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="paragraph">Paragraph</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="subheader">Subheader</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="title">Title</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="heading1">heading 1</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="heading2">heading 2</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="heading3">heading 3</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="heading4">heading 4</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="heading5">heading 5</Box>
        <Box mb="0.5rem" ml="1rem" fontSize="heading6">heading 6</Box>
      </Box>
    </Box>
  )
};



export const Sizing = (props) => {
  return (
    <Box>
    <Box color="black900" fontSize="title" fontFamily="sans" borderBottom="2px solid black" borderColor="black400" my="1rem">Sizing</Box>
      <Box mb="1rem" display="flex" width="100%">
        <Box mr="1rem" width="xxxsmall" height="xxxsmall" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="xxsmall" height="xxsmall" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="xsmall" height="xsmall" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="small" height="small" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="medium" height="medium" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="large" height="large" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="xlarge" height="xlarge" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="xxlarge" height="xxlarge" backgroundColor="gray800" ></Box>
        <Box mr="1rem" width="xxxlarge" height="xxxlarge" backgroundColor="gray800" ></Box>
      </Box>
    </Box>
  )
};

export const Shadows = (props) => {
  return (
    <Box>
      <Box color="black900" fontSize="title" fontFamily="sans" borderBottom="2px solid black" borderColor="black400" my="1rem">Shadows</Box>
      <Box mb="1rem" display="flex" width="100%">
        <Box borderRadius="4px" mr="2rem" boxShadow={0} width="6rem" height="6rem" backgroundColor="white" ></Box>
        <Box borderRadius="4px" mr="2rem" boxShadow={1} width="6rem" height="6rem" backgroundColor="white" ></Box>
        <Box borderRadius="4px" mr="2rem" boxShadow={2} width="6rem" height="6rem" backgroundColor="white" ></Box>
        <Box borderRadius="4px" mr="2rem" boxShadow={3} width="6rem" height="6rem" backgroundColor="white" ></Box>
        <Box borderRadius="4px" mr="2rem" boxShadow={4} width="6rem" height="6rem" backgroundColor="white" ></Box>
      </Box>
    </Box>
  )
}


export const Borders = () => {
  return (
    <Box>
    <Box color="black900" fontSize="title" fontFamily="sans" borderBottom="2px solid black" borderColor="black400" my="1rem">Borders</Box>
      <Box color="black500" mb="1rem" display="flex" width="100%">
        <Box display="flex" alignItems="center" justifyContent="center" border="primary" mr="2rem" width="6rem" height="6rem" backgroundColor="gray100">primary</Box>
        <Box display="flex" alignItems="center" justifyContent="center" border="black" mr="2rem" width="6rem" height="6rem" backgroundColor="gray100">black</Box>
        <Box display="flex" alignItems="center" justifyContent="center" border="gray" mr="2rem" width="6rem" height="6rem" backgroundColor="gray100">gray</Box>
        <Box display="flex" alignItems="center" justifyContent="center" border="danger" mr="2rem" width="6rem" height="6rem" backgroundColor="gray100">danger</Box>
        <Box display="flex" alignItems="center" justifyContent="center" border="success" mr="2rem" width="6rem" height="6rem" backgroundColor="gray100">success</Box>
        <Box display="flex" alignItems="center" justifyContent="center" border="info" mr="2rem" width="6rem" height="6rem" backgroundColor="gray100">info</Box>
        <Box display="flex" alignItems="center" justifyContent="center" border="warning" mr="2rem" width="6rem" height="6rem" backgroundColor="gray100">warning</Box>
      </Box>
    </Box>
  );
};


export const BorderRadius = () => {
  return (
    <Box>
      <Box color="black900" fontSize="title" fontFamily="sans" borderBottom="2px solid black" borderColor="black400" my="1rem">Border radius</Box>
      <Box color="black500" mb="1rem" display="flex" width="100%" fontSize="caption">
        <Box borderRadius="none" display="flex" alignItems="center" justifyContent="center" mr="2rem" width="3rem" height="3rem" backgroundColor="primary200">none</Box>
        <Box borderRadius="xsmall" display="flex" alignItems="center" justifyContent="center" mr="2rem" width="3rem" height="3rem" backgroundColor="primary200">xsmall</Box>
        <Box borderRadius="small" display="flex" alignItems="center" justifyContent="center" mr="2rem" width="3rem" height="3rem" backgroundColor="primary200">small</Box>
        <Box borderRadius="medium" display="flex" alignItems="center" justifyContent="center" mr="2rem" width="3rem" height="3rem" backgroundColor="primary200">medium</Box>
        <Box borderRadius="large" display="flex" alignItems="center" justifyContent="center" mr="2rem" width="3rem" height="3rem" backgroundColor="primary200">large</Box>
        <Box borderRadius="xlarge" display="flex" alignItems="center" justifyContent="center" mr="2rem" width="3rem" height="3rem" backgroundColor="primary200">xlarge</Box>
        <Box borderRadius="rounded" display="flex" alignItems="center" justifyContent="center" mr="2rem" width="3rem" height="3rem" backgroundColor="primary200">rounded</Box>
      </Box>
    </Box>
  );
}


export default {
  title: 'Design Tokens',
  component: Colors
};
