import colors from "../constants/colors";




const inputs = {
    variants: {
        default: {
            color: 'black800',
            borderColor: 'gray500',
            borderWidth: 'xsmall',
            textDecoration: 'none',
            borderRadius: 'small',
            ':hover,:active': {
                boxShadow: `0 0 0 3px ${colors.gray300}`
            },
            ':focus': {
                borderColor: 'gray600',
                boxShadow: `0 0 0 3px ${colors.gray300}`
            },
            ':disabled': {
                backgroundColor: 'gray200',
                boxShadow: 'none',
                color: 'gray800',
                borderColor: 'gray500'
            }

        }
    },
    status: {
        primary: {
            borderColor: 'primary500',
            ':hover,:active': {
                boxShadow: `0 0 0 3px ${colors.primary200}`
            },
            ':focus': {
                borderColor: 'primary600',
                boxShadow: `0 0 0 3px ${colors.primary200}`
            }
        },
        danger : {
            borderColor: 'danger500',
            ':hover,:active': {
                boxShadow: `0 0 0 3px ${colors.danger200}`
            },
            ':focus': {
                borderColor: 'danger600',
                boxShadow: `0 0 0 3px ${colors.danger200}`
            }
        },
        success : {
            borderColor: 'success500',
            ':hover,:active': {
                boxShadow: `0 0 0 3px ${colors.success200}`
            },
            ':focus': {
                borderColor: 'success600',
                boxShadow: `0 0 0 3px ${colors.success200}`
            }
        },
        info : {
            borderColor: 'info500',
            ':hover,:active': {
                boxShadow: `0 0 0 3px ${colors.info200}`
            },
            ':focus': {
                borderColor: 'info600',
                boxShadow: `0 0 0 3px ${colors.info200}`
            }
        },
        warning : {
            borderColor: 'warning500',
            ':hover,:active': {
                boxShadow: `0 0 0 3px ${colors.warning200}`
            },
            ':focus': {
                borderColor: 'warning600',
                boxShadow: `0 0 0 3px ${colors.warning200}`
            }
        }
    },
    sizes: {
        small: {
            paddingY: 'xxsmall',
            paddingX: 'xsmall',
            fontSize: '14px',
            lineHeight: '20px'

        },
        medium: {
            paddingY: 'xsmall',
            paddingX: 'xsmall',
            fontSize: '16px',
            lineHeight: '24px'
        },
        large: {
            paddingY: 'small',
            paddingX: 'small',
            fontSize: '18px',
            lineHeight: '26px'
        }
    }
};


export default inputs;