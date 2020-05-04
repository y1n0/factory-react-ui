
import styled, {css} from 'styled-components';
import {getOuterMargin, getContainer} from '../helpers';
import {generateMedia} from '../../../core';

const generateMediaforContainer = props => {
    // TODO refactoring props.theme.breakpoint , getTheme('breakpoint')
    const breakpointsName = Object.keys(props.theme.breakpoints);
    console.log('generateMediaforContainer: breakpointsName :', breakpointsName);
    if(!props.fluid) {
        return css`
            ${breakpointsName.map(breakpoint => {
                console.log('>> maping: breakpoint :', breakpoint);
                if(getContainer(props)(breakpoint)) {
                    return generateMedia(props.theme.breakpoints).greaterThan(breakpoint)`
                        width: ${(props) => getContainer(props)(breakpoint)};
                    `
                } else {
                    return null;
                }
            })}
        `;

    }
};

const Container = styled.div`
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-left: ${props => getOuterMargin(props)}px;
    padding-right: ${props => getOuterMargin(props)}px;
    width: 100%;
    ${generateMediaforContainer}
`;

Container.defaultProps = {
    fluid: false
};


export default Container;