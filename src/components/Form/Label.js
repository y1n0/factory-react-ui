import styled from 'styled-components';
import { typography, display, variant, space, color, flexbox } from 'styled-system';


const labelVariants = variant({
    prop: 'variant',
    scale: 'labels.variants',
    variants: {
        default: {
        }
    }
})


const Label = styled.label`
    display: flex;
    width: 100%;

    ${labelVariants}
    ${space}
    ${color}
    ${typography}
    ${display}
    ${flexbox}
`;



export default Label;