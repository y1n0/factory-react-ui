import styled, { css, keyframes } from 'styled-components';
import { themeGet } from '@styled-system/theme-get'
import { generateMedia } from '../../core/styled-media';

import { Box} from '../Box';

const StyledLayer = styled.div`
    /* base style goes here */

    background: ${themeGet('colors.primary200')};
    position: relative;
    z-index: ${themeGet('layer.zIndex')};
    pointer-events: none;
    outline: none;

    ${props => {
        if (props.position === 'hidden') {
            return css`
                left: -100%;
                right: 100%;
                z-index: -1;
                position: fixed;
            `;
        }
        const styles = [];
        if (props.targetBounds) {
            const { left, right, top, bottom } = props.targetBounds;
            styles.push(css`
                    position: fixed;
                    top: ${top}px;
                    left: ${left}px;
                    right: ${right}px;
                    bottom: ${bottom}px;
            `);
        } else {
            styles.push(css`
                position: fixed;
                top: 0px;
                left: 0px;
                right: 0px;
                bottom: 0px;
            `);
        }
        const responsiveBreakpoint = themeGet('layer.responsiveBreakpoint', false)(props);
        if (props.responsive && responsiveBreakpoint) {

            styles.push(generateMedia(themeGet('breakpoints')(props)).lessThan(responsiveBreakpoint)`
                position: absolute;
                width: 100%;
                height: 100%;
                min-height: 100vh;
            `)
        }
        return styles;
    }}

    ${themeGet('layer.extend')}

`;
// TODO : set DefaultProps to StyledLayer
StyledLayer.defaultProps = {

};


const getColor = colorName => props => themeGet(`colors.${colorName}`)(props);

const StyledOverlay = styled.div`
    position: absolute;
    ${props => {
        const responsiveBreakpoint = themeGet('layer.responsiveBreakpoint',  false)(props);
        if (props.responsive && responsiveBreakpoint) {
            return generateMedia(themeGet('breakpoints')(props)).lessThan(responsiveBreakpoint)`
                position: relative;
            `;
        }
        return '';
    }}
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    ${props => !props.plain && themeGet('layer.overlay.background')(props) && `background-color: ${getColor(themeGet('layer.overlay.background')(props))(props)};` }
    pointer-events: all;
`;



// const StyledOverlay2 = props => {
//     const responsiveBreakpoint = themeGet('layer.responsiveBreakpoint',  false)(props);
//     position = 
//     return (
//         <Box
//             sx={{
//                 position: absolute,
//                 backgroundColor: !props.plain && themeGet('layer.overlay.background')(props),
//                 top: '0px',
//                 left: '0px',
//                 right: '0px',
//                 bottom: '0px',
//                 position: {
//                     ''
//                 },
//                 pointerEvents: 'all', 
//             }}
        
//         >
//             {props.children}
//         </Box>
//     );

// }
export { StyledLayer, StyledOverlay};