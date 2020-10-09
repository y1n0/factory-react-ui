import React from 'react';
import { getVariant } from '../../core';
import { Box } from '../Box';
import { themeGet } from '@styled-system/theme-get';
import { withTheme } from 'styled-components';


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

export const Heading = withTheme(
    ({
        children,
        level = '1',
        variant = "heading.default",
        ...rest
    }) => {
        let variantName = getVariant([variant, 'h'+level]);

        // use the extact variant passed in props
        // if the level specific one is not defined
        const levelSpecificVariantExists = !!themeGet(variantName)(rest);
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
)



export default Text;


