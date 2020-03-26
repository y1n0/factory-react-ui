import React from 'react';
import Text from './Text';


const Heading = (props) => {
    const {
        level,
        color,
        fontFamily,
        ...rest
    } = props;

    return (
        <Text   as={`h${level}`}
                mb="small"
                fontSize={`heading${level}`}
                lineHeight={`heading${level}`}
                fontFamily={fontFamily}
                color={color}>{props.children}</Text>
    );
}


Heading.defaultProps = {
    level: 1,
    fontFamily: 'sans'
}

export default Heading;