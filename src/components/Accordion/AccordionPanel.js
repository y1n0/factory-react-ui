import React, { forwardRef, useContext, cloneElement } from 'react';
import { AccordionContext } from './AccordionContext';
import { getVariant, getSystemProps } from '../../core';

import { Box, MotionBox } from '../../components';


const PanelHeaderBaseStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderBottom: '2px solid',
  borderColor: 'gray300',
  marginBottom: '-1px',
  backgroundColor: 'transparent',
  py: ['medium', null, 'large'],
  px: 0
};

export const AccordionPanel = forwardRef(
  (
    {
      children,
      header,
      title,
      variant,
      key,
      sx,
      animationTransition = { ease: "easeInOut", duration: 0.3 },
      ...rest
    },
    ref,
  ) => {

    const { active, variant: variantAccordion, onPanelChange } = useContext(AccordionContext);


    const motionVariantsContent = {
      active: {
        height:"unset",
        display:"block",
        transition: animationTransition
      },
      inactive: {
        height:"0px",
        transitionEnd: {
          display: "none",
        },
      }
    }

    if (variant === undefined) {
      variant = variantAccordion;
    }

    return (
      <MotionBox
        className={`vf-accordion-panel ${ active ? 'vf-accordion-panel--active': ''}`}
        ref={ref}
        __css={{
          border:0,
          '&:not(:last-of-type)': {
            borderBottom: 0,
          }
        }}
        sx={sx}
        {...getSystemProps(rest)}
      >

        <MotionBox
          className="vf-accordion-panel__title-container"
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
                className="vf-accordion-panel__title"
                __css={PanelHeaderBaseStyle}
              >
                {title}
              </Box>
            ) :
            cloneElement(title, { __css: PanelHeaderBaseStyle, className:'vf-accordion-panel__title' })
          }
        </MotionBox>


        <MotionBox
          initial="inactive"
          animate={active ? 'active': 'inactive'}        
          variants={motionVariantsContent}
          __css={{
             overflow: 'hidden',
          }}
        >
          <Box
            __css={{
              py: ['medium', null, 'large'],
              px: 0
            }}
            className="vf-accordion__panel-content"
            variant={getVariant([variant, 'content'])}
          >

          {children}
          </Box>
        </MotionBox>

      </MotionBox>
    );



  });