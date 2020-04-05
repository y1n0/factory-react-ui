import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { color, typography, background, border, position, shadow, variant, compose, width, height, display, padding, margin } from 'styled-system';
import  {getValueAndUnit, stripUnit} from 'polished';


const custtomStyledLayout = compose(
    width,
    height,
    display,
);
const styledSystem = compose(
    padding,
    color,
    typography,
    background,
    border,
    position,
    shadow,
    custtomStyledLayout,
);

const variantVariants = variant({
    scale: 'inputs.variants',
    prop: 'variant',
    variants: {
        primary: {

        }
    }
});
const variantStatus = variant({
    scale: 'inputs.status',
    prop: 'status',
    variants: {
        primary: {

        }
    }
});

const variantSizes = variant({
    scale: 'inputs.sizes',
    prop: 'size',
    variants: {
        medium: {
            padding: 'xsmall',
            fontSize: '16px',
            lineHeight: '24px'
        }
    }
});


const StyledIcon = styled.div`
  position: absolute;
  width: ${props=> props.sizeIcon};

  display: flex;
  align-items: center;
  justify-content: center;
  top:0;
  bottom: 0;
  ${props =>
    props.reverse
      ? `right: ${parseInt(props.theme.space[props.theme.inputs.sizes[props.size].paddingX].slice(0,-2))}px ;`
      : `left: ${parseInt(props.theme.space[props.theme.inputs.sizes[props.size].paddingX].slice(0,-2))}px;`}
`;

const StyledTextInputContainer = styled.div`
    display:flex;
    position: relative;
    width: fit-content;
    ${width}
    ${margin}
`;

const getIconSize = (icon, theme) => {
    const valueAndUnit = icon.props && getValueAndUnit(icon.props.size)
    const value = valueAndUnit[0];
    const unit = valueAndUnit[1];
    if(unit === '%') {
        return theme.inputs.iconContainer.width;
    } else if(unit === 'px') {
        return value+unit;
    } else {
        console.error('The size of icon should be in \`px\` or \'%\'.');
    }
};

const StyledInput = styled.input`
    display: block;
    padding: 2px;
    appearance: none;
    font-size: inherit;
    line-height: inherit;
    border: 1px solid;
    color: inherit;
    background: transparent;

    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px;
    }

    ${variantVariants}
    ${variantStatus}
    ${variantSizes}

    ${props =>  props.icon && 
                (props.reverse
                    ? `padding-right: ${stripUnit(props.theme.space[props.theme.inputs.sizes[props.size].paddingX])*2 + stripUnit(props.sizeIcon)}px ;`
                    : `padding-left: ${stripUnit(props.theme.space[props.theme.inputs.sizes[props.size].paddingX])*2 + stripUnit(props.sizeIcon)}px ;` )
    }
     ${styledSystem}
`;

StyledInput.defaultProps = {
    type: 'text',
    variant: 'default',
    size: 'medium'
}





export const Input  = React.forwardRef(({as, ...props}, ref) => {

    const theme = useContext(ThemeContext);

    return (
        <StyledTextInputContainer {...props}>
            {props.icon && 
                    <StyledIcon theme={theme} size={props.size} reverse={props.reverse} sizeIcon={props.icon && getIconSize(props.icon, theme)} >
                        {props.icon}
                    </StyledIcon>
            }
            <StyledInput as={as} {...props} ref={ref} sizeIcon={props.icon && getIconSize(props.icon, theme)} />
        </StyledTextInputContainer>

    );
})

Input.defaultProps = {
    as: 'input',
    type: 'text',
    variant: 'default',
    size: 'medium'
}


export default Input;