import React, { forwardRef } from 'react';
import { Box } from '../Box';
import { Icon } from '../Icon';
import {getSystemProps} from '../../core';

const SVG = ({ size = 24, ...props }) =>
    <Box
        as='svg'
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill='currentcolor'
        {...props}
    />

const CheckboxChecked = props =>
  <SVG {...props}>
    <path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </SVG>

const CheckboxUnchecked = props =>
  <SVG {...props}>
    <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
  </SVG>

const CheckboxIcon = ({iconName ,checkedIconName, uncheckedIconName, size =  '24px' , ...props }) =>
{ 
    return (<React.Fragment>
        {
            (iconName || checkedIconName) ? <Icon size={size}
                name={iconName || checkedIconName}
                {...props}
                __css={{
                    display: 'none',
                    'input:checked ~ &&': {
                        display: 'block',
                    }
                }} /> :
                <CheckboxChecked
                    size={size}
                    {...props}
                    __css={{
                        display: 'none',
                        'input:checked ~ &&': {
                            display: 'block',
                        }
                    }}
                />
        }
        {
            (iconName || uncheckedIconName) ? <Icon size={size}
                name={iconName || uncheckedIconName}
                {...props}
                __css={{
                    display: 'block',
                    'input:checked ~ &&': {
                        display: 'none',
                    }
                }}
            /> :
                <CheckboxUnchecked
                    size={size}
                    {...props}
                    __css={{
                        display: 'block',
                        'input:checked ~ &&': {
                            display: 'none',
                        }
                    }}
                />

        }



    </React.Fragment>)}



export const Checkbox = forwardRef(({
    className,
    sx,
    iconName,
    checkedIconName,
    uncheckedIconName,
    variant,
    ...props }, ref) => {
        return (
        <Box>
            <Box
                ref={ref}
                as='input'
                type='checkbox'
                {...props}
                sx={{
                    position: 'absolute',
                    opacity: 0,
                    zIndex: -1,
                    width: 1,
                    height: 1,
                    overflow: 'hidden',
                }}
            />
            <Box.WithoutConfig
                as={CheckboxIcon}
                aria-hidden='true'
                variant={`checkbox${variant ? '.'+variant : ''}`}
                className={className}
                uncheckedIconName={uncheckedIconName}
                checkedIconName={checkedIconName}
                iconName={iconName}
                sx={sx}
                {...getSystemProps(props)}
                __css={{
                    mr: 'small',
                    borderRadius: 4,
                    color: 'gray500',
                    'input:checked ~ &&': {
                        color: 'primary500',
                    },
                    'input:focus ~ &&': {
                        bg: 'primary100',
                    },
                    'input:disabled ~ &&': {
                        bg: 'gray300',
                        color: 'gray200',
                    }
                }}
            />
        </Box>
    )});