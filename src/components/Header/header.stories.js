import React from 'react';

import { Header } from './Header';
import { Box, Flex } from '../Box';
import { Text } from '../Typography';
import { Layer } from '../Layer';
import { Button } from '../Button';
import { Icon } from '../Icon';

export const Simple = () => {


    return (
        <Box>
            <Header p="large" bg="white" boxShadow={1}>
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">LOGO</Text>
            </Header>
            <Box py="150px" bg="gray200" px="32px">Page Content</Box>
        </Box>);
}


const CloseButton = ({ size = 'large', ...props }) =>
    <Button {...props}
        sx={{
            transform: 'rotate(45deg)',
            padding: '0',
            background: 'transparent',
            '&:hover, &:focus': {
                background:'transparent', 
                color: 'inherit',
                borderColor: 'transparent'
            }
        }}
        size="none"
        onClick={props.onClick}>
        <Icon name="add-simple" size={size} />
    </Button>

const MenuButton = ({ size = 'large', ...props }) =>
    <Button {...props}
        sx={{
            padding: '0',
            background: 'transparent',
            color: 'inherit',
            '&:hover, &:focus': {
                background:'transparent', 
                color: 'inherit',
                borderColor: 'transparent'
            }
        }}
        size="none"
        onClick={props.onClick}>
        <Icon name="menu" size={size} />
    </Button>

const CaretButton = ({ size = 'large', ...props }) =>
    <Button {...props}
        sx={{
            transform: 'rotate(180deg)',
            padding: '0',
            background: 'transparent',
            '&:hover, &:focus': {
                background:'transparent', 
                color: 'inherit',
                borderColor: 'transparent'
            }
        }}
        size="none"
        onClick={props.onClick}>
        <Icon name="arrows-left" size={size} />
    </Button>


export const Responsive = () => {


    const [showSidebarMenu, setShowSidebarMenu] = React.useState();


    return (
        <Box>
            <Header p="large" bg="white" boxShadow={1} minHeight="77px">
                <Box><Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">LOGO</Text></Box>

                <Box display={['block', null, 'none']} color="gray900" ><MenuButton onClick={() => setShowSidebarMenu(true)} /> </Box>


            </Header>
            <Box py="150px" bg="gray200" px="32px">Page Content</Box>

            {showSidebarMenu && (
                <Layer
                    position="right"
                    full="vertical"
                    modal={true}
                    responsive
                    plain={true}
                    onClickOutside={() => setShowSidebarMenu(false)} >
                    <Flex sx={{
                        backgroundColor: '#383838',
                        color: 'white',
                        height: '100%',
                        flexDirection: 'column',
                        width: '100%',
                        fontSize: '17px', 
                        fontWeight: 200
                    }}>
                        <Flex padding="25px 20px" justifyContent="flex-end">
                            <CloseButton onClick={() => setShowSidebarMenu(false)} />
                        </Flex>
                        <Flex flexDirection="column">
                            <Flex borderTop="1px solid #fff">
                                <Flex justifyContent="space-between"  alignItems="center" width="100%" padding="35px 20px">
                                    <Text as="span">A chaque moment de la vie</Text>
                                    <CaretButton />
                                </Flex>
                            </Flex>
                            <Flex borderTop="1px solid #fff">
                                <Flex justifyContent="space-between"  alignItems="center" width="100%" padding="35px 20px">
                                    <Text>Qui que vous soyez</Text>
                                    <CaretButton />
                                </Flex>
                            </Flex>
                            <Flex borderTop="1px solid #fff">
                            <Flex justifyContent="space-between"  alignItems="center" width="100%" padding="35px 20px">
                                    <Text>Partout dans le monde</Text>
                                    <CaretButton />
                                </Flex>
                            </Flex>
                            <Flex borderTop="1px solid #fff">
                            <Flex justifyContent="space-between"  alignItems="center" width="100%" padding="35px 20px">
                                    <Text>Nos filiales à votre service</Text>
                                    <CaretButton />
                                </Flex>
                            </Flex>

                        </Flex>
                    </Flex>
                </Layer>
            )}
        </Box>);
}


export default {
    title: 'Header'
}