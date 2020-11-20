import React, { forwardRef } from 'react';
import { Box } from '../Box';
import { props as systemProps } from '@styled-system/should-forward-prop';
import { Icon } from '../Icon';

const RadioProps = [
    ...systemProps,
    'sx',
    'variant',
    'iconName',
    'checkedIconName',
    'uncheckedIconName'

];

const PRE = new RegExp(`^(${RadioProps.join('|')})$`);
const getProps = (test) => (props) => {
    const next = {}
    for (const key in props) {
        if (test(key || '')) next[key] = props[key]
    }
    return next
}
const getSystemProps = getProps(k => PRE.test(k));



const SVG = ({ size, ...props }) =>
    <Box
        as='svg'
        xmlns="http://www.w3.org/2000/svg"
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill='currentcolor'
        {...props}
    />

const RadioChecked = props =>
    <SVG {...props}>
        <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </SVG>

const RadioUnchecked = props =>
    <SVG {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
    </SVG>


const RadioIcon = ({iconName ,checkedIconName, uncheckedIconName, size =  '24px' , ...props }) =>
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
                <RadioChecked
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
                <RadioUnchecked
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
    


export const Radio = forwardRef(({
    className,
    sx,
    variant,
    ...props }, ref) => (
        <Box>
            <Box
                ref={ref}
                as='input'
                type='radio'
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
                as={RadioIcon}
                aria-hidden='true'
                variant={`radio${variant ? '.'+variant : ''}`}
                className={className}
                sx={sx}
                {...getSystemProps(props)}
                __css={{
                    mr: 'small',
                    borderRadius: 9999,
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
    ));