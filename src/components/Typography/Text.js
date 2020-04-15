import styled from 'styled-components';
import { color, typography, margin, display } from 'styled-system';

const Text = styled.p`
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    ${color}
    ${typography}
    ${display}
    ${margin}
`;


export default Text;


