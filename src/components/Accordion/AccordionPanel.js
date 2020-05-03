import React, { forwardRef, useContext, cloneElement } from 'react';
import { Box } from '../Box';
import { AccordionContext } from './AccordionContext';
import { getVariant, getSystemProps } from '../../core';



const PanelHeaderBaseStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: '1px solid',
  borderColor: 'gray400',
  marginBottom: '-1px',
};

export const AccordionPanel = forwardRef(
  (
    {
      children,
      header,
      title,
      variant="accordion",
      key,
      sx,
      ...rest
    },
    ref,
  ) => {

    // let Header;
    // if (header) {
    //   Header = cloneElement(header, {
    //     __css: { marginBottom: '-1px' },
    //   });
    // }

    const { active, variant: variantAccordion, onPanelChange } = useContext(AccordionContext);

    if (variant === undefined) {
      variant = variantAccordion;
    }

    return (
      <Box ref={ref}
        __css={{
          border: '1px solid',
          borderColor: 'gray300',
          '&:not(:last-of-type)': {
            borderBottom: 0,
          }
        }}
        sx={sx}
        variant={getVariant([variant, 'panel'])}
        {...getSystemProps(rest)}
      >

        <Box
          role="tab"
          aria-selected={active}
          aria-expanded={active}
          onClick={onPanelChange}
          __css={{
            width: '100%',
            backgroundColor: 'transparent',
            border: 0,
            padding: 0,
            margin: 0,
            '&:hover, &:focus': {
              outline: 'none',
              cursor: 'pointer'
            }
          }}
        >
          {typeof title === 'string' ?
            (
              <Box
                __css={PanelHeaderBaseStyle}
                variant={getVariant([variant, 'header'])}
              >
                {title}
              </Box>
            ) :
            cloneElement(title, { __css: PanelHeaderBaseStyle }) 
            }
        </Box>


        <Box
          __css={{
            maxHeight: active ? 'unset' : '0px',
            visibility: active ? 'visible' : 'hidden',
            overflow: active ? null : 'hidden',
            display: active ? null : 'none',
          }}
          variant={getVariant([variant, 'content'])}
        >
          {children}
        </Box>

      </Box>
    );



  });