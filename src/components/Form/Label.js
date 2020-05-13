import React from 'react';
import {Flex} from '../Box'


export const Label = ({children, variant, ...props}) => {
    return <Flex as="label" {...props} variant={variant}>
        {children}
    </Flex>
}