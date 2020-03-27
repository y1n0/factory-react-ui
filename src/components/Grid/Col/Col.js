
import styled from 'styled-components';
import config, { lessThan, sortPropsBreakpoint } from '../config';


const generateMediaForCol = props => {
    return sortPropsBreakpoint(props).map(bp => lessThan(bp)`
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
    ${generateMediaForCol}
    
`;

Col.defaultProps = {

};


export default Col;