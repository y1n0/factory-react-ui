import React, {useState} from 'react';
import { Box } from '../Box';

import { action } from "@storybook/addon-actions"

import {AccordionButton, NavLinks,AccordionContainer, AccordionBody, AccordionTitle, AccordionItem}  from './Accordion';



export const Simple= () => {
    return (
        <Box >
            <AccordionButton></AccordionButton>
            
        </Box>
    )
}


export const Container= () => {
    return (
        <Box >
            <AccordionContainer>
                <AccordionItem 
                    title={() => 'title1'}
                    body={'body'}
                />
                <AccordionItem 
                    title={'title2'}
                    body={<Box sx={{padding:'large', backgroundColor: 'primary200'}} >Body content for accordion #2</Box>}
                />
                <AccordionItem 
                    title={'title2'}
                    body={'body'}
                />
                <AccordionItem 
                    title={'title2'}
                    body={'body'}
                />
                <AccordionItem 
                    title={'title2'}
                    body={'body'}
                />
            </AccordionContainer>
        </Box>
    )
}


export default {
    title: 'Accordion',
};