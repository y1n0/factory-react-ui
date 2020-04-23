import React, { forwardRef, useContext, useMemo, useState, cloneElement } from 'react';
import { ThemeContext } from 'styled-components';
import { Box } from '../Box';
import { Text } from '../Typography';

import { props as systemProps } from '@styled-system/should-forward-prop';
import { AccordionContext } from './AccordionContext';


const PanelProps = [
  ...systemProps,
  'sx',
];

const MARGIN_REG_EXP = /^m[trblxy]?$/;
const PADDING_REG_EXP = /^p[trblxy]?$/;

const PRE = new RegExp(`^(${PanelProps.join('|')})$`);
const getProps = (test) => (props) => {
  const next = {}
  for (const key in props) {
    if (test(key || '')) next[key] = props[key]
  }
  return next
}
const getSystemProps = getProps(k => PRE.test(k));

const getMarginProps = getProps(k => MARGIN_REG_EXP.test(k));
const omitMarginProps = getProps(k => !MARGIN_REG_EXP.test(k));

const getPaddingProps = getProps(k => PADDING_REG_EXP.test(k));
const omitPaddingProps = getProps(k => !PADDING_REG_EXP.test(k));

// TODO : refactor utils

const variantReducer = (accumulator, currentValue) => currentValue ? accumulator + '.' + currentValue : accumulator;
const getVariant = (variant = []) => {
  if (typeof variant === 'string') {
    return variant
  }
  return variant.reduce(variantReducer)
}


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
      variant,
      key,
      ...rest
    },
    ref,
  ) => {

    let Header;
    if (header) {
      Header = cloneElement(header, {
        __css: { marginBottom: '-1px' },
      });
    }

    const theme = useContext(ThemeContext) || {};
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
        variant={getVariant(['accordion', variant, 'panel'])}
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
                variant={getVariant(['accordion', variant, 'header'])}
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
          variant={getVariant(['accordion', variant, 'content'])}
        >
          {children}
        </Box>

      </Box>
    );



  });