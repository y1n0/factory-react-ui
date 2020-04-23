
import React, { Children, forwardRef, useState } from 'react';

import { AccordionContext } from './AccordionContext';
import { Box } from '../Box';

const activeAsArray = active =>
    typeof active === 'number' ? [active] : active;

// TODO : refactor utils
const variantReducer = (accumulator, currentValue) => currentValue ? accumulator + '.' + currentValue : accumulator;
const getVariant = (variant = []) => {
    if (typeof variant === 'string') {
        return variant
    }
    return variant.reduce(variantReducer)
}


export const Accordion = forwardRef(
    ({ activeIndex,
        children,
        multiple,
        onChange,
        variant,
        ...rest
    }, ref) => {

        const [activeIndexes, setActiveIndexes] = useState([]);
        const [stateActiveIndex, setStateActiveIndex] = useState();

        const derivedActiveIndexes = activeAsArray(activeIndex) || [];

        if ((typeof activeIndex !== 'undefined' || activeIndex !== stateActiveIndex) &&
            (derivedActiveIndexes.join() !== activeIndexes.join())) {
            setActiveIndexes(derivedActiveIndexes);
            setStateActiveIndex(activeIndex);
        }


        const onPanelChange = index => {
            let nextActiveIndexes = [...(activeIndexes || [])];

            const nextActiveIndex = nextActiveIndexes.indexOf(index);
            if (nextActiveIndex > -1) {
                nextActiveIndexes.splice(nextActiveIndex, 1);
            } else if (multiple) {
                nextActiveIndexes.push(index);
            } else {
                nextActiveIndexes = [index];
            }

            setActiveIndexes(nextActiveIndexes);
            if (onChange) {
                onChange(nextActiveIndexes);
            }
        };

        const panels = Children.toArray(children)
            .filter(child => child)
            .map((child, index) => {
                const key = child.props.panelKey || index;
                return (
                    <AccordionContext.Provider
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        value={{
                            active: activeIndexes.indexOf(key) > -1,
                            onPanelChange: () => onPanelChange(key),
                            variant
                        }}
                    >
                        {child}
                    </AccordionContext.Provider>
                )
            });

        return (
            <Box
                ref={ref}
                variant={getVariant(['accordion', variant])}
                {...rest}>
                {panels}
            </Box>
        );


    })