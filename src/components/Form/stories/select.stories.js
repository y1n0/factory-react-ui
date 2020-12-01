import React from 'react';
import { Select } from '../Select';
import { Box } from '../../Box';
import { withKnobs, select } from '@storybook/addon-knobs';
import { Label } from '../Label';
import { Icon } from '../../Icon';
import { DirectionManager } from '../../../core';




export const DefaultSelect = () => {
    return (
        <Box p="medium">
            <Label alignItems="center">Villes</Label>
            <Select
                id='country'
                name='country'
                defaultValue='Agadir' mt="small">
                <option>Agadir</option>
                <option>EL Jadida</option>
                <option>Casablanca</option>
                <option>Tanger</option>
            </Select>

            <Label mt="medium" alignItems="center">Full width</Label>
            <Select width="100%"
                id='country'
                name='country'
                defaultValue='Agadir' mt="small">
                <option>Agadir</option>
                <option>EL Jadida</option>
                <option>Casablanca</option>
                <option>Tanger</option>
            </Select>
        </Box>);
}

export const UsingOptionsProp = () => {
    return (
        <Box p="medium">
            <Label alignItems="center">Villes</Label>
            <Select
                id='ville'
                name='ville'
                mt="small"
                options={{
                    "Agadir": {value: "Agadir"},
                    "EL Jadida": {value: "EL Jadida"},
                    "Casablanca": {
                        value: "Casablanca",
                    },
                    "Tanger": {
                        value: "Tanger",
                        disabled: true,
                    },
                }}
                />
        </Box>);
}

export const CustomDownarrow = () => {
    return (
        <Box p="medium">
            <Label alignItems="center">Villes</Label>
            <Select id='country'
                name='country'
                defaultValue='Casablanca'
                mt="medium"
                pr="43px"
                icon={<Icon name="chevron-down" size="medium" mx="8px" />}>
                <option>Agadir</option>
                <option>EL Jadida</option>
                <option>Casablanca</option>
                <option>Tanger</option>
            </Select>
        </Box>);
}

export const RTL = () => {
    return (
        <Box p="medium" dir="rtl">
            <DirectionManager dir="rtl">
                <Label alignItems="center">Villes</Label>
                <Select id='country'
                    name='country'
                    defaultValue='Casablanca'
                    mt="medium"
                    >
                    <option>Agadir</option>
                    <option>EL Jadida</option>
                    <option>Casablanca</option>
                    <option>Tanger</option>
                </Select>
            </DirectionManager>
        </Box>);
}

export const VisualStates = () => {
    return (
        <Box p="medium">
            <Label>Change the state of the select using the knobs: </Label>
            <Select state={select('state', ['default', 'danger', 'success', 'info'])} options={{
                'this': {},
                'or': {},
                'that': {},
            }} />
        </Box>
    )
}

export default {
    title: 'Primitives/Form/Select',
    decorators: [withKnobs],
}