import React from 'react';
import styled, {css} from 'styled-components';
import {getOuterMargin, getContainer} from '../helpers';
import {greaterThan} from '../../../core';
import {Box} from '../../Box';
import { space, layout, flexbox, compose } from "styled-system";

const generateMediaforContainer = props => {
    const breakpointsName = Object.keys(props.theme.breakpoints);
    if(!props.fluid) {
        return css`
            ${breakpointsName.map(breakpoint => {
                if(getContainer(props)(breakpoint)) {
                    return greaterThan(breakpoint)`
                        max-width: ${(props) => getContainer(props)(breakpoint)};
                    `
                } else {
                    return null;
                }
            })}
        `;

    }
};

const StyledContainer = styled.div`
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-left: ${props => getOuterMargin(props)}px;
    padding-right: ${props => getOuterMargin(props)}px;
    width: 100%;
    ${generateMediaforContainer}
    ${compose(space, layout, flexbox)}
`;

const Container = ({fluid = false, ...rest}) => {
    return <Box.WithoutConfig as={StyledContainer}  fluid={fluid} {...rest} />
}

Container.defaultProps = {
    fluid: false
};


export default Container;