
import styled from 'styled-components';
import {sortBreakpointProps, getGridSize, getGutterWidth} from '../helpers';
import {generateMedia} from '../../../core';


const generateMediaForCol = props => {
    return sortBreakpointProps(props).map(bp => {
        return generateMedia(props).greaterThan(bp)`
           ${
               props[bp] >= 0 ? `
                    flex-basis: ${100 / getGridSize(props) * props[bp]}%;
                    max-width: ${100 / getGridSize(props) * props[bp]}%;
                    display: block;
               ` : (props[bp] ? `
               flex-grow: 1;
               flex-basis: 0;
               max-width: 100%;
               display: block;
           ` : `
               display: none;
           ` )
           }
        `});
}

const Col = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: ${props => getGutterWidth(props) / 2}px;
    padding-left: ${props => getGutterWidth(props) / 2}px;
    flex-grow: 1;
    flex-basis:0;
    max-width: 100%;
    ${p => p.reverse && `
        flex-direction: column-reverse;
    `}
    ${generateMediaForCol}
    
`;

Col.defaultProps = {

};


export default Col;