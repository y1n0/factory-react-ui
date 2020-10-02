import React from 'react';
import styled from 'styled-components';
import {getOuterMargin} from '../helpers';
import { flexbox } from 'styled-system';
import {Box} from '../../Box';

const StyledRow = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-wrap: wrap;
    margin-right: ${props => getOuterMargin(props) * -1}px;
    margin-left: ${props => getOuterMargin(props) * -1}px;
    ${flexbox}
`;

const Row = props => <Box as={StyledRow} {...props}/>

export default Row;