


const navs = {


    nav: {

    },
    activeNav: {

    },

    // variants
    capitalazur: {
        padding: '0px',
        fontFamily: 'montserrat',
        backgroundColor: 'white',
        boxShadow: 1,
        py: 'large',
        alignItems: 'start',
        nav: {
            padding: '0px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#000000',
            textTransform: 'uppercase',
            px: '16px',
            py: ['16px', '0'],
            borderWidth: ['0', '2px'],
            borderStyle: 'solid',
            borderColor: 'gray500',
            borderTop: '0px',
            borderBottom: '0px',


            '&:first-of-type' : {
                border: '0px',
            },
            '&:last-of-type' : {
                border: '0px',
            },
            ':hover': {
                color: '#017CFE'
            }

        },
        activeNav: {
            color: '#017CFE',
            fontWeight: 600,
            ':hover': {
                color: '#017CFE'
            }
        },
    }

};

export default navs;
