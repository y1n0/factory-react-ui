import React from 'react';
import { Box } from '../Box';
import { Icon } from '../Icon';
import RCPagination from 'rc-pagination';


const PaginationPageButton = (props) => <Box
    __css={{
        backgroundColor: '#fff',
        border: '1px solid',
        borderColor: 'gray400',
        padding: 'small',
        fontSize: '14px',
        borderRadius: '4px',
        minWidth: '42px',
        height: '42px',
        mx: '8px',
        textAlign: 'center',
        ':hover': {
            cursor: 'pointer',
            borderColor: 'primary500',
            color: 'primary500'
        },
        '.rc-pagination-item-active &': {
            color: '#fff',
            backgroundColor: 'primary500',
            borderColor: 'primary500'
        }
    }}>
    {props.children}
</Box>


const PaginationPrevNextButton = (props) => <Box
    __css={{
        backgroundColor: 'gray200',
        border: '1px solid',
        borderColor: 'gray400',
        padding: 'small',
        fontSize: '14px',
        borderRadius: '4px',
        minWidth: '42px',
        height: '42px',
        mx: '8px',
        textAlign: 'center',
        ':hover': {
            cursor: 'pointer',
        },
        '.rc-pagination-next[aria-disabled=true] &': {
            cursor: 'not-allowed',
            color: 'gray500'
        },
        '.rc-pagination-prev[aria-disabled=true] &': {
            cursor: 'not-allowed',
            color: 'gray500'

        }

    }}>
    {props.children}
</Box>


const PaginationJumpButton = (props) => <Box
    __css={{
        backgroundColor: 'transparent',
        border: '1px solid',
        borderColor: 'transparent',
        padding: 'small',
        fontSize: '14px',
        borderRadius: '4px',
        minWidth: '42px',
        height: '42px',
        mx: '8px',
        textAlign: 'center',
        ':hover': {
            cursor: 'pointer',
            color: 'primary500'
        },

    }}>
    {props.children}
</Box>


const itemRender = (current, type, element) => {
    if (type === 'page') {
        return <PaginationPageButton>{current}</PaginationPageButton>;
    }
    if (type === 'prev') {
        return <PaginationPrevNextButton><Icon size="14px" name="chevron-left" /></PaginationPrevNextButton>;
    }
    if (type === 'next') {
        return <PaginationPrevNextButton><Icon size="14px" name="chevron-right" /></PaginationPrevNextButton>;
    }
    if (type === 'jump-prev') {
        return <PaginationJumpButton><Icon size="14px" name="chevrons-left" /></PaginationJumpButton>;
    }
    if (type === 'jump-next') {
        return <PaginationJumpButton><Icon size="14px" name="chevrons-right" /></PaginationJumpButton>;
    }
    return element;
};


export const Pagination = ({
    sx,
    ...props
}) => {

    return (
        <Box __css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            '& [class^="rc-pagination"]:focus': {
                outline: 'none'
            },
        }} as={RCPagination} {...props} sx={sx} itemRender={itemRender}></Box>
    );
}