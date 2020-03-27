
import styled, {css} from 'styled-components';
import config, {DIMENSION_NAMES} from '../config';


const Container = styled.div`
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-left: ${props => config(props).outerMargin}px;
    padding-right: ${props => config(props).outerMargin}px;
    width: 100%;
    ${(props) => !props.fluid &&
                css`
                    ${DIMENSION_NAMES.map(dim => config(props).container[dim] && config(props).media[dim]`width: ${(props) => config(props).container[dim]};`)}
                `
        }
`;

Container.defaultProps = {
    fluid: false
};


export default Container;