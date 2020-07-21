import React from 'react';

import { Box } from 'components';
import ReactMarkdown from 'react-markdown';
import readme from './README.md';
import 'github-markdown-css';

export const README = () => {

    return (
            <Box p="3rem" className="markdown-body">
                <ReactMarkdown source={readme} />
            </Box>

    );
}

export default {
    title: 'Getting Started'
}
