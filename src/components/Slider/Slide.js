import React, { useRef, useEffect } from 'react';
import { Box } from '../Box';
// import {  findParentByMatchedQuery } from '../../core';



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


export const Slide = ({ children, subtitle = null, content= null, image = null, video, ...rest }) =>{
    
    const ref = useRef(null);

    useEffect(() => {

        // find visible and active parent element of this slide;
        // let el = findParentByMatchedQuery(ref.current, 'slick-slide');
        // if(el.classList && !el.classList.contains('slick-cloned')) {
        // }
    })

    // findVisibleParent()
    
    return <Box ref={ref} __css={{
    minHeight: '1px',
    height: ['300px', null, '500px'],
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
        backgroundColor: 'rgba(0,0,0,.25)',
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