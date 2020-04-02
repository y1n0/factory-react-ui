import colors from './colors';


/**
 * Design tokens
 * -------------------- 
 * Border
 */
const borders = {
    primary     : `1px solid ${colors.primary500}`,
    success     : `1px solid ${colors.success500}`,
    danger      : `1px solid ${colors.danger500}`,
    info        : `1px solid ${colors.info500}`,
    warning     : `1px solid ${colors.warning500}`,
    black       : `1px solid ${colors.black500}`,
    gray        : `1px solid ${colors.gray500}`,
};


export const radii = {
    none    : '0px',
    xsmall  : '2px',
    small   : '4px',
    medium  : '6px',
    large   : '8px',
    xlarge  : '12px',
    rounded : '1000rem'  
};


export const borderWidths = {
    none    : 'Opx',
    xsmall  : '1px',
    small   : '2px',
    medium  : '4px',
    large   : '8px'
};

export const borderStyles = {
    
};

export default borders;