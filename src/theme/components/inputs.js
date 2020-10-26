import colors from "../constants/colors";




const inputs = {

    iconContainer: {
        width: '30px'
    },
    variants: {
        default: {
            color: 'black800',
            borderColor: 'gray500',
            borderWidth: '1px',
            borderRadius: 'small',
            ':hover,:active': {
                boxShadow: 'none'
            },
            ':focus': {
                borderColor: 'primary600',
                boxShadow: `0 0 0 2px ${colors.primary600}`
            },
            ':disabled': {
                backgroundColor: 'gray200',
                boxShadow: 'none',
                color: 'gray800',
                borderColor: 'gray500'
            }
        },
        dam: {
            color: '#707070',
            borderColor: '#dfdfdf',
            borderWidth: '1px',
            borderRadius: 'rounded',
            lineHeight: '30px',
            fontSize: '16px',
            width: '100%',
            ':hover,:active': {
                boxShadow: 'none'
            },
            ':focus': {
                borderColor: '#dfdfdf',
                boxShadow: 'none'
            },

            ':disabled': {
                backgroundColor: 'gray200',
                boxShadow: 'none',
                color: 'gray800',
                borderColor: 'gray500'
            }
        },
        awb: {
            color: '#000',
            border: '2px solid #f5c000',
            backgroundColor: '#fff',
            fontWeight: 700,
            borderRadius: 'none',
            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)',
            transition: 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
            ':hover,:active': {
                boxShadow: 'none'
            },
            ':focus': {
                borderColor: '#f5c001',
                outline: '0',
                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(245,192,1,.6)'
            },

            ':disabled': {
                backgroundColor: 'gray200',
                boxShadow: 'none',
                color: 'gray800',
                borderColor: 'gray500'
            }
        }
    },
    states: {
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
};


export default inputs;