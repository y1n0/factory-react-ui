import React from 'react';
import Text from './Text';


const Paragraph = (props) => {
    const {
        color,
        fontFamily,
        ...rest
    } = props;

    return (
        <Text   
                fontSize="paragraph"
                lineHeight="paragraph"
                mb="xsmall"
                fontFamily={fontFamily}
                color={color}>{props.children}</Text>
    );
}


Paragraph.defaultProps = {
}

export default Paragraph;