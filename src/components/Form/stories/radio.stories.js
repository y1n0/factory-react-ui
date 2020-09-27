import React from 'react';
import { Radio } from '../Radio';
import { Box } from '../../Box';
import { withKnobs } from '@storybook/addon-knobs';
import {Label} from '../Label';


export const DefaultRadio = () => {
    return (
        <Box p="medium">
            <Label alignItems="center">
                <Radio mr="8px" name='color' id='red' value='red' /> Red
        </Label>
            <Label alignItems="center">
                <Radio mr="8px" name='color' id='green' value='green' /> Green
        </Label>
        <Label alignItems="center">
                <Radio mr="8px" name='color' id='blue' value='blue' /> Blue
        </Label>
        <Label alignItems="center">
                <Radio mr="8px" name='color' id='disabled' value='disabled' disabled/> disabled
        </Label>
        </Box>);
}

export const Sizes = () => {
    return (
        <Box p="medium">
            <Label alignItems="center">
                <Radio mr="8px" name='color' size='small' id='small' value='small' /> small
        </Label>
            <Label alignItems="center">
                <Radio mr="8px" name='color' size='large' id='large' value='large' /> large
        </Label>
            <Label alignItems="center">
                <Radio mr="8px" name='color' size='xlarge' id='xlarge' value='xlarge' disabled /> xlarge
        </Label>
            <Label alignItems="center">
                <Radio mr="8px" name='color' size='45px' id='45px' value='45px' /> 45px
        </Label>
            <Label alignItems="center">
                <Radio mr="8px" name='color' size={{ _: 'large', sm: 'xlarge', md: 'xxlarge' }} id='45px' value='45px' /> Responsive Size
        </Label>
        </Box>);
}

export const Colors = () => {
    return (
        <Box p="medium">
            <Label alignItems="center">
                <Radio mr="8px" name='color' id='gray200' color="gray200" value='gray200' /> gray200
        </Label>
            <Label alignItems="center">
                <Radio mr="8px" name='color' id='gray400' color="gray400" value='gray400' /> gray400
        </Label>
            <Label alignItems="center">
                <Radio mr="8px" name='color' id='primary200' color="primary200" value='primary200' /> primary200
        </Label>

            <Label alignItems="center">
                <Radio mr="8px" name='color' id='success500' value='success500'
                    sx={{
                        'input:checked ~ &': {
                            color: 'success500',
                        },
                    }}
                />  success500
        </Label>

            <Label alignItems="center">
                <Radio mr="8px" name='color' id='variant' value='variant' variant="danger" />  variant
        </Label>
        </Box>);
}

export const CustomIcon = () => {
    return (
        <Box p="medium">
            <Label  mb="16px" alignItems="center">
                <Radio mr="8px" name='color' id='default' value='default' /> Default
        </Label>

        <Label mb="16px" alignItems="center">
                <Radio iconName="add-simple" mr="8px" name='color' id='iconName' value='iconName' /> add-simple as iconName
            </Label>

            <Label mb="16px" alignItems="center">
                <Radio checkedIconName="arrows-left" mr="8px" name='color' id='checkedIconName' value='checkedIconName' /> add-arrows-left as checkedIconName
            </Label>

            <Label mb="16px" alignItems="center">
                <Radio uncheckedIconName="add-simple" mr="8px" name='color' id='checkedIconName' value='checkedIconName' /> add-simple as uncheckedIconName
            </Label>
            <Label mb="16px" alignItems="center">
                <Radio checkedIconName="chevron-down" uncheckedIconName="chevron-top" mr="8px" name='color' id='green' value='green' /> chevron
            </Label>
        </Box>);
}


export default {
    title: 'Primitives/Form/Radio',
    decorators: [withKnobs],
}