import React, { useState, useRef } from 'react';
import { Box, Flex } from '../Box';
import { Icon } from '../Icon';
import Space from '../../core/space';
import {Navs} from './Navs'
import {Nav} from './Nav';

import { DirectionManager } from '../../core/rtl-manager';

export const Simple = () => {

    return (
        <Box >
            <Navs>
                <Nav href="#">Acceuil</Nav>
                <Nav href="#">Produits & Service</Nav>
                <Nav href="#" active={true}>Assurance</Nav>
            </Navs>
        </Box>
    )
}

export const Variant = () => {

    return (
        <Box >
            <Navs variant="navs.capitalazur">
                <Nav href="#" active={true}>Produits & Service</Nav>
                <Nav href="#">Nous connaître</Nav>
                <Nav href="#" >insights</Nav>
            </Navs>
        </Box>
    )
}

export const RTL = () => {

    return (
        <DirectionManager dir="rtl">
            <Box dir="rtl" >
                <Navs variant="navs.capitalazur">
                    <Nav href="#" active={true}>Produits & Service</Nav>
                    <Nav href="#">Nous connaître</Nav>
                    <Nav href="#" >insights</Nav>
                </Navs>
            </Box>
        </DirectionManager>
    )
}


export default {
    title: 'Navs',
};