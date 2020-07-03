import React from 'react';
import { Box } from '../Box';


export const Text = ({ children, as = 'p', ...rest }) => <Box {...rest} as={as} __css={{
    fontSize: 'inherit',
    fontWeight: 'inherit',
    lineHeight: 'inherit',
    ...rest.__css
}}>
    {children}
</Box>

export const Paragraph = ({
    children,
    variant = "paragraph.default",
    ...rest
}) => {

    return (
        <Text __css={{
            fontSize: "paragraph",
            lineHeight: "paragraph",
            mb: "xsmall",
        }}
        variant={variant}
            {...rest}>
            {children}
        </Text>
    );
}

export const Heading = ({
    children,
    level = '1',
    variant = "heading.default",
    ...rest
}) => <Text
    __css={{
        fontSize: `heading${level}`,
        lineHeight: `heading${level}`,
        mb: "small",
    }}
    variant={variant}
    {...rest}
    as={`h${level}`}>{children}</Text>



export default Text;


