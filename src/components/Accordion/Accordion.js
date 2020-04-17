import React, { useState, Children, cloneElement }  from 'react';

import { Box } from '../Box';
import { Button } from '../Button';

export const AccordionButton = props => {
    const transform = props.open ? 'rotate(-180 8 8)' : 'rotate(0 8 8)'
    const disabled = props.pathname && props.pathname.includes(props.href)
    return (
      <Button
        title="Expand Section"
        disabled={disabled}
        {...props}
        sx={{
          appearance: 'none',
          display: 'flex',
          alignItems: 'center',
          p: 2,
          m: 0,
          border: 0,
          borderRadius: 0,
          color: 'inherit',
          bg: 'transparent',
          ':hover,:focus': {
            color: 'primary',
          },
          '&:disabled': {
            opacity: 0.25,
          },
        }}>
        <svg viewBox="0 0 16 16" width="12" height="12">
          <g
            sx={{
              transformOrigin: '8 8',
              transition: 'transform .1s ease-out',
            }}
            transform={transform}>
            <path
              stroke="currentcolor"
              strokeWidth="2"
              fill="none"
              d="M14 6 L8 12 L2 6"
            />
          </g>
        </svg>
      </Button>
    )
  }

export const NavLinks = ({ open, pathname = '', links, href, Link, ...props }) => {
    if (!links) return false
    if (!open && !pathname.includes(href)) return false
  
    return (
      <ul
        sx={{
          listStyle: 'none',
          m: 0,
          p: 0,
        }}>
        {links.map((link, j) => (
          <li key={j}>
            <Link
              href={link.props.href}
              children={link.props.children}
              className={link.props.className}
              sx={{
                pl: 4,
              }}
            />
          </li>
        ))}
      </ul>
    )
  }
  



export const AccordionContainer = ({children, ...props}) => {

    const [active, setActive] = useState(0);


    const handleClickItem = index => {
        setActive(index);
    }

    const AccordionItems  = Children.map(
        children,
        (accordionItem, index) => {
            return cloneElement(accordionItem, {
                index,
                active: active === index,
                onClickItem: () => handleClickItem(index)
            });
        },
        this
    );
    return (<Box
        {...props}
        __css={{
        }}
    >
        {AccordionItems}
    </Box>);
}

export const AccordionItem = ({title, body, index, active,onClickItem, ...props}) => {
    const aTtitle = typeof title === 'function' ? title() : title;
    return (<Box
        {...props}
        __css={{
            border: "1px solid black",
        }}
    >
        <AccordionTitle onClickTitle={onClickItem} index={index}>{aTtitle}</AccordionTitle>  
        <AccordionBody active={active}>{body}</AccordionBody>
    </Box>);
}
export const AccordionTitle = ({onClickTitle,index, ...props}) => {

    const handleClickEvent = event => {
        if (event) {
            event.preventDefault();
        }
        onClickTitle();
    }
    return (<Box
        {...props}
        __css={{
            cursor: 'pointer',
        }}
        onClick={handleClickEvent}
    >
        {props.children}
    </Box>);
}
export const AccordionBody = ({active, bodyWeight, ...props}) => {

    return (<Box
        {...props}
        __css={{
            padding: '8px',
            display: 'block',
            position: 'relative',
            padding: 0,
            margin: 0,
            height: active? `auto`: 0,
            overflow: 'hidden',
        }}
    >
        {props.children}
    </Box>);
}