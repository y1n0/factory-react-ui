import React from 'react';
import {
    Box,
    Container,
    Text,
    Accordion,
    AccordionPanel,
    AccordionContext,
    Flex,
    Icon,
    MotionFlex,

} from '../../../components';


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


const AccordionPanelVariant1 = ({
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


const AccordionVariant1 = ({
    multiple = false,
    variant = "accordion.variant1",
    children,
    ...rest
}) => {

    return <Accordion multiple={multiple} variant={variant} rest={rest}>
        {children}
    </Accordion>

}

export const Variant1 = () => {

   
    return <Container>
        <Box m="large">
            <AccordionVariant1>
                <AccordionPanelVariant1 title="Mobile first">
                    Nous basons nos développements sur le Framework Bootstrap et sur les récentes techniques Flexbox afin de créer des interfaces responsives et évolutives en Sass et les automatiser sur Gulp.
                </AccordionPanelVariant1>
                <AccordionPanelVariant1 title="Multilingue / Multipays">
                    Nous développons des sites riches en contenus, qui nécessitent la mise en place de modules de traduction et de workflows de contribution.
                </AccordionPanelVariant1>
                <AccordionPanelVariant1 title="Vitrines web de système d'information">
                    Nous créons des interfaces Web interconnectées avec vos systèmes d’information, de l’authentification SSO à la construction de pages personnalisées.
                </AccordionPanelVariant1>
                <AccordionPanelVariant1 title="Confort de contribution">
                    Nous concevons des consoles d’administration simples et intuitives. A travers nos expériences, nous avons développé une réelle expertise pour rendre la contribution la plus simple possible.
                </AccordionPanelVariant1>
                <AccordionPanelVariant1 title="optimisation des performances">
                Grâce à notre nature d’agence intégrée, nous concevons des plateformes optimisées pour réduire les temps de chargement.
                </AccordionPanelVariant1>
                <AccordionPanelVariant1 title="Usine à sites">
                    <Text mb="medium">Dans votre groupe, il est possible de se retrouver avec plusieurs sites à gérer pour des filiales, pour des produits, pour des évènements…
                        Drupal permet de créer des instances sur un même socle.</Text>
                    <Text>En plus d’un gain de temps considérable sur la maintenance, il devient possible de partager des modules et donc des fonctionnalités entre les différentes instances.
                    Nous mettons en place des systèmes pour créer vos déclinaisons de sites à la volée pour vos filiales.</Text>

                </AccordionPanelVariant1>
            </AccordionVariant1>
            
        </Box>
    </Container>
}

export default {
    title: 'Components/Accordion',
};