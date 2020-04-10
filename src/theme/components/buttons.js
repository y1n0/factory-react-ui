

const buttons = {
    variants: {
        primary: {
            backgroundColor: 'primary500',
            color: 'white',
            fontSize: 'paragraph',
            lineHeight: 'paragraph',
            borderWidth: '2px',
            borderColor: 'transparent',
            ':hover': {
                backgroundColor: 'primary600',
                color: 'white',
                borderColor: 'primary600',
            },
            ':disabled': {
                backgroundColor: 'primary100',
                color: 'primary300',
                borderColor: 'primary200',
            }
        },
        danger : {
            backgroundColor: 'danger500',
            color: 'white',
            fontSize: 'paragraph',
            lineHeight: 'paragraph',
            borderWidth: '2px',
            borderColor: 'transparent',
            ':hover': {
                backgroundColor: 'danger600',
                color: 'white',
                borderColor: 'danger600',
            },
            ':disabled': {
                backgroundColor: 'danger100',
                color: 'danger300',
                borderColor: 'danger200',
            }
        },
        success : {
            backgroundColor: 'success500',
            color: 'white',
            fontSize: 'paragraph',
            lineHeight: 'paragraph',
            borderWidth: '2px',
            borderColor: 'transparent',
            ':hover': {
                backgroundColor: 'success600',
                color: 'white',
                borderColor: 'success600',
            },
            ':disabled': {
                backgroundColor: 'success100',
                color: 'success300',
                borderColor: 'success200',
            }
        },
        info : {
            backgroundColor: 'info500',
            color: 'white',
            fontSize: 'paragraph',
            lineHeight: 'paragraph',
            borderWidth: '2px',
            borderColor: 'transparent',
            ':hover': {
                backgroundColor: 'info600',
                color: 'white',
                borderColor: 'info600',
            },
            ':disabled': {
                backgroundColor: 'info100',
                color: 'info300',
                borderColor: 'info200',
            }
        },
        warning : {
            backgroundColor: 'warning500',
            color: 'white',
            fontSize: 'paragraph',
            lineHeight: 'paragraph',
            borderWidth: '2px',
            borderColor: 'transparent',
            ':hover': {
                backgroundColor: 'warning600',
                color: 'white',
                borderColor: 'warning600',
            },
            ':disabled': {
                backgroundColor: 'warning100',
                color: 'warning300',
                borderColor: 'warning200',
            }
        }
    },
    sizes: {
        small: {
            paddingTop: 'xxsmall',
            paddingBottom: 'xxsmall',
            paddingLeft: 'large',
            paddingRight: 'large',
            fontSize: '14px',
            lineHeight: '20px'

        },
        medium: {
            paddingTop: 'xxsmall',
            paddingBottom: 'xxsmall',
            paddingLeft: 'large',
            paddingRight: 'large',
            fontSize: '16px',
            lineHeight: '24px'
        },
        large: {
            paddingTop: 'xxsmall',
            paddingBottom: 'xxsmall',
            paddingLeft: 'large',
            paddingRight: 'large',
            fontSize: '22px',
            lineHeight: '28px',

        }
    },

    outline: {
        primary: {
            border: 'primary',
            color: 'primary500',
            borderWidth: 'small',
            backgroundColor: 'transparent',
            ':hover': {
                backgroundColor: 'primary500',
                color: 'white',
                borderColor: 'primary500',
            },
        },
        danger: {
            border: 'danger',
            color: 'danger500',
            borderWidth: 'small',
            backgroundColor: 'transparent',
            ':hover': {
                backgroundColor: 'danger500',
                color: 'white',
                borderColor: 'danger500',
            },
        },
        success: {
            border: 'success',
            color: 'success500',
            borderWidth: 'small',
            backgroundColor: 'transparent',
            ':hover': {
                backgroundColor: 'success500',
                color: 'white',
                borderColor: 'success500',
            },
        },
        warning: {
            border: 'warning',
            color: 'warning500',
            borderWidth: 'small',
            backgroundColor: 'transparent',
            ':hover': {
                backgroundColor: 'warning500',
                color: 'white',
                borderColor: 'warning500',
            },
        },
        info: {
            border: 'info',
            color: 'info500',
            borderWidth: 'small',
            backgroundColor: 'transparent',
            ':hover': {
                backgroundColor: 'info500',
                color: 'white',
                borderColor: 'info500',
            },
        },
    }
    
};


export default buttons;