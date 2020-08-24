import React from 'react';
import { Box } from '../../Box';
import {Breadcrumb} from '../Breadcrumb'
import {BreadcrumbItem} from '../BreadcrumbItem'

export const Variant1 = () => {

    return (
        <Box >
            <Breadcrumb>
                <BreadcrumbItem href="#">Acceuil</BreadcrumbItem>
                <BreadcrumbItem href="#">Produits & Service</BreadcrumbItem>
                <BreadcrumbItem href="#" active={true}>Assurance</BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}

export default {
    title: 'Components/Breadcrumb',
};