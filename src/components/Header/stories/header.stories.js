import React, { useState, useEffect, useRef } from 'react';

import { Header } from '../Header';
import { Box, Flex } from '../../Box';
import {MotionBox} from '../../Animation';
import { Text } from '../../Typography';
import { Layer } from '../../Layer';
import { Button } from '../../Button';
import { Icon } from '../../Icon';
import { Waypoint } from 'react-waypoint';
import { motion, useAnimation } from 'framer-motion';
import {  useScrollPosition } from '../../../core';


export const Simple = () => {


    return (
        <Box>
            <Header p="large" bg="white" boxShadow={1}>
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">LOGO</Text>
            </Header>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
        </Box>);
}


export const Fixed = () => {

    return (
        <Box>
            <Header fixed={true} p="large" bg="white" boxShadow={1}>
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">LOGO</Text>
            </Header>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
        </Box>);
}


const CloseButton = ({ size = 'large', ...props }) =>
    <Button {...props}
        sx={{
            transform: 'rotate(45deg)',
            padding: '0',
            background: 'transparent',
            '&:hover, &:focus': {
                background: 'transparent',
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
                background: 'transparent',
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
                background: 'transparent',
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
                                <Flex justifyContent="space-between" alignItems="center" width="100%" padding="35px 20px">
                                    <Text as="span">A chaque moment de la vie</Text>
                                    <CaretButton />
                                </Flex>
                            </Flex>
                            <Flex borderTop="1px solid #fff">
                                <Flex justifyContent="space-between" alignItems="center" width="100%" padding="35px 20px">
                                    <Text>Qui que vous soyez</Text>
                                    <CaretButton />
                                </Flex>
                            </Flex>
                            <Flex borderTop="1px solid #fff">
                                <Flex justifyContent="space-between" alignItems="center" width="100%" padding="35px 20px">
                                    <Text>Partout dans le monde</Text>
                                    <CaretButton />
                                </Flex>
                            </Flex>
                            <Flex borderTop="1px solid #fff">
                                <Flex justifyContent="space-between" alignItems="center" width="100%" padding="35px 20px">
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


export const Sticky = () => {
    return (
        <Box height="200vh">
            <Header p="large" bg="white" boxShadow={1} sticky={true}>
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">LOGO</Text>
            </Header>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
        </Box>);
}


const MotionHeader = motion.custom(Header);
export const StickyTwoLevels = () => {
    const headerAnimationCtrls = useAnimation();
    const [headerHeight, setHeaderHeight] = useState(0);

    const headerRef = useRef(null);

    const prevIsScrollingDown = useRef(false);

    useScrollPosition(({ prevPos, currPos }) => {
        const currIsScrollingDown = currPos.y < prevPos.y;

        if (currIsScrollingDown !== prevIsScrollingDown.current) {

            if (currIsScrollingDown) {
                headerAnimationCtrls.start('sticky');
            } else {
                headerAnimationCtrls.start('initial');
            }
            prevIsScrollingDown.current = currIsScrollingDown;
        }
    }, []);

    useEffect(() => {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }, []);

    let variants = {
        initial: { position: 'fixed', width: '100%', top: [-headerHeight, 0] },
        sticky: { position: 'fixed', width: '100%', top: [0, -headerHeight] },
    }

    return (
        <Box height="200vh" pt="164px">

            <MotionBox duration={0.3} animate={headerAnimationCtrls} initial="initial" variants={variants} transition={{ duration: 0.3 }}>
                <Header ref={headerRef} sx={{ p: 'large', height: "100px", backgroundColor: 'white', borderBottom: "1px solid", borderBottomColor: 'gray500', boxShadow: 1 }}>
                    <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">Header 1</Text>
                </Header>
                <Header sx={{ p: 'large', backgroundColor: 'white', boxShadow: 1 }}>
                    <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">Header 2</Text>
                </Header>
            </MotionBox>

            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
        </Box>);
}


export const TwoLevelsWaypoint = () => {
    const headerAnimationCtrls = useAnimation();

    let variants = {
        hidden: { position: 'fixed', width: '100%', top: -100 },
        visible: { position: 'fixed', width: '100%', top: [-100, 0] },
    }

    return (

        <Box height="100vh">


            <MotionBox  duration={0.3} animate={headerAnimationCtrls} initial="hidden" variants={variants} transition={{ duration: 0.3 }}>
                <Header  sx={{ p: 'large', backgroundColor: 'white', boxShadow: 1 }}>
                    <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">Header 2</Text>
                </Header>
            </MotionBox>

            <Header  sx={{  p: 'large', height: "100px", backgroundColor: 'white', borderBottom: "1px solid", borderBottomColor: 'gray500', boxShadow: 1 }}>
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">Header 1</Text>
            </Header>
            <Waypoint bottomOffset={100} onEnter={() => headerAnimationCtrls.start("hidden")} onLeave={() => headerAnimationCtrls.start("visible") } />


            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
        </Box>);
}


export const WaypointWithMotion = () => {

    const headerAnimationCtrls = useAnimation();
    const variants = {
        state1: { y: 0, width: '100%' },
        state2: { y: "40px", width: '80%' },
    }

    return (
        <Box height="200vh">

            <MotionHeader animate={headerAnimationCtrls} initial="state1" variants={variants} fixed={true} m="0 auto" transition={{ type: "tween" }} p="large" bg="white" boxShadow={1} >
                <Text textAlign="center" fontWeight="black" fontSize="14px" color="primary500">LOGO</Text>
            </MotionHeader>

            <Waypoint onEnter={() => headerAnimationCtrls.start("state1")} />
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
            <Waypoint onEnter={() => headerAnimationCtrls.start("state2")} />
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
            <Box py="150px" bg="gray200" px="32px"></Box>
            <Waypoint onEnter={() => headerAnimationCtrls.start("state1")} />
            <Box py="150px" bg="gray300" px="32px"></Box>
            <Box py="150px" bg="gray500" px="32px"></Box>
            <Box py="150px" bg="gray400" px="32px"></Box>
        </Box>);
}


export default {
    title: 'Components/Header'
}