import React from 'react';

import { Footer } from '../Footer';
import { Box, Flex } from '../../Box';
import { Text } from '../../Typography';
import { Anchor } from '../../Anchor/Anchor';
import { Navs, Nav } from '../../Navs';
import { Icon} from '../../Icon';

export const Simple = () => {


    return (
        <Box>
            <Box py="150px" bg="gray200" px="32px">Page Content</Box>
            <Footer p="medium" bg="black800" justifyContent='center' >
                <Text textAlign="center" fontSize="14px" color="white">Footer - void</Text>
            </Footer>
        </Box>);
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
    title: 'Components/Footer'
}