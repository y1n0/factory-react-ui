import React, { useRef, useEffect } from 'react';
import { Box } from '../Box';
import YouTube from 'react-youtube';
import { findParentByMatchedQuery } from '../../core';



const SlideSubtitle = ({ subtitle }) => {
    if (typeof subtitle === 'string') {
        return <Box>{subtitle}</Box>
    }
    else {
        return subtitle;
    }
}

const SlideIamge = ({ imageSrc, ...rest }) => {

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

const SlideVideo = ({ videoId, sx, variant, opt, ...rest }) => {

    const options = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
            loop: 1,
        },

        ...opt
    }

    return <Box __css={{
        width: '100%',
        height: '100%',
        background: '0 0',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        overflow: 'hidden',
        '& > div:first-child, & iframe': {
            height: '100%',
            width: '100%'
        },

    }}
        variant={variant}
        sx={variant}
    >
        <YouTube {...rest} opt={options} videoId={videoId} />
    </Box>
}


export const Slide = ({ children, isActive = false, subtitle = null, content = null, bgImage = null, videoId = null, ...rest }) => {

    const ref = useRef(null);
    const refVideo = useRef(null);

    const toggleVideo = (_isActive) => {
        if (refVideo.current) {
            if (_isActive) {
                // find visible and active parent element of this slide;
                let el = findParentByMatchedQuery(ref.current, 'slick-slide');
                if (el.classList && !el.classList.contains('slick-cloned')) {
                    refVideo.current.playVideo();
                }
            } else {
                refVideo.current.pauseVideo()
            }
        }
    }

    useEffect(() => {
        toggleVideo(isActive);
    }, [isActive]);

    const onVideoReady = e => {
        refVideo.current = e.target;
        toggleVideo(isActive);
    }

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
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,.25)',
        }
    }} {...rest}>

        {videoId && <SlideVideo videoId={videoId} onReady={onVideoReady} />}
        {subtitle && <SlideSubtitle subtitle={subtitle} />}
        {bgImage && <SlideIamge imageSrc={bgImage} />}
        {content && <Box sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
        }}>
            {content}
        </Box>}


    </Box>
}