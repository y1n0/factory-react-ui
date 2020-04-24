import React from 'react';
import { Box, Flex } from '../Box';
import {Pagination} from './Pagination'

import { DirectionManager } from '../../core/rtl-manager';



export const Simple = () => {
    
    return (
        <>
            <Pagination total={1000} />
        </>
    )
}

export default {
    title: 'Pagination',
};