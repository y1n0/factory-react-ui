
import styled, {css} from 'styled-components';
import {BREAKPOINTS, lessThan} from '../config';
import {getOuterMargin, getContainer} from '../helpers';


const Container = styled.div`
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-left: ${props => getOuterMargin(props)}px;
    padding-right: ${props => getOuterMargin(props)}px;
    width: 100%;
    ${(props) => !props.fluid &&
                css`
                    ${Object.keys(BREAKPOINTS).map(dim => getContainer(props)(dim) && lessThan(dim)`width: ${(props) => getContainer(props)(dim)};`)}
                `
        }
`;

Container.defaultProps = {
    fluid: false
};


export default Container;