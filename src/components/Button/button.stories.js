import React from 'react';
import { withKnobs} from "@storybook/addon-knobs";
import {css} from '@styled-system/css';

import {StyledButton} from './StyledButton';


export const BaseButton = () => {

    return (
        <StyledButton variant="primary"  px="medium" py="small">
                click me
        </StyledButton>
    );
}

export default {
    title: 'Button',
    decorators: [withKnobs],
};