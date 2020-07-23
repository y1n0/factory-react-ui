
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'components';
import {
    Box,
    Flex,
    Image,
    Heading,
    Anchor,
    Paragraph,
    Link,
    Icon,
    MotionBox,
    Button,
} from 'components';

import { useAnimation } from "framer-motion";
import { useColorMode, ColorModeProvider, DirectionManager } from 'core';


const Skeleton = ({ loading = true, count = 1, duration, ...rest }) => {

    let skeletons = [];
    for (let i = 0; i < count; i++) {
        skeletons.push(<MotionBox
            key={i}
            {...rest}
            __css={{
                display: 'block',
                width: '100%',
                height: '20px',
                borderRadius: 'small',
                backgroundColor: 'skeletonBackground',
                marginBottom: '8px',
                opacity: 1,
            }}
            animate={{ opacity: [1, 0.6, 1] }}
            transition={{
                loop: Infinity,
                ease: "easeInOut",
                duration: 1.5
            }}
        />);
    }
    return <> {skeletons} </>

}

const WafasalafVerticalCard = ({ loading = true, ...rest }) => {

    const thumbnailAnimationCtrls = useAnimation();
    const thumbnailAnimationVariants = {
        onMouseEnter: {
            scale: 1.2
        },
        onMouseLeave: {
            scale: 1
        }
    }

    return (
        <Flex
            as="article"
            variant="card.variant1"
            role="article"
            className="vf-card vf-card--variant1"
            sx={{
                overflow: 'hidden',
                flexDirection: 'column',
                minWidth: 0,
                position: 'relative',
                width: '100%',
                backgroundColor: 'backgroundBasic100',
                boxShadow: '1',
                borderRadius: 'small',
                mb: ['medium', null, '0'],
            }}
            onMouseEnter={() => thumbnailAnimationCtrls.start('onMouseEnter')} onMouseLeave={() => thumbnailAnimationCtrls.start('onMouseLeave')}
        >
            <Box className="vf-card__thumbnail-wrapper"
                sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    '&:before': {
                        display: 'block',
                        content: '""',
                        width: '100%',
                        paddingTop: '56.25%',
                    },
                }}
            >
                {
                    loading ?
                        <>
                            <Skeleton sx={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                height: '100%',
                                width: '100%',
                                borderRadius: 0,
                            }} />
                        </>
                        :
                        <MotionBox className="vf-card__thumbnail"
                            as={Image}
                            initial="active"
                            variant="card.variant1.thumbnail"
                            animate={thumbnailAnimationCtrls}
                            variants={thumbnailAnimationVariants}
                            transition={{ ease: 'linear', duration: 0.3 }}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                bottom: 0,
                                right: 0,
                                left: 0,
                                height: '100%',
                                width: '100%'
                            }}
                            src="https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80" />
                }
            </Box>
            <Box className="vf-card__body" variant="card.variant1.body" p="medium">
                {
                    loading ?

                        <>
                            <Skeleton width="70%" mb="24px" />
                            <Skeleton count={3} height="12px" mb="8px" />
                            <Skeleton width="140px" height="40px" mb="8px" mt="24px" />
                        </>
                        :
                        <>
                            <Heading
                                className="vf-card__title"
                                level="4"
                                variant="card.variant1.title"
                                fontSize="24px"
                                lineHeight="30px"
                                color="textBasic500"
                                fontWeight="bold"
                                mb="large"
                            >
                                <Anchor href="#">Lorem ipsum dolor sit amet, consectetur</Anchor>
                            </Heading>



                            <Paragraph className="vf-card__excerpt"
                                level="4"
                                variant="card.variant1.excerpt"
                                fontSize="16px"
                                fontWeight="400"
                                color="textBasic500"
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu convallis nisi. Curabitur lobortis,
                                ipsum commodo scelerisque ullamcorper, ipsum enim ultrices sapien,
                        </Paragraph>

                            <Box className="vf-card__read-more" width="100%" mt="large">
                                <Link variant="card.variant1.readmore" outline="primary" sx={{
                                    '&:before': {
                                        display: 'block',
                                        content: '""',
                                        position: 'absolute',
                                        height: '100%',
                                        width: '100%',
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                    }
                                }}>
                                    En savoir plus
                                <Icon ml="14px" name="chevron-right" size="16px" />
                                </Link>
                            </Box>

                        </>
                }
            </Box>
        </Flex>


    );
}

const ColorModeToggler = () => {
    const [colorMode, setColorMode] = useColorMode();
    return <Button onClick={() => setColorMode(colorMode === 'default' ? 'dark' : 'default')}>{colorMode === 'default' ? 'dark' : 'default'}</Button>
}

export const Wafasalaf = () => {
    const [loading, setLoading] = useState(true);
    const [dir, setDir] = useState('ltr');
    useEffect(
        () => {
            let timer1 = setTimeout(() => setLoading(false), 1000)
            return () => {
                clearTimeout(timer1)
            }
        },
        []
    )
    return (
        <DirectionManager dir={dir}>
            <ColorModeProvider>
                <Box bg="backgroundBasic200" height="100vh">
                    <ColorModeToggler />
                    <Button ml="medium" onClick={() => { setDir(dir === 'ltr' ? 'rtl' : 'ltr')}}>{dir === 'ltr' ? 'rtl' : 'ltr'}</Button>
                    <Box mt="large">
                        <Container fluid={true}>
                            <Row>
                                <Col xs={12} md={4}>
                                    <WafasalafVerticalCard loading={loading} />
                                </Col>
                                <Col xs={12} md={4}>
                                    <WafasalafVerticalCard loading={loading} />
                                </Col>
                                <Col xs={12} md={4}>
                                    <WafasalafVerticalCard loading={loading} />
                                </Col>
                            </Row>
                        </Container>
                    </Box>

                </Box>
            </ColorModeProvider>
        </DirectionManager>
    )
}

export default {
    title: 'Components/Card',
    parameters: {
        backgrounds: [
            { name: 'light', value: '#f7f8f9', default: true },
            { name: 'dark', value: '#000', default: true },
        ]
    }
};