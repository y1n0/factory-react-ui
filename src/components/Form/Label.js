import React from 'react';
import {Flex} from '../Box'


const Label = ({children, variant, ...props}) => {
    return <Flex __css={{width:"100%"}} as="label" {...props} variant={variant}>
        {children}
    </Flex>
}

export default Label;