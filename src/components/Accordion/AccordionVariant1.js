import React from 'react';
import { Accordion } from './Accordion';
import { AccordionPanel } from './AccordionPanel';
import { AccordionContext } from './AccordionContext';
import { Box, Flex } from '../Box';
import { Icon } from '../Icon';
import { MotionFlex } from '../Animation';
import { useMedia } from '../../core';


// TODO : enable icon customization
const AccordionPanelTitleVariant1 = ({ title, active, ...rest }) => {
    const motionVariants = {
        active: {
            rotate: 135,
        },
        inactive: {
            rotate: 0
        }
    };

    return <Flex  {...rest} >
        <Box>
            {title}
        </Box>
        <Box>
            <MotionFlex sx={{justifyContent: 'center',alignItems: 'center',}} animate={active ? 'active' : 'inactive'} variants={motionVariants} >
                    <Icon name={ 'plus1'} size="large" />
            </MotionFlex>
        </Box>
    </Flex>
}


export const AccordionPanelVariant1 = ({
    children,
    title,
    icon,
    content,
    ...rest }) => {
    const { active } = React.useContext(AccordionContext);

    return <AccordionPanel {...rest} title={<AccordionPanelTitleVariant1 title={title} icon={icon} active={active} />} sx={{
        '&.vf-accordion-panel--active .vf-accordion-panel__title': {
            color: 'black800'
        },
        '& .vf-accordion-panel__title': {
            textTransform: 'capitalize',
            fontWeight: 'light',
            fontSize: '18px',
            color: 'black200',

            '&:hover,&:focus': {
                color: 'black800'
            }
        },
        '& .vf-accordion__panel-content': {
            fontSize: '18px',
            lineHeight: '30px',
            fontWeight: 'light',

        } 
    }}>
        {children}
    </AccordionPanel>
}


export const AccordionVariant1 = ({
    multiple = false,
    variant = "accordion.variant1",
    children,
    ...rest
}) => {

    return <Accordion multiple={multiple} variant={variant} rest={rest}>
        {children}
    </Accordion>

}
