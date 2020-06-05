import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import { Box } from '../Box';
import { findVisibleParent, findVisibleParentByClassName } from '../../core';


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



const SlideSubtitle = ({subtitle}) => {
    if(typeof subtitle === 'string') {
        return <Box>{subtitle}</Box>
    }
    else {
        return subtitle;
    }
}

const SlideIamge =  ({imageSrc, ...rest}) => {

    return <Box
        __css={{
            height: '100%',
            width: '100%',
            objectFit: 'cover'
        }}
        as="img"
        src={imageSrc} 
        {...rest} />
}



export const Slider = React.forwardRef(({children, ...rest}, ref) => {
    return (<SliderWrapper>
        <Box ref={ref} as={SlickSlider} {...rest}>
            {children}
        </Box>
    </SliderWrapper>)
});

export const Slide = ({ children, subtitle = null, content= null, image = null, video, ...rest }) =>{
    
    const ref = useRef(null);

    useEffect(() => {
        console.log("---------------------");
        console.log('parent: ',findVisibleParentByClassName(ref.current, 'slick-slide'));
        console.log("---------------------");
    })

    // findVisibleParent()
    
    return <Box ref={ref} __css={{
    minHeight: '1px',
    height: '500px',
    width: '100%',
    display: 'flex !important',
    position: 'relative',
    '&:before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top:0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,.35)',
    }
  }} {...rest}>

      {subtitle && <SlideSubtitle subtitle={subtitle} />}
      {image && <SlideIamge imageSrc={image} />}
      {content &&  <Box sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: 0,
          left: 0,
      }}>
        {content}
      </Box> }
     
      
  </Box>}