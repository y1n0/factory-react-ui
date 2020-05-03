import React from 'react';
import { Box, Flex } from '../../Box';
import { Image } from '../../Image';
import CardImage from './img1.jpg';

const CapitalCardTitle = ({ sx, children, ...rest }) => {
    return (<Box
        as='h1'
        sx={sx}
        __css={{
            fontSize: ['16px', null, '18px', null,],
            ineHeight: "28px",
            fontWeight: 600,
            letterSpacing: '0',
            marginBottom: '16px'
        }}>
        {children}
    </Box>)
}

const CardBody = ({ sx, children, ...rest }) => {
    return (<Box sx={sx} __css={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1
    }}>
        {children}
    </Box>)
}

const Card = ({ sx, children, ...rest }) => {
    return (<Box sx={sx} __css={{
        background: 'white',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        fontFamily: 'montserrat',
        marginBottom: '16px',
       // minHeight: '421px'
    }}>
        {children}
    </Box>)
}

const CapitalCardTag = ({ children }) => <Box __css={{
    display: 'inline-flex',
    fontSize: "9px",
    fontWeight: '600',
    backgroundColor: 'primary800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'rounded',
    textTransform: 'uppercase',
    py: 'xsmall',
    px: 'medium',
    color: 'white',
}}>{children}</Box>

const CapitalCardDate = ({ children }) => <Box __css={{
    display: 'inline-flex',
    fontSize: "15px",
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    color: '#9B9B9B',
    ml: '10px'
}}>{children}</Box>

const CapitalCardButton = ({ children }) => <Box
    as="button"
    __css={{
        display: 'inline-flex',
        fontSize: "14px",
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        color: '#2178FF',
        textTransform: 'uppercase',
        border: 0,
        p: 0,
        m: 0,
        pb: '8px',
        background: 'transparent',
        borderBottom: '2px solid',
        '&:hover': {
            cursor: 'pointer'
        }
    }}>{children}</Box>

export const CapitalAzurCard = () => {
    return (
        <Box>
            <Box width={[1, 1 / 2, 1 / 3]}>
                <Card>
                    <CardBody>
                        <Image src={CardImage} />
                        <Box p='medium'>
                            <Flex mb="16px">
                                <CapitalCardTag>ACTUALITE</CapitalCardTag>
                                <CapitalCardDate>15/01/08</CapitalCardDate>
                            </Flex>
                            <CapitalCardTitle>Crise du Coronavirus Capital Azur accompagne ses clients Professionnels et Entreprises</CapitalCardTitle>
                        </Box>
                    </CardBody>
                </Card>
            </Box>
        </Box>
    )
}


const articles = [
    {
        tag: 'actualité',
        date: '15/01/20',
        title: 'Crise du Coronavirus Capital Azur accompagne ses clients Professionnels et Entreprises'
    },
    {
        tag: 'point de vue',
        date: '15/01/20',
        title: 'Afrique une récession profonde, mais brève'
    },
    {
        tag: 'analyse',
        date: '15/01/20',
        title: 'Marché des Crédits on peut être optimiste'
    },
    {
        tag: 'actualité',
        date: '15/01/20',
        title: 'Crise du Coronavirus Capital Azur accompagne ses clients particuliers'
    },
    {
        tag: 'point de vue',
        date: '15/01/20',
        title: 'Fintech en Afrique La révolution douce'
    },
    {
        tag: 'analyse',
        date: '15/01/20',
        title: "L'émergence d'une économie numérique en Afrique"
    }
]
export const Layout = () => {

    return (
        <Box m='0 auto' px="8px" width={['100%', '450px', '900px', '1200px', '1900px']}>

            <Flex mx="-8px" flexWrap="wrap">
                {articles.map((article, key) => {
                    return (
                        <Flex key={key} px="8px" width={[1, 1, 1 / 3]}>
                            <Card>

                                <CardBody>
                                    <Image src={CardImage} />
                                    <Box sx={{ p: 'medium', flexGrow: 1 }} >
                                        <Flex mb="16px">
                                            <CapitalCardTag>{article.tag}</CapitalCardTag>
                                            <CapitalCardDate>{article.date}</CapitalCardDate>
                                        </Flex>
                                        <CapitalCardTitle>{article.title}</CapitalCardTitle>
                                    </Box>
                                    <Box p="medium">
                                        <CapitalCardButton>lire plus</CapitalCardButton>
                                    </Box>
                                </CardBody>

                            </Card>
                        </Flex>)
                })}
            </Flex>

        </Box>

    )
}


export const InlineCard = () => {
    return (
        <Box m="0 auto" px="8px">

            {/* Row */}
            <Flex mx="-8px" flexWrap="wrap">

                {/* Column */}
                <Flex px="8px" width={[1, 1, 1/2]}>
                    <Card>
                        <CardBody>
                            <Flex flexDirection={['column', 'row', 'row']}>

                                <Image src={CardImage} width={[1]} />
                                <Flex flexDirection="column">
                                    <Box sx={{ p: 'medium', flexGrow: 1 }} >
                                        <Flex mb="16px">
                                            <CapitalCardTag>ACTUALITE</CapitalCardTag>
                                            <CapitalCardDate>15/01/08</CapitalCardDate>
                                        </Flex>
                                        <CapitalCardTitle>Crise du Coronavirus Capital Azur accompagne ses clients Professionnels et Entreprises</CapitalCardTitle>
                                    </Box>
                                    <Box p="medium">
                                        <CapitalCardButton>lire plus</CapitalCardButton>
                                    </Box>
                                </Flex>

                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>
                {/* Column */}
                <Flex px="8px" width={[1, 1, 1/2]}>
                    <Card>
                        <CardBody>
                            <Flex flexDirection={['column', 'row', 'row']}>

                                <Image src={CardImage} width={[1]} />
                                <Flex flexDirection="column">
                                    <Box sx={{ p: 'medium', flexGrow: 1 }} >
                                        <Flex mb="16px">
                                            <CapitalCardTag>ACTUALITE</CapitalCardTag>
                                            <CapitalCardDate>15/01/08</CapitalCardDate>
                                        </Flex>
                                        <CapitalCardTitle>Crise du Coronavirus Capital Azur accompagne ses clients Professionnels et Entreprises</CapitalCardTitle>
                                    </Box>
                                    <Box p="medium">
                                        <CapitalCardButton>lire plus</CapitalCardButton>
                                    </Box>
                                </Flex>

                            </Flex>
                        </CardBody>
                    </Card>
                </Flex>

            </Flex>
        </Box>
    )
}

export default {
    title: 'Card',
};