

const accordion = {
    


    panel: {
        borderColor: 'gray400'
    },

    header: {
        backgroundColor: 'gray100',
        borderColor: 'gray400',
        p: ['medium', null, 'large']
    },

    primary: {
        panel: {
            borderColor: 'primary900',
            borderWidth: '3px'
        },
    },

    danger: {
        margin: 0,
        panel: {
            borderColor: 'danger500',
            borderWidth: '3px'
        },
        header: {
            borderColor: 'danger500',
            p: ['medium', null, 'large']
        },

        primary: {
            panel: {
                borderColor: 'danger500',
                borderWidth: '3px'
            },
        },
    }
};

export default accordion;
