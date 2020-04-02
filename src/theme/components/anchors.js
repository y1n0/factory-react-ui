

const anchors = {
    variants: {
        primary: {
            color: 'primary500',
            textDecoration: 'none',
            '&:hover': {
                color: 'primary600',
                textDecoration: 'underline',

            },
            '&:disabled': {
                color: 'gray300',
            }
        },
        danger : {
            color: 'danger500',
            textDecoration: 'none',
            '&:hover': {
                color: 'danger600',
                textDecoration: 'underline',

            },
            '&:disabled': {
                color: 'danger300',
            }
        },
        success : {
            color: 'success500',
            textDecoration: 'none',
            '&:hover': {
                color: 'success600',
                textDecoration: 'underline',

            },
            '&:disabled': {
                color: 'success300',
            }
        },
        info : {
            color: 'info500',
            textDecoration: 'none',
            '&:hover': {
                color: 'info600',
                textDecoration: 'underline',

            },
            '&:disabled': {
                color: 'info300',
            }
        },
        warning : {
            color: 'warning500',
            textDecoration: 'none',
            '&:hover': {
                color: 'warning600',
                textDecoration: 'underline',

            },
            '&:disabled': {
                color: 'warning300',
            }
        }
    },
};


export default anchors;