import React from 'react';
import ReactDOM  from 'react-dom';
import {Box} from '../Box';
import {MotionBox, MotionFlex} from '../Animation';
import {Button} from '../Button';
import {Icon} from '../Icon';
import {Input} from '../Form';

const SearchOverlayContainer = ({children, open = false,onClose, onSubmit,  ...rest}) => {
    
    const motionVariants = {
        visible: {opacity: 1},
        hidden: {opacity: 0}
    }

    const inputRef = React.createRef();

    React.useEffect(() => {
       if(open) {
           inputRef.current.value = '';
       }
    });
    
    return <MotionFlex __css={{
        position: 'fixed',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        width:  '100%',
        height: '100%',
        opacity: 0,
        pointerEvents: open ? 'auto' : 'none',
        visible : open ? 'visible' : 'hidden',
        backgroundColor: 'black500',
    
    }} {...rest}
    initial="hidden"
    variants={motionVariants}
    animate={open ? 'visible' : 'hidden'}
    >
        <Box __css={{
            position: 'relative',
            padding: ['50px 10px', null, '100px'],
            color: 'white',
            width: ['90%', null,  '75%']
        }}>
                <Button onClick={onClose} sx={{
                        position: 'absolute',
                        top: 0,
                        right: '12px',
                        padding: '8px',
                        backgroundColor:'transparent',
                        border:0,
                        '&:hover, &:focus': {
                            backgroundColor: 'transparent',
                            border:0
                        }
                    }}>
                    <Icon icon="close-mobile" size="large" />
                </Button>
                <Box>

                    <form onSubmit={e => {e.preventDefault(); onSubmit(inputRef.current.value || null)}}>
                    <Input sx={{
                                backgroud: 'transparent',
                                border: 0,
                                padding: ['1rem 2.5rem .125rem 0', null, '1rem 5rem 1rem 0'],
                                lineHeight: ['1', null, '36px'],
                                fontSize: ['20px', null, '2.25rem'],
                                color: 'white',
                                borderRadius: 0,
                                borderBottom: '3px solid #fff',
                                '&:focus,&:hover' : {
                                    backgroundColor: 'transparent',
                                    border:0,
                                    borderBottom: '3px solid #fff',
                                    boxShadow: 0,
                                },

                                '&::placeholder': {
                                    color:'black100',
                                    opacity:1
                                }
                                
                            }}
                            ref={inputRef}
                            icon={<Icon color="white" name="recherche" size="large" sx={{marginLeft:"8px"}} />}
                            reverse={true}
                            width="100%"
                            placeholder="Que recherchez-vous ?"
                            title="Veuillez tapez quelques chose"/>
                    </form>
                    
                </Box>
                <MotionBox __css={{
                    color: 'white',
                    margin: '5px 0',
                    padding: [0, null, '22px 0'],
                    fontSize: ['.8rem', null, '1rem'],
                    lineHeight: '18px',
                    textAlign: 'right'
                    
                }}>
                    Appuyer sur la touche " Entrée" du clavier pour lancer la recherche
                </MotionBox>
        </Box>
    </MotionFlex>
};



export const SearchOverlay = ({
    open = false,
    children,
    onClose,
    onSubmit,
    ...rest
}) => {
    return ReactDOM.createPortal( <SearchOverlayContainer onSubmit={onSubmit} onClose={onClose} open={open} />,
    document.body
) 
}