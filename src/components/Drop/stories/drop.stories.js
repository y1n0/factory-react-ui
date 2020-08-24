import React, { useState, useRef } from 'react';
import { Box, Flex } from '../../Box';
import { Button } from '../../Button';
import { Drop } from '../Drop';

export const DropButton = () => {
    const [showDrop, setShowDrop] = useState(false);
    const targetRef = useRef();
    return (<Box>

        <Flex alignItem="center" justifyContent="center" p="xlarge">
            <Box as={Button} ref={targetRef} onClick={() => setShowDrop(true)} outline="primary">Drop Button</Box>
            {showDrop && <Drop sx={{ overflow: 'initial' }} onClickOutside={() => setShowDrop(false)} align={{ top: 'bottom', left: 'left' }} target={targetRef.current} stretch={true}>
                <Flex sx={{
                    border: '1px solid',
                    borderColor: 'gray200',
                    backgroundColor: 'white',
                    boxShadow: 3,
                    flexDirection: 'column'
                }}>
                    <Box px="small" py="medium" borderBottom="1px solid" borderBottomColor="gray300">Item 1</Box>
                    <Box px="small" py="medium" borderBottom="1px solid" borderBottomColor="gray300">Item 2</Box>
                    <Box px="small" py="medium">Item 3</Box>
                </Flex>
            </Drop>}
        </Flex>
    </Box>)

}

const Tootltip = ({ children, ...rest }) => <Flex {...rest} __css={{
    p: 'xsmall',
    backgroundColor: 'gray500',
    flexDirection: 'column',
    height: "100%;",
    transform: 'translate(10px, 0)',
    borderRadius: '8px',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: '10px',
        left: '-5px',
        display: 'block',
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
        borderRight: '5px solid rgba(0, 0, 0, 0.6)',
        borderRightColor: 'gray500',
    },
}}>
    {children}
</Flex>
export const Tooltip = () => {
    const [showDrop, setShowDrop] = useState(false);
    const targetRef = useRef();

    return (<Box>

        <Flex alignItem="center" justifyContent="center" p="xxlarge">
            <Box as={Button} ref={targetRef} onClick={() => setShowDrop(true)} onMouseOver={() => setShowDrop(true)} onMouseOut={() => setShowDrop(false)} outline="primary">Show tooltip</Box>
            {showDrop &&
                <Drop sx={{ overflow: 'initial' }} onClickOutside={() => setShowDrop(false)} align={{ top: 'top', left: 'right' }} target={targetRef.current} stretch={true}>
                    <Tootltip>This is a tooltip</Tootltip>
                </Drop>}
        </Flex>
    </Box>)
}


export default {
    title: 'Components/Drop',
};