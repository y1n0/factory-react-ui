

const tabs = {

    header: {
    },
    tab: {
    },
    activeTab: {
    },
    content: {
    },


    cardType: {
        border: 0,
        header: {
            backgroundColor:'transparent',
            borderBottom: '1px solid',
            borderColor: 'gray400',
        },
        tab: {
            border: '1px solid',
            borderColor: 'gray400',
            mx:'-1px',
            borderRadius: "4px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            marginBottom: '-1px',mx:'3px',
            '&:not(first-of-type)': {
                marginLeft: '0'
            },
        },
        activeTab: {
            border: '1px solid',
            borderColor: 'gray400',
            borderBottom: 0, 
            backgroundColor: 'white',
            borderRadius: "4px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            marginBottom: '-1px',
            mx:'3px',
            '&:not(first-of-type)': {
                marginLeft: '0'
            },
        },
        content: {
            py: 'large',
            px: 'small',
            border: '1px solid',
            borderColor: 'gray400',
            borderTop: 0, 
        },
    },

    cardContainerType: {
        border: 0,
        header: {
            backgroundColor:'transparent',
        },
        tab: {
            
            backgroundColor:'transparent',
            mx:'-1px',
            marginBottom: '-1px',
        },
        activeTab: {
            backgroundColor: 'white',
            marginBottom: '-1px',
        },
        content: {
            py: 'large',
            px: 'small',
            backgroundColor: 'white'
        },
    }
   
};

export default tabs;
