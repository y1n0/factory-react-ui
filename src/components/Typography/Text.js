import React from 'react';
import { getVariant } from '../../core';
import { Box } from '../Box';
import { get } from 'styled-system';
import { ThemeContext } from 'styled-components';


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
}) => {
    let variantName = getVariant([variant, 'h'+level]);
    const theme = React.useContext(ThemeContext);

    // use the extact variant passed in props
    // if the level specific one is not defined
    const levelSpecificVariantExists = !!get(theme, variantName);
    if (!levelSpecificVariantExists)
        variantName = variant;

    return <Text
    __css={{
        fontSize: `heading${level}`,
        lineHeight: `heading${level}`,
        mb: "small",
    }}
    variant={variantName}
    {...rest}
    as={`h${level}`}>{children}</Text>
}



export default Text;


