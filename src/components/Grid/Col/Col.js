import React from "react";
import styled from "styled-components";
import { sortBreakpointProps, getGridSize, getGutterWidth } from "../helpers";
import { greaterThan } from "../../../core";
import { Box } from "../../Box";
import { space, layout, flexbox, compose } from "styled-system";

const generateMediaForCol = (props) => {
  return sortBreakpointProps(props).map((bp) => {
    return greaterThan(bp)`
           ${
             props[bp] >= 0
               ? `
                    flex-basis: ${(100 / getGridSize(props)) * props[bp]}%;
                    max-width: ${(100 / getGridSize(props)) * props[bp]}%;
                    display: block;
               `
               : props[bp]
               ? `
               flex-grow: 1;
               flex-basis: 0;
               max-width: 100%;
               display: block;
           `
               : `
               display: none;
           `
           }
        `;
  });
};

const StyledCol = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: ${(props) => getGutterWidth(props) / 2}px;
    padding-left: ${(props) => getGutterWidth(props) / 2}px;
    flex-grow: 1;
    flex-basis:0;
    max-width: 100%;
    ${(p) =>
      p.reverse &&
      `
        flex-direction: column-reverse;
    `}
    ${generateMediaForCol}
    ${compose(space, layout, flexbox)}
    
`;

const Col = (props) => <Box.WithoutConfig as={StyledCol} {...props} />;

export default Col;
