

const checkbox = {

    primary: {
        color: 'gray300',
        'input:checked ~ &': {
            color: 'primary500',
        },
    },

    danger: {
        color: 'danger300',
        'input:checked ~ &': {
            color: 'danger500',
        },
    }
   
};

export default checkbox;

