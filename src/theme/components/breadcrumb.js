

const breadcrumb = {

    default: {

        '& .vf-breadcrumb__item': {
        },
        '& vf-breadcrumb__item.vf-breadcrumb__item--active': {
    
        },
    },
    
    // variants goes here
    // TODO replace this capitalAzur variant with another one
    capitalazur: {
        backgroundColor: 'transparent',
        padding: 'small',
        fontFamily: 'montserrat',
        fontSize: '16px',
        '& .vf-breadcrumb__item': {

        },
        '& vf-breadcrumb__item.vf-breadcrumb__item--active': {
            color: 'primary900',
            ':hover': {
                color: 'primary500'
            }
        },
    }

};

export default breadcrumb;
