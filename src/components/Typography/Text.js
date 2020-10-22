import React from 'react';
import { Box } from '../Box';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

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
        <Text variant={variant}
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
        const variantName = themeGet(variant + '.h'+level)(rest) ? variant + '.h'+level : variant;
        return <Text
        variant={variantName}
        {...rest}
        as={`h${level}`}>{children}</Text>
    }
)



export default Text;


