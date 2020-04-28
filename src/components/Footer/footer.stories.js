import React from 'react';

import { Footer } from './Footer';
import { Box, Flex } from '../Box';
import { Text } from '../Typography';
import { Anchor } from '../Anchor/Anchor';
import { Navs, Nav } from '../Navs';
import { Icon} from '../Icon';

export const Simple = () => {


    return (
        <Box>
            <Box py="150px" bg="gray200" px="32px">Page Content</Box>
            <Footer p="medium" bg="black800" justifyContent='center' >
                <Text textAlign="center" fontSize="14px" color="white">Footer - void</Text>
            </Footer>
        </Box>);
}

const DoubleFooter = () => {
    return (
        <Box>
            <Box py="150px" bg="gray100" px="32px">Page Content</Box>
            <Footer p="xxlarge" bg="gray400" color="black800">
                <Flex flexDirection="column">
                    <Box mb="medium"><Text fontSize="16px" fontWeight="bold">App</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">home</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">beta</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">sponsor</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">login</Text></Box>
                </Flex>
                <Flex flexDirection="column">
                    <Box mb="medium"><Text fontSize="16px" fontWeight="bold">Legal</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">home</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">beta</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">sponsor</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">login</Text></Box>
                </Flex>
                <Flex flexDirection="column">
                    <Box mb="medium"><Text fontSize="16px" fontWeight="bold">Partners</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">home</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">beta</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">sponsor</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">login</Text></Box>
                </Flex>
                <Flex flexDirection="column">
                    <Box mb="medium"><Text fontSize="16px" fontWeight="bold">Company</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">home</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">beta</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">sponsor</Text></Box>
                    <Box mb="xsmall"><Text fontSize="14px">login</Text></Box>
                </Flex>
            </Footer>
            <Footer px="large" py="medium" bg="black800" color="white">
                <Text textAlign="center" fontSize="14px" >void.fr</Text>
                <Text textAlign="center" fontSize="14px">© 2020 Copyright</Text>
            </Footer>
        </Box>);
}


const FooterNav = props =>  <Nav sx={{
    color: 'inherit',
    p: 0,
    px: [0, '16px'],
    borderRight: ['0', '1px solid rgba(0,0,0,0.19)'],
    m:0,
    mb: ['12px', '0'],
    '&:last-child' : {
        borderRight: 0,
        pr: 0,
        m: 0
    }
    }}>{props.children}</Nav>

const FooterNavs = props =>  <Navs sx={{
        p: 0,
        m:0,
        width:"100%",
        alignItems: 'baseline'
        }}>{props.children}</Navs>

export const CapitalAzur = () => {
    return (<Box height="100vh" display="flex" flexDirection="column" justifyContent="flex-end">
        <Footer sx={{
            backgroundColor: '#fff',
            fontFamily: 'montserrat',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Flex sx={{
                width: ['100%', '100%', '900px', '1200px', '1900px'],
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Flex sx={{
                    fontSize: "14px",
                    color: '#000000',
                    flexDirection: ['column', 'row'],
                    justifyContent: 'space-between',
                    alignItems: ['baseline', 'center'],
                    p: '23px 12px',
                }}>
                    <Flex mb={['16px', '0px']}>
                        <Box mr="16px"><Icon name="facebook" size="24px" color="#017CFE" /></Box>
                        <Box mr="16px"><Icon name="instagram" size="24px" color="#017CFE" /></Box>
                        <Box mr="16px"><Icon name="twitter" size="24px" color="#017CFE" /></Box>
                    </Flex>
                    <Flex>
                        <FooterNavs>
                           <FooterNav>Nous Contacter</FooterNav>
                           <FooterNav>Mentions Légales</FooterNav>
                           <FooterNav>Plan du Site</FooterNav>
                        </FooterNavs>
                    </Flex>
                </Flex>

                <Flex sx={{
                    fontSize: "11px",
                    color: '#017CFE',
                    flexDirection: ['column', 'row'],
                    justifyContent: 'space-between',
                    p: '23px 12px',
                    borderTop: '1px solid',
                    borderTopColor: 'gray400',
                }}>
                    <Box mb={['12px', '0']}>©2020 CAPITAL AZUR</Box>
                    <Box>Conception et Développement: VOID</Box>
                </Flex>

            </Flex>
        </Footer>
    </Box>)
}

export const AWFFooter = () => {
    return (
        <Box>
            <Box py="150px" bg="gray100" px="32px">Page Content</Box>
            <Footer sx={{
                display: 'block',
                backgroundColor: '#2e2e2e',
                fontWeight: 200,
                fontSize: ['12px', null, '14px'],
                paddingY: 'large',
                paddingX: 'small',
                color: '#919090',
                flexWrap: 'wrap'
            }}>

                <Box></Box>

                <Flex sx={{ marginBottom: ['14px', null, '0'], flexWrap: 'wrap', justifyContent: 'space-between', flexDirection: ['column', null, 'row'] }}>
                    <Flex sx={{
                        marginBottom: ['14px', null, '0'],
                        flexWrap: 'wrap'
                    }}>
                        <Box sx={{
                            paddingRight: '14px',
                            marginBottom: ['8px', null, '0'],
                        }} ><Anchor>Conformité</Anchor></Box>
                        <Box sx={{
                            paddingRight: '14px',
                            marginBottom: ['8px', null, '0'],
                        }}><Anchor>Condition Générale d'utilisation</Anchor></Box>
                        <Box sx={{
                            paddingRight: '14px',
                            marginBottom: ['8px', null, '0'],
                        }}><Anchor>Plan du site</Anchor></Box>
                    </Flex>
                    <Flex sx={{
                        marginBottom: ['14px', null, '0'],
                        flexGrow: 1,
                        marginLeft: ['0', null, 'medium']
                    }}>
                        <Box><Text >Conception et développement void.fr</Text></Box>
                    </Flex>
                    <Flex sx={{
                        marginBottom: ['14px', null, '0']
                    }}>
                        <Box><Text>Tous droits réservés</Text></Box>
                    </Flex>

                </Flex>
            </Footer>
        </Box>);
}
export default {
    title: 'Footer'
}