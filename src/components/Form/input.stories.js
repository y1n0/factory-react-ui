import React from 'react';
import { withKnobs } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions"

import {Text} from '../Typography';
import { Box } from '../Box';
import Input, {Password} from './Input';


export const Default = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" variant="default" placeholder="placeholder" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" variant="default" placeholder="placeholder" width="100%" />
            </Box>
        </Box>
    );
}

export const Status = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" placeholder="default" onChange={action("default")}/>
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="primary" placeholder="primary"onChange={action("primary")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="success" placeholder="success"onChange={action("success")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="danger" placeholder="danger" onChange={action("danger")}/>
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="info" placeholder="info"onChange={action("info")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" status="warning" placeholder="warning" onChange={action("warning")}/>
            </Box>
        </Box>
    );
}
export const Sizes = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="small" placeholder="small"onChange={action("small")} />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="medium" placeholder="medium" onChange={action("medium")}/>
            </Box>
            <Box my="xsmall" px="xsmall">
                <Input type="text" size="large" placeholder="large" onChange={action("large")}/>
            </Box>
        </Box>
    );
}

export const Types = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">Text</Text>
                <Input type="text" placeholedr="placeholder" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">Date</Text>
                <Input type="date" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">Textarea</Text>
                <Input  as="textarea"></Input>
            </Box>
        </Box>
    );
}
export const Disabled = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Input type="text" disabled placeholder="disabled" onChange={action("disabled")}/>
            </Box>
        </Box>
    );
}

export const PasswordInput = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">Textdefaultarea</Text>
                <Password placeholder="password" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">small</Text>
                <Password size="small" placeholder="password" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">medium</Text>
                <Password size="medium" status="primary" placeholder="password" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">large</Text>
                <Password size="large" placeholder="password" />
            </Box>
            <Box my="xsmall" px="xsmall">
                <Text m="xsmall">full width</Text>
                <Password  width="100%" />
            </Box>
        </Box>
    )
}

export default {
    title: 'Input',
    decorators: [withKnobs],
};