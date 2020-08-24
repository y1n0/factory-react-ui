import React from 'react';
import { Box, Container, Text } from '../../../components';
import { AccordionPanelVariant1, AccordionVariant1 } from '../AccordionVariant1';

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