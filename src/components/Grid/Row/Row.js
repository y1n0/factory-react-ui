import React from 'react';
import styled from 'styled-components';
import {getOuterMargin} from '../helpers';
import {Box} from '../../Box';

import { space, layout, flexbox, compose } from "styled-system";

const StyledRow = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    margin-right: ${props => getOuterMargin(props) * -1}px;
    margin-left: ${props => getOuterMargin(props) * -1}px;
    ${compose(space, layout, flexbox)}
`;

const Row = props => <Box.WithoutConfig as={StyledRow} {...props}/>

export default Row;