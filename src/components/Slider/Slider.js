import React from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import { Box } from '../Box';

import { Icon } from '../Icon';

const SliderWrapper = styled.div`
.slick-list,
.slick-slider,
.slick-track {
    position: relative;
    display: block;
}
.slick-loading .slick-slide,
.slick-loading .slick-track {
    visibility: hidden;
}
.slick-slider {
    box-sizing: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-touch-callout: none;
    -khtml-user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
}
.slick-list {
    overflow: hidden;
    margin: 0;
    padding: 0;
}
.slick-list:focus {
    outline: 0;
}
.slick-list.dragging {
    cursor: pointer;
    cursor: hand;
}
.slick-slider .slick-list,
.slick-slider .slick-track {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}
.slick-track {
    top: 0;
    left: 0;
}
.slick-track:after,
.slick-track:before {
    display: table;
    content: "";
}
.slick-track:after {
    clear: both;
}
.slick-slide {
    display: none;
    float: left;
    height: 100%;
    min-height: 1px;
}
[dir="rtl"] .slick-slide {
    float: right;
}
.slick-slide img {
    display: block;
}
.slick-slide.slick-loading img {
    display: none;
}
.slick-slide.dragging img {
    pointer-events: none;
}
.slick-initialized .slick-slide {
    display: block;
}
.slick-vertical .slick-slide {
    display: block;
    height: auto;
    border: 1px solid transparent;
}
.slick-arrow.slick-hidden {
    display: none;
}

`;


export const Arrow = ({children, ...rest}) => <Box  as='button'
                                        __css={{
                                            fontSize: 0,
                                            lineHeight: 0,
                                            position: 'absolute',
                                            top: '50%',
                                            display: 'block',
                                            padding: 0,
                                            transform:' translate(0,-50%)',
                                            cursor: 'pointer',
                                            color: '#fff',
                                            border: '0 solid transparent',
                                            width: '64px',
                                            height: '64px',
                                            outline: 0,
                                            background: 'transparent',
                                            zIndex: 1,
                                        }}
                                        {...rest}>
                                            {children}
                                        </Box>

export const PrevArrow = props => <Arrow sx={{left: ['calc((100% - 960px)/2 + 10px)',null,'calc((100% - 760px)/2 + 10px)','calc((100% - 960px)/2 + 10px)','calc((100% - 1140px)/2 + 10px)']}}  {...props}  >
  <Icon name="chevron-left" size="xxlarge" />
</Arrow>
export const NextArrow = props => <Arrow sx={{right: ['calc((100% - 960px)/2 + 10px)',null,'calc((100% - 760px)/2 + 10px)','calc((100% - 960px)/2 + 10px)','calc((100% - 1140px)/2 + 10px)']}}  {...props}  >
<Icon name="chevron-right" size="xxlarge" />
</Arrow>


export const appendDots = dots => <Box
    as="ul"
    __css={{
        bottom: 'auto',
        display: 'block',
        listStyle: 'none',
        textAlign: 'center',
        padding: 0,
        margin: '1rem auto 0',

        '& > li' : {
            position: 'relative',
            display: 'inline-block',
            margin: '0 5px',
            width: '12px',
            height: '12px',
            cursor: 'pointer',
        },

        '& > li > button' : {
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            outline: 0,
            borderRadius: '50%',
            backgroundColor: 'transparent',
            textIndent: '-999em',
            cursor: 'pointer',
            position: 'absolute',
            border: '1px solid',
            borderColor: 'primary500',
            padding: 0,
        },
        '& > li > button::after' : {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width:' 100%',
            height: '100%',
            visibility: 'hidden',
            background: 'primary500',
            borderRadius: '50%',
            boxShadow: '0 0 1px #02afbc',
            opacity: 0,
            transform:' scale(2.5)',
            transition: 'opacity .3s ease, transform .3s ease, visibility 0s .3s',
        },
        '& > li.slick-active > button::after' :{
            visibility: 'visible',
            opacity: 1,
            transform: 'scale(1.5)',
            transition: 'opacity .3s ease,transform .3s ease',
        }
    }}
>{dots}</Box>

export const Slider = React.forwardRef(({children, ...rest}, ref) => {
    return (<SliderWrapper>
        <Box    ref={ref}
                as={SlickSlider}
                __css={{
                    '& .slick-slide': {
                            px: ['8px', null, '0px']
                        }
                    }}
                {...rest}>
            {children}
        </Box>
    </SliderWrapper>)
});

