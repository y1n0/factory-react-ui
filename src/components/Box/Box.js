import styled from 'styled-components';
import { shadow, color, space, layout, flexbox, border, compose, typography } from 'styled-system';

const Box = styled('div')(
  compose(
    space,
    color,
    layout,
    flexbox,
    border,
    typography,
    shadow
  )
);

export default Box;

