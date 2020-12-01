import React, {forwardRef} from 'react';
import {Box} from '../Box';

export const Image = forwardRef((props, ref) => <Box.WithoutConfig
    ref={ref}
    as='img'
        {...props}
        __css={{
            maxWidth: '100%',
            height: 'auto',
        }}
    />
)