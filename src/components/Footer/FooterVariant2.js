import React from 'react';

import {
	Anchor,
	Box,
	Container,
	Flex,
	Footer,
	Icon,
	Image,
	Input,
	Label,
	Nav,
	Navs,
	Text,
} from '../../components';
import vactory_logo from '../../assets/images/vactory.png';
import void_logo from '../../assets/images/void-logo.png';


export const FooterVariant2 = ({
	navs,
	copyright,
	logo,
	socialMedia,
	phoneNumber,
	...props
}) => {
	return (
		<Footer mt='large' __css={{
			width: '100%',
			borderTop: '1px solid gray',
		}}>
		<Container>

			<Flex __css={{
				mt: "xxlarge",
				flex: "1",
				justifyContent: "space-between",
				alignItems: ["center", null, "start"],
				flexDirection: ["column", null, "row"],
			}} >
				{ logo ? logo :
				<Anchor>
					<Image width="130px" src={vactory_logo} />
				</Anchor>}

				<Box __css={{
					marginY: ['xxlarge', null, 0],
				}} >
					<Label for="e-mail-input" fontWeight="bold">Restez informés</Label>
					<Input id="e-mail-input" type="text" placeholder="Votre e-mail*"
						reverse={true}
						icon={<Anchor padding="xsmall"><Icon name="arrows-left" size="24px" color="#017CFE" transform='scale(-1)' /></Anchor>}
						__css={{
							border: 0,
							borderBottom: '2px solid gray',
							borderRadius: 0,
							padding: '5px 10px'
						}}
						sx={{
							width: '300px',
						}} />
				</Box>

				{ socialMedia ? socialMedia :
                <Flex>
                    <Anchor ml="16px"><Icon name="facebook" size="24px" color="#017CFE" /></Anchor>
                    <Anchor ml="16px"><Icon name="instagram" size="24px" color="#017CFE" /></Anchor>
                    <Anchor ml="16px"><Icon name="twitter" size="24px" color="#017CFE" /></Anchor>
                </Flex>}
				
			</Flex>

			<Flex __css={{
				mt: "large",
				flex: "1",
				justifyContent: "space-between",
				alignItems: ["center"],
				flexDirection: ["column", null, "row"],
				borderBottom: "1px dashed gray",
			}} >
				{ phoneNumber ? phoneNumber :
				<Flex>
					<Text mr="small">Nous contacter: </Text>
					<Anchor href="tel:0522545151" sx={{
						color: 'primary500',
						fontWeight: 'bold',
					}}>05 22 54 51 51</Anchor>
				</Flex>}

				{ navs ? navs :
		        <Navs>
		            <Nav href="#">Acceuil</Nav>
		            <Nav href="#">Produits & Service</Nav>
		            <Nav href="#" active={true}>Assurance</Nav>
		        </Navs>}
			</Flex>

			<Flex __css={{
				marginY: "large",
				flex: "1",
				justifyContent: "space-between",
				alignItems: ["center", null, "start"],
				flexDirection: ["column", null, "row"],
			}} >
				<Text mb={[ 'medium', null, 0 ]}>
					conception et développement:
					<Anchor href="//void.fr" target="_blank" ml="small">
						<Image src={void_logo} alt="void logo" height="15px" verticalAlign="middle" />
					</Anchor>
				</Text>

				{ copyright ? copyright :
				<Text>
					Vactory {new Date().getFullYear()} © Tous droits réservés
				</Text>}
			</Flex>

			
		</Container>
		</Footer>);
}