
/**
 * Design tokens
 * -------------------- 
 * Breakpoints
 */

const breakpoints = [
    '500px', 
    '960px', 
    '1280px', 
    '1920px'
];

breakpoints.md = '960px';
breakpoints.sm = '500px'; 
breakpoints.xs = '0px';
breakpoints.lg = '1280px'; 
breakpoints.xl = '1920px';

export default breakpoints;

export const gridSystem =  {
    gridSize: 12,
    gutterWidth: 16,
    outerMargin: 8,
    container: {
        sm: '450px', 
        md: '900px', 
        lg: '1200px',  
        xl: '1900px',
    }
}