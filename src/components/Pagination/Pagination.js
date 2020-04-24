import React from 'react';
import { Box } from '../Box';
import RCPagination from 'rc-pagination';

const itemRender = (current, type, element) => {
    if (type === 'page') {
      return <Box __css={{border: '1px solid #000', padding: 'small'}}>{current}</Box>;
    }
    if (type === 'prev') {
        return <Box>Prev</Box>;
    }
    if (type === 'next') {
        return <Box>Next</Box>;
    }
    if (type === 'jump-prev') {
        return <Box>pppppp</Box>;
    }
    if (type === 'jump-next') {
        return <Box>qqqqq</Box>;
    }
    return element;
};


export const Pagination = ({
    sx,
    ...props
}) => {

    return (
        <Box   __css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            border: "1px solid red",
            padding: 'small',
            backgroundColor: 'gray200'
        }} as={RCPagination} {...props} itemRender={itemRender}></Box>
    );
}