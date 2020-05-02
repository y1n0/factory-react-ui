import React from 'react';
import {Button} from './Button';


const Link = ({href, children,  ...rest}) => {
    return <Button as="a" href={href} {...rest}>{children}</Button>;
};


export default Link;