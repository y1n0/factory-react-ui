import styled from 'styled-components';
import {getGutterWidth} from '../helpers';
import { flexbox } from 'styled-system';

const Row = styled.div`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: ${props => getGutterWidth(props) / 2 * -1}px;
    margin-left: ${props => getGutterWidth(props) / 2 * -1}px;
    ${flexbox}
`;

Row.defaultProps = {
    
};

export default Row;