import React from 'react';
import {Box} from '../Box';
import Text from './Text';



const customText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas dui dolor";

export const DefaultText = () => {
    return (
        <Box>
            <Text mb="medium">{customText}</Text>
            <Text fontWeight="thin"
                  fontSize="subheader"
                  textAlign="center"
                  color="primary500"
                  >{customText}</Text>
        </Box>
    );
}

export default {
    title: 'Typography/Text',
};
  