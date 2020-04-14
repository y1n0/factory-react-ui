import styled from 'styled-components';
import {
  shadow,
  color,
  space,
  layout,
  flexbox,
  border,
  compose,
  typography } from 'styled-system';
import css, { get } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

// TODO: refactoring - duplicate code
const sx = props => css(props.sx)(props.theme);
const base = props => css(props.__css)(props.theme);

const variant = ({
  theme,
  variant,
}) => css(get(theme, variant))(theme)

export const Box = styled('div', {shouldForwardProp})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  base,
  variant,
  sx,
  props => props.css,
  props => props.styledCss,
  compose(
    space,
    color,
    layout,
    flexbox,
    border,
    typography,
    shadow
  ),
);

export const Flex = styled(Box)({
  display: 'flex'
})

export default Box;

