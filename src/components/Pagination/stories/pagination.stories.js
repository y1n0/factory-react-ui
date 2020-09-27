import React, { useState } from 'react';
import { Box } from '../../Box';
import { Pagination } from '../Pagination';
import { Select } from '../../Form';


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

export const PageSize = () => {

    const [pageSize, setPageSize] = useState(10);

    return <Box>
        <Box>
            <Pagination
                selectComponentClass={Select}
                showSizeChanger={true}
                onShowSizeChange={(curr, size) => setPageSize(size)}
                pageSize={pageSize}
                defaultCurrent={1}
                total={400} />
        </Box>
    </Box>
}
export const GoTo = () => {

    const [pageSize, setPageSize] = useState(10);

    return <Box>
        <Box>
            <Pagination
                showQuickJumper
                showSizeChanger={true}
                pageSize={pageSize}
                defaultCurrent={1}
                total={400} />
        </Box>
    </Box>
}

export default {
    title: 'Components/Pagination',
};