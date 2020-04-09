import React from "react";
import IcoMoon from "react-icomoon";
import styled from "styled-components";
import { size, color, space } from "styled-system";
import css from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';

const iconSet = require("./selection.json");

// TODO: refactoring - duplicate code
const sx = props => css(props.sx)(props.theme);
const base = props => css(props.__css)(props.theme);

export const Icon = styled(IcoMoon, {shouldForwardProp}).attrs(props => ({
                        removeInlineStyle: true,
                        iconSet: iconSet,
                        icon: props.name || props.icon}))
  `
    display: inline-block;
    stroke: currentcolor;
    fill: currentcolor;
    ${color}
    ${size}
    ${space}
    ${base}
    ${sx}
  `;


export default Icon;