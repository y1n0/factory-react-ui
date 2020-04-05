import styled from 'styled-components';
import { typography, display, variant, space, color } from 'styled-system';


const labelVariants = variant({
    prop: 'variant',
    scale: 'labels.variants',
    variants: {
        default: {
        }
    }
})


const Label = styled.label`
    display: inline-block;
    max-width: 100%;

    ${labelVariants}
    ${space}
    ${color}
    ${typography}
    ${display}
`;



export default Label;