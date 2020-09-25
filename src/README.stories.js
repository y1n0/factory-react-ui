import React from 'react';

import { Box } from 'components';
import ReactMarkdown from 'react-markdown';
import readme from './README.md';
import faq from './FAQ.md';
import responsive from './responsive.md';
import 'github-markdown-css';

export const README = () => {

    return (
            <Box p="3rem" className="markdown-body">
                <ReactMarkdown source={readme} />
            </Box>

    );
}

export const FAQ = () => {

    return (
            <Box p="3rem" className="markdown-body">
                <ReactMarkdown source={faq} />
            </Box>

    );
}

export const Responsive = () => {
    return (
        <Box p="3rem" className="markdown-body">
            <ReactMarkdown source={responsive} />
        </Box>

); 
}

export default {
    title: 'Getting Started'
}
