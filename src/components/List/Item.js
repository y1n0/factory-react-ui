
import React, { forwardRef } from "react";
import {Box} from '../Box';

const Item_ = (props, ref) => {

    return <Box.WithoutConfig
            ref={ref}
            as="li"
            {...props}
        />
}

export const Item = forwardRef(Item_)