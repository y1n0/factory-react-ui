
/**
 * Design tokens
 * -------------------- 
 * Breakpoints
 */

const breakpoints = [
    '576px', 
    '768px', 
    '992px', 
    '1200px'
];

breakpoints.xs = '0px';
breakpoints.sm = '576px'; 
breakpoints.md = '768px';
breakpoints.lg = '992px'; 
breakpoints.xl = '1200px';

export default breakpoints;

export const gridSystem =  {
    gridSize: 12,
    gutterWidth: 16,
    outerMargin: 8,
    container: {
        sm: '540px', 
        md: '720px', 
        lg: '960px',  
        xl: '1140px',
    }
}