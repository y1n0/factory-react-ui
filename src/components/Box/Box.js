import styled from "styled-components";
import {
  boxShadow,
  color,
  space,
  layout,
  flexbox,
  border,
  compose,
  position,
  typography,
} from "styled-system";

import { props as systemProps } from "@styled-system/should-forward-prop";
import { variant, base, sx } from "../../core";

// const customShouldForwardProp

export const BoxWithoutConfig = styled("div")(
  {
    boxSizing: "border-box",
    margin: 0,
    minWidth: 0,
  },
  base,
  sx,
  (props) => props.css,
  (props) => props.styledCss,
  compose(
    space,
    color,
    layout,
    flexbox,
    border,
    typography,
    boxShadow,
    position
  ),
  variant
);

const Box = styled(BoxWithoutConfig).withConfig({
  shouldForwardProp: (prop, defaultValidatorFn) => {
    return defaultValidatorFn(prop) && !systemProps.includes(prop);
  },
})({});

Box.WithoutConfig = BoxWithoutConfig;



const Flex = styled(Box)({
  display: "flex",
});

Flex.WithoutConfig = styled(BoxWithoutConfig)({
  display: "flex",
});

export {Box, Flex};

export default Box;
