import React from 'react';
import { Select } from '../Select';
import { Box } from '../../Box';
import { withKnobs } from '@storybook/addon-knobs';
import {Label} from '../Label';
import {Icon} from '../../Icon';




export const DefaultSelect = () => {
    return (
        <Box p="medium">
        <Label alignItems="center">Villes</Label>
            <Select pr="32px"
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
                        pr="32px"
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

export const CustomDownarrow = () => {
    return (
        <Box p="medium">
            <Label alignItems="center">Villes</Label>
                <Select id='country'
                        name='country'
                        defaultValue='Casablanca'
                        mt="medium"
                        pr="43px"
                        icon={<Icon name="chevron-down" size="medium" />}>
                            <option>Agadir</option>
                            <option>EL Jadida</option>
                            <option>Casablanca</option>
                            <option>Tanger</option>
                        </Select>
        </Box>);
}

export default {
    title: 'Form/Select',
    decorators: [withKnobs],
}