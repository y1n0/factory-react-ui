
import styled from 'styled-components';
import config, { DIMENSION_NAMES } from '../config';


const media = props => {
    const _propsArr = Object.keys(props);
    const _breakpoints = _propsArr.filter(_prop => ~DIMENSION_NAMES.indexOf(_prop));
    const _sortedBreakpoints = _breakpoints.sort((bp1, bp2) => DIMENSION_NAMES.indexOf(bp1) - DIMENSION_NAMES.indexOf(bp2));
    return _sortedBreakpoints.map(bp => config(props).media[bp]`
           ${
               props[bp] >= 0 ? `
                    flex-basis: ${100 / config(props).gridSize * props[bp]}%;
                    max-width: ${100 / config(props).gridSize * props[bp]}%;
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
        `);
}

const Col = styled.div`
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: ${props => config(props).gutterWidth / 2}px;
    padding-left: ${props => config(props).gutterWidth / 2}px;
    flex-grow: 1;
    flex-basis:0;
    ${p => p.reverse && `
        flex-direction: column-reverse;
    `}
    ${media}
    
`;

Col.defaultProps = {

};


export default Col;