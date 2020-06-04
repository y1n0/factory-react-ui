import React from 'react';

import {Box} from '../../Box';
import {Button} from '../../Button';
import { SearchOverlay } from '../Search';

export const Default = () => {

    const [show, setShow] = React.useState(false);

    return (
        <Box p="3rem" >
            <Button borderRadius="rounded" outline="primary" onClick={() => setShow(true)}>show</Button>
            <SearchOverlay open={show}>Search Overlay</SearchOverlay>
        </Box>);
}
export default {
    title: 'Search Overlay'
}
