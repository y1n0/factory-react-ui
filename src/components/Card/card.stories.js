import React from 'react';
import { Box, Flex} from '../Box';
import {Image} from '../Image';
import CardImage from './img1.jpg';

const CapitalCardTitle = ({sx, children, ...rest}) => {
    return (<Box
        as='h1'
        sx={sx}
        __css={{
            fontSize: '20px',
            ineHeight:"28px",
            fontWeight: 600,
            letterSpacing: '0',
            marginBottom: '32px'
        }}>
        {children}
    </Box>)
}

const CardBody = ({sx, children, ...rest}) => {
    return (<Box sx={sx} __css={{
        background: 'white'
    }}>
        {children}
    </Box>)
}

const Card = ({sx, children, ...rest}) => {
    return (<Box sx={sx} __css={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        fontFamily: 'montserrat',
        m: 'small',
    }}>
        {children}
    </Box>)
}

const CapitalCardTag = ({children}) =><Box __css={{
    display:'inline-flex',
    fontSize:"9px",
    fontWeight: '600',
    backgroundColor: 'primary800',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:'rounded',
    py:'xsmall',
    px:'medium',
    color: 'white',
    }}>{children}</Box>

const CapitalCardDate = ({children}) =><Box __css={{
        display:'inline-flex',
        fontSize:"15px",
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '500',
        color: '#9B9B9B',
        ml: '10px'
        }}>{children}</Box>

export const CapitalAzurCard = () => {
    return (
        <Box>
            <Box width={[1, 1/2,  1/3]}>
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

export default {
    title: 'Card',
};