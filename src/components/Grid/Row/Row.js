import styled from 'styled-components';
import config from '../config';
import { flexbox } from 'styled-system';

const Row = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: ${props => config(props).gutterWidth / 2 * -1}px;
    margin-left: ${props => config(props).gutterWidth / 2 * -1}px;
    ${flexbox}
`;

Row.defaultProps = {
    
};

export default Row;