import React from 'react';

import { Box } from '../../Box';
import { Button } from '../../Button';
import { SearchOverlay } from '../Search';
import { DirectionManager } from '../../../core';

export const Default = () => {

    const [show, setShow] = React.useState(false);
    const [query, setQuery] = React.useState(null);

    return (
            <Box p="3rem" >

                <Button borderRadius="rounded" outline="primary" onClick={() => setShow(true)}>show</Button>
                {query && <Box>Searching for: {query}</Box>}

                <SearchOverlay  onSubmit={q => { setQuery(q); setShow(false) }}
                    onClose={() => setShow(false)}
                    open={show} />

            </Box>

    );
}

export const RTL = () => {

    const [show, setShow] = React.useState(false);
    const [query, setQuery] = React.useState(null);

    return (
        <DirectionManager dir="rtl">
            <Box p="3rem" dir="rtl" >

                <Button borderRadius="rounded" outline="primary" onClick={() => setShow(true)}>show</Button>
                {query && <Box>Searching for: {query}</Box>}

                <SearchOverlay  onSubmit={q => { setQuery(q); setShow(false) }}
                    onClose={() => setShow(false)}
                    open={show} />

            </Box>
        </DirectionManager>

    );
}
export default {
    title: 'Components/Search Overlay'
}
