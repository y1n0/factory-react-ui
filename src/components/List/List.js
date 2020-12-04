
import React, { forwardRef } from "react";
import {Box} from '../Box';

const List_ = ({horizontal, ordered, ...rest}, ref) => {

    return <Box.WithoutConfig
            ref={ref}
            as={ordered ? "ol" : "ul"}
            variant="lists.default"
            __css={{
                display: 'flex',
                flexDirection: horizontal ? "row" : "column",
                listStyle: ordered ? 'decimal inside' : null,
            }}
            {...rest}
        />
}

export const List = forwardRef(List_)