import React from 'react';
import {Button} from '../Button';


const Anchor = ({href,children, ...rest}) => {
    return <Button as="a" href={href} {...rest}>{children}</Button>
}


export {Anchor};