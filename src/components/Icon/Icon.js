
import IcoMoon from "react-icomoon";
import styled from "styled-components";
import { size, color, space } from "styled-system";
import shouldForwardProp from '@styled-system/should-forward-prop';
import { sx, base } from "../../core";
import iconSet from './selection.json';

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