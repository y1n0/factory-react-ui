import React from 'react';

import {Layer} from './Layer';
import {Box, Flex} from '../Box';
import {Button} from '../Button';
import {Text} from '../Typography';
import {Icon} from '../Icon';

export const Default = () => {

    const [show, setShow] = React.useState();

    return (
        <Box p="3rem" >
            <Button borderRadius="rounded" outline="primary" onClick={() => setShow(true)}>show</Button>
            {show && (
                <Layer onClickOutside={() => setShow(false)} >
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
                <Layer position="top-right" onClickOutside={() => setShow(false)} >
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
                     <Flex width="300px" p="medium" bg="white" flexDirection="column" justifyContent="space-between" overflow="scroll">
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

export default {
    title: 'Layer'
}