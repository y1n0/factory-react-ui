import React, { useEffect } from 'react';

import {Layer} from '../Layer';
import {Box, Flex} from '../../Box';
import {Button} from '../../Button';
import {Text} from '../../Typography';
import {Icon} from '../../Icon';
import {Anchor} from '../../Anchor/Anchor';

export const Default = () => {

    const [show, setShow] = React.useState();

    return (
        <Box p="3rem" >
            <Button borderRadius="rounded" outline="primary" onClick={() => setShow(true)}>show</Button>
            {show && (
                <Layer animation={'fadeIn'} onClickOutside={() => setShow(false)} >
                     <Box px="3rem" py="2rem" bg="white" borderRadius="medium" >
                         <Button onClick={() => setShow(false)} >close</Button>
                     </Box>
                </Layer>
            )}
        </Box>);
}


export const TwoLayers = () => {

    const [show1, setShow1] = React.useState();
    const [show2, setShow2] = React.useState();

    return (
        <Box p="3rem" >
            <Button borderRadius="rounded" outline="primary" onClick={() => setShow1(true)}>open 1</Button>
            {show1 && (
                <Layer onClickOutside={() => setShow1(false)} >
                     <Box px="3rem" py="2rem" bg="white" borderRadius="medium" >
                         <Button borderRadius="rounded" mx="small" onClick={() => setShow2(true)} >open 2</Button>

                         <Button borderRadius="rounded" mx="small" variant="danger" onClick={() => setShow1(false)} >close</Button>
                     </Box>
                </Layer>
            )}
            {show2 && (
                <Layer position="top" modal onClickOutside={() => setShow2(false)} >
                     <Box px="3rem" py="2rem" bg="white" borderRadius="medium" >
                         <Button borderRadius="rounded" mx="small" variant="danger" onClick={() => setShow2(false)} >close</Button>
                     </Box>
                </Layer>
            )}
        </Box>);
}


export const Corner = () => {

    const [show, setShow] = React.useState();

    return (
        <Box p="3rem" >
            <Button borderRadius="rounded" outline="primary" onClick={() => setShow(true)}>show</Button>
            {show && (
                <Layer responsive={true} position="top-right" onClickOutside={() => setShow(false)} >
                     <Box px="3rem" py="2rem" bg="white" borderRadius="medium" >
                         <Button onClick={() => setShow(false)} >close</Button>
                     </Box>
                </Layer>
            )}
        </Box>);
}



export const FullVerticalCorner = () => {

    const [show, setShow] = React.useState();

    return (
        <Box p="3rem" >
            <Button borderRadius="rounded" outline="primary" onClick={() => setShow(true)}>show</Button>
            {show && (
                <Layer
                    position="right"
                    full="vertical"
                    modal onClickOutside={() => setShow(false)} >
                     <Flex width="300px" height="100%" p="medium" bg="white" flexDirection="column" justifyContent="space-between" overflow="scroll">
                        <Flex borderBottom="1px solid gray;"><Text fontSize="title" mb="small">Title</Text></Flex>
                        <Flex></Flex>
                        <Flex><Button onClick={() => setShow(false)} >close</Button></Flex>
                     </Flex>
                </Layer>
            )}
        </Box>);
}

export const Notification = () => {

    const [show, setShow] = React.useState();

    return (
        <Box p="3rem" >
            <Button borderRadius="rounded" outline="primary" onClick={() => setShow(true)}>show</Button>
            {show && (
                <Layer
                    position="bottom"
                    modal={false}
                    margin={{ vertical: "50px", horizontal: "small" }}
                    plain
                    onClickOutside={() => setShow(false)} >
                        <Flex sx={{
                            padding: 'medium',
                            alignItems:'center',
                            backgroundColor: 'success500',
                            border: '2px solid',
                            borderColor: 'success500',
                            borderRadius: 'rounded'

                        }} >
                            <Text>A new virtual machine has been successfully added</Text>
                            <Button sx={{
                                color: 'inherit',
                                marginLeft: '16px',
                                backgroundColor: 'transparent',
                                '&:hover,&:focus' : {
                                    backgroundColor: 'transparent',
                                    borderColor: 'transparent'
                                }
                            }} size="none" onClick={() => setShow(false)} ><Icon name="add-simple" size="14px"/></Button>
                     </Flex>
                </Layer>
            )}
        </Box>);
}



export const Modal = () => {

    const [showModal, setShowModal] = React.useState();

    return (
        <Flex p="3rem"  alignItems="center" justifyContent="center">
            <Button borderRadius="rounded" outline="primary" onClick={() => setShowModal(true)}>show</Button>
            {showModal && (
                <Layer onClickOutside={() => setShowModal(false)} >
                        <Flex p="medium" boxShadow={4}  flexDirection="column" bg="white" borderRadius="small" maxWidth="400px" >
                            <Flex mb="medium"><Text level="1" fontSize="18px">Modal title</Text></Flex>
                            <Flex>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam porta finibus maximus. Mauris diam velit, venenatis sed tincidunt nec, convallis ac tortor. Phasellus imperdiet facilisis placerat.</Text>
                            </Flex>
                            <Flex mt="medium" justifyContent="flex-end">
                                <Button borderRadius="rounded" mx="small" variant="danger" onClick={() => setShowModal(false)}>close</Button>
                            </Flex>
                     </Flex>
                </Layer>
            )}
        </Flex>);
}


export const Cookie = () => {

    const [showCookie, setShowCookie] = React.useState();
    const [showModal, setShowModal] = React.useState();

    useEffect(() => {
        const timer = setTimeout(() => {

            setShowCookie(true)

        }, 300);
        return () => clearTimeout(timer);
      }, []);




    return (
        <Flex p="3rem"  alignItems="center" justifyContent="center">
            cookie compliance
            {showCookie && (
                <Layer
                    full="horizontal"
                    modal={false}
                    position="bottom"
                    plain={true}
                    onClickOutside={() => setShowCookie(false)} >
                        <Flex position="relative" py="large" px="xlarge" color="white" bg="black900" >
                        <Button borderRadius="rounded" padding="small" sx={{
                            position: 'absolute',
                            right: '40px',
                            top: '-20px',
                            transform: 'rotate(45deg)'
                        }} size="none" onClick={() => setShowCookie(false)} ><Icon name="add-simple" size="14px"/></Button>
                            <Flex>
                                <Text lineHeight="20px">Nous utilisons des cookies afin d’améliorer votre expérience de navigation sur notre site. Vous pouvez obtenir des informations sur ces cookies ou modifier les réglages d’acceptation en cliquant <Anchor variant="primary" onClick={() => setShowModal(true)}>ici</Anchor>. En poursuivant votre navigation sur ce site, vous acceptez l’utilisation de ces cookies.
</Text>
                            </Flex>
                     </Flex>
                </Layer>
            )}

{showModal && (
                <Layer >
                        <Flex sx={{
                                padding: "medium",
                                boxShadow: 3,
                                flexDirection: 'column',
                                backgroundColor: 'white',
                                border: '1px solid',
                                borderColor: 'gray300',
                                borderRadius: 'small',
                                maxWidth: '400px'
                        }}>

                            <Flex mb="medium"><Text level="1" fontSize="18px">Les cookies Google Analytics</Text></Flex>
                            <Flex>
                                <Text>
                                    Nous utilisons des cookies de Google Analytics, ces cookies nous aident à identifier le contenu qui vous interesse le plus ainsi qu'à repérer certains dysfonctionnements. Vos données de navigations sur ce site sont envoyées à Google Inc
                                </Text>
                            </Flex>
                            <Flex mt="medium" justifyContent="flex-end">
                                <Button borderRadius="rounded" mx="small" onClick={() => setShowModal(false)}>accepter</Button>
                            </Flex>
                     </Flex>
                </Layer>
            )}
        </Flex>);
}

export default {
    title: 'Components/Layer'
}
