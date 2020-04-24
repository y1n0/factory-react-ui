import React, { useState, useRef } from 'react';
import { Box, Flex } from '../Box';
import { Icon } from '../Icon';
import { Image } from '../Image';
import CapitalAzurImage from './capital-azur.png'

import { Accordion } from './Accordion';
import { AccordionPanel } from './AccordionPanel';
import { DirectionManager } from '../../core/rtl-manager';
import Space from '../../core/space';

export const Simple = () => {

    return (
        <Box >
            <Accordion>
                <AccordionPanel title="Panel 1">
                    <Box p={['medium', null, 'large']}>
                        Content #1
                    </Box>
                </AccordionPanel>
                <AccordionPanel title="Panel 2">
                    <Box p={['medium', null, 'large']}>
                        Content #2
                    </Box>
                </AccordionPanel>
                <AccordionPanel title="Panel 3">
                    <Box p={['medium', null, 'large']}>
                        Content #3
                    </Box>
                </AccordionPanel>
            </Accordion>
        </Box>
    )
}

export const Multiple = () => {

    const [activeIndex, setActiveIndex] = useState([]);

    const hanOnActive = index => {
        setActiveIndex(index);
    }
    return (
        <Box >
            <Accordion multiple>
                <AccordionPanel title="Panel 1">
                    <Box p={['medium', null, 'large']}>
                        Content #1
                    </Box>
                </AccordionPanel>
                <AccordionPanel title="Panel 2">
                    <Box p={['medium', null, 'large']}>
                        Content #2
                    </Box>
                </AccordionPanel>
                <AccordionPanel title="Panel 3">
                    <Box p={['medium', null, 'large']}>
                        Content #3
                    </Box>
                </AccordionPanel>
            </Accordion>
        </Box>
    )
}



const AccordionContent = (props) => {
    return (<Box {...props} sx={{
        padding: ['medium', null, 'large'],
    }}>
        {props.children}
    </Box>);
}

const AccordionHeader = ({ isActive, children, ...rest }) => {
    return <Flex sx={{
        padding: ['medium', null, 'large'],
        backgroundColor: 'white',
        fontWeight: 700
    }} {...rest}>
        <Box>{children}</Box>
        <Box>
            {isActive ?
                <Icon name="chevron-top" size="medium" />
                :
                <Icon name="chevron-down" size="medium" />
            }
        </Box>
    </Flex>
}

export const CustomHeaderWithIcon = () => {

    const [activeIndex, setActiveIndex] = useState([]);

    const hanOnActive = index => {
        setActiveIndex(index);
    }
    return (
        <Box >
            <Accordion m="large" activeIndex={activeIndex} onChange={hanOnActive} >
                <AccordionPanel title={<AccordionHeader isActive={activeIndex.includes(0)}>Panel 1</AccordionHeader>}>
                    <AccordionContent>
                        Content #1
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel title={<AccordionHeader isActive={activeIndex.includes(1)}>Panel 2</AccordionHeader>}>
                    <AccordionContent>
                        Content #2
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel title={<AccordionHeader isActive={activeIndex.includes(2)}>Panel 3</AccordionHeader>}>
                    <AccordionContent>
                        Content #3
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </Box>
    )
}


const AccordionHeaderCustomIcon = ({ isActive, children, ...rest }) => {
    return <Flex sx={{
        padding: ['small', 'medium', 'large'],
        color: isActive ? 'white' : 'primary500',
        backgroundColor: isActive ? 'primary500' : 'gray100',
        fontWeight: 700,
    }} {...rest}>
        <Box>{children}</Box>
        <Box>
            {isActive ?
                <Icon name="happy" size="large" />
                :
                <Icon name="smile" size="large" />
            }
        </Box>
    </Flex>
}

export const RichWithCustomIcon = () => {

    const [activeIndex, setActiveIndex] = useState([]);

    const hanOnActive = index => {
        setActiveIndex(index);
    }
    return (
        <Flex justifyContent="center" >
            <Accordion width={['100%', null, '60%']} activeIndex={activeIndex} onChange={hanOnActive} >
                <AccordionPanel title={<AccordionHeaderCustomIcon isActive={activeIndex.includes(0)}>Panel 1</AccordionHeaderCustomIcon>}>
                    <AccordionContent>
                        Content #1
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel title={<AccordionHeaderCustomIcon isActive={activeIndex.includes(1)}>Panel 2</AccordionHeaderCustomIcon>}>
                    <AccordionContent>
                        Content #2
                    </AccordionContent>
                </AccordionPanel>
                <AccordionPanel title={<AccordionHeaderCustomIcon isActive={activeIndex.includes(2)}>Panel 3</AccordionHeaderCustomIcon>}>
                    <AccordionContent>
                        Content #3
                    </AccordionContent>
                </AccordionPanel>
            </Accordion>
        </Flex>
    )
}


const AccordionHeaderCapitalAzur = ({ isActive, children, ...rest }) => {
    return <Flex sx={{
        padding: '19px 25px',
        color: isActive ? '#2178FF' : '#000000',
        fontSize: '18px',
        backgroundColor: 'white',
        fontWeight: 600,
        fontFamily: 'montserrat',
        borderRadius: '8px',
        boxShadow: isActive ? '0 10px 14px -5px rgba(191,191,191,0.67)' : 'none',
        borderBottomLeftRadius: isActive ? 0 : '8px',
        borderBottomRightRadius: isActive ? 0 : '8px',
        border: 0,
    }} {...rest}>
        <Box>{children}</Box>
        <Box>
            {isActive ?
                <Icon name="minus" size="small" color={isActive ? '#2178FF' : '#C7C7C7'} />
                :
                <Icon name="plus" size="small" color={isActive ? '#2178FF' : '#C7C7C7'} />
            }
        </Box>
    </Flex>
}

const AccordionContentCapitalAzur = ({ children, ...rest }) => {
    return (
        <Box {...rest}
            sx={{
                padding: ['medium', null, '40px 60px'],
                border: 0,
            }}>
            {children}
        </Box>);
}

const AccordionPanelCapitalAzur = ({ title, panelKey, isActive, children }) =>
    <AccordionPanel sx={{
        border: 0,
        boxShadow: '0 10px 14px -5px rgba(191,191,191,0.67)',
        overflow: 'hidden',
        backgroundColor: 'white',
        borderRadius: '8px',
        marginBottom: '30px'
    }}
        panelKey={panelKey}
        title={<AccordionHeaderCapitalAzur isActive={isActive}>{title}</AccordionHeaderCapitalAzur>}>
        <AccordionContentCapitalAzur>
            {children}
        </AccordionContentCapitalAzur>
    </AccordionPanel>



export const CapitalAzur = () => {

    const [activeIndex, setActiveIndex] = useState(['credit']);

    const hanOnActive = index => {
        setActiveIndex(index);
    }

    const isActive = key => activeIndex.includes(key);

    return (
        <Box p="xlarge">
            <Accordion activeIndex={activeIndex} onChange={hanOnActive} >

                <AccordionPanelCapitalAzur panelKey="compte-carte" title="Comptes et cartes" isActive={isActive('compte-carte')}>
                    <Flex flexDirection={['column', null, 'row']}>
                        <Box mr="35px"><Image src={CapitalAzurImage} /></Box>
                        <Flex flexDirection="column" justifyContent="start" alignItems="start" ml="35px" fontSize="16px">
                            <Box as="p" mb="16px">Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Box>
                            <Box as="p">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Box>
                        </Flex>
                    </Flex>
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="epargne" title="Epargne" isActive={isActive('epargne')}>
                    Content #2
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="credit" title="Credit" isActive={isActive('credit')}>
                    Content #3
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="assurance" title="Assurance" isActive={isActive('assurance')}>
                    Content #5
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="bourse" title="Bourse" isActive={isActive('bourse')}>
                    Content #4
                </AccordionPanelCapitalAzur>

                <AccordionPanelCapitalAzur panelKey="asset-management" title="Asset Management" isActive={isActive('asset-management')}>
                    Content #6
                </AccordionPanelCapitalAzur>

            </Accordion>
        </Box>
    )
}


export const RTL = () => {

    const [activeIndex, setActiveIndex] = useState([]);

    const hanOnActive = index => {
        setActiveIndex(index);
    }

    return (
        <DirectionManager>
            <Flex justifyContent="center" dir="rtl">
                <Accordion width={['100%', null, '60%']} activeIndex={activeIndex} onActive={hanOnActive} >
                    <AccordionPanel title={<AccordionHeaderCustomIcon isActive={activeIndex.includes(0)}>Panel 1</AccordionHeaderCustomIcon>}>
                        <AccordionContent>
                            Content #1
                    </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel title={<AccordionHeaderCustomIcon isActive={activeIndex.includes(1)}>Panel 2</AccordionHeaderCustomIcon>}>
                        <AccordionContent>
                            Content #2
                    </AccordionContent>
                    </AccordionPanel>
                    <AccordionPanel title={<AccordionHeaderCustomIcon isActive={activeIndex.includes(2)}>Panel 3</AccordionHeaderCustomIcon>}>
                        <AccordionContent>
                            Content #3
                    </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </Flex>
        </DirectionManager>
    )
}


export default {
    title: 'Accordion',
};