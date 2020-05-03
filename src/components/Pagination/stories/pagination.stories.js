import React from 'react';
import { Box } from '../../Box';
import { Pagination } from '../Pagination';


export const Default = () => {

    return <Box>
        <Box mb="24px">
            <Pagination total={25} />
        </Box>
        <Box>
            <Pagination total={100} />
        </Box>
    </Box>
}

export const Jumper = () => {

    return <Box>
        <Box>
            <Pagination
                showSizeChanger
                defaultPageSize={20}
                defaultCurrent={5}
                total={450} />
        </Box>

        <Box>
            <Pagination
                showLessItems={true}
                defaultPageSize={20}
                defaultCurrent={5}
                total={450} />
        </Box>
    </Box>
}

export default {
    title: 'Pagination',
};