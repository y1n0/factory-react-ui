import React from 'react';
import { Box } from '../../Box';
import { Icon } from '../../Icon';
import {Breadcrumb} from '../Breadcrumb'
import {BreadcrumbItem} from '../BreadcrumbItem'

export const Simple = () => {

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


export const Separator = () => {

    return (
        <Box >
            <Breadcrumb separator=">>">
                <BreadcrumbItem href="#">Acceuil</BreadcrumbItem>
                <BreadcrumbItem href="#">Produits & Service</BreadcrumbItem>
                <BreadcrumbItem href="#" active={true}>Assurance</BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}

export const WithIcon = () => {

    return (
        <Box >
            <Breadcrumb p="small" separator={<Icon name="plus" size="small" mx="small" />}>
                <BreadcrumbItem p="medium"  href="#">Acceuil</BreadcrumbItem>
                <BreadcrumbItem p="medium" href="#">Produits & Service</BreadcrumbItem>
                <BreadcrumbItem p="medium" href="#" active={true}>Assurance</BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}


export const VariantCapitalAzur = () => {

    return (
        <Box >
            <Breadcrumb variant="breadcrumb.capitalazur" p="small" separator={<Box mx="4px">></Box>}>
                <BreadcrumbItem p="medium"  href="#">Acceuil</BreadcrumbItem>
                <BreadcrumbItem p="medium" href="#">Produits & Service</BreadcrumbItem>
                <BreadcrumbItem p="medium" href="#" active={true}>Assurance</BreadcrumbItem>
            </Breadcrumb>
        </Box>
    )
}


export default {
    title: 'Breadcrumb',
};