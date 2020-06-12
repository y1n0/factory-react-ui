import React, { useState } from 'react';

import {
	Anchor,
	Box,
	Button,
	Col,
	Container,
	Flex,
	Footer,
	Icon,
	Image,
	Heading,
	Nav,
	Navs,
	Paragraph,
	Text,
	Row,
} from '../../components';
import vactory_logo from '../../assets/images/vactory.png';

export const FooterVariant3 = ({
	navs,
	logo,
	about,
	services,
	address='134, Cornish Building, Some Near by area, New York, USA - 34556',
	phoneNumber='+212 5 22 545 151',
	mailAddress='contact@void.fr',
	mainAction,
	...rest
}) => {
	const [isNavOpen, setNavOpen] = useState(false);
	return (
		<Footer>
			<Container>
			<Flex __css={{
				display: ['flex', null, 'none'],
				justifyContent: 'space-between',
				alignItems: 'center',
				paddingX: 'medium',
			}} >
				<Heading level={3} mb={0}>
					Footer Menu
				</Heading>

				<Button fill="basic" onClick={() => setNavOpen(!isNavOpen)}>
					<Icon name="menu" color="gray" size="large" __css={{}}/>
				</Button>

			</Flex>
			<Flex __css={{
				marginBottom: "xsmall",
				justifyContent: "space-between",
				alignItems: ["start", null, "center"],
				flexDirection: ['column', null, 'row'],
				display: [ isNavOpen ? 'flex' : 'none !important', null, 'flex'],
			}}
			>
				{ navs ? navs :
		        <Navs padding="none" alignItems={["start", null, "center"]} >
		            <Nav href="#">Acceuil</Nav>
		            <Nav href="#">About</Nav>
		            <Nav href="#">Services</Nav>
		            <Nav href="#">Blog</Nav>
		            <Nav href="#">Work</Nav>
		            <Nav href="#">Contact</Nav>
		        </Navs>}

		        { mainAction ? mainAction :
		        <Anchor textTransform="uppercase" padding="small">
		        	<Icon name="opened-envelope" color="danger" size="large" __css={{
		        		verticalAlign: "bottom",
		        		marginRight: "small",
		        	}}/>
		        	Prendre un rendez-vous
		        </Anchor>}
			</Flex>

			<Box borderTop="1px solid" borderColor="gray400" paddingTop="xxlarge">
				<Row>
					<Col xs={12} md={3}>
						{ logo ? logo :
						<Anchor>
							<Image width="130px" src={vactory_logo} />
						</Anchor>}

						{ about ? about :
						<Paragraph>
							You can relay on our amazing features list and also our customer services will be great experience.<br />
							our amazing features list and also our customer services is great.
						</Paragraph>}
					</Col>

					<Col xs={12} md={3}>
						{/*<address>*/}
							<Text mb="large" fontSize="medium" lineHeight="heading5">
								<Icon name="headset" color="gray" size="large" __css={{
					        		verticalAlign: "middle",
					        		marginRight: "medium",
					        	}}/>
					        	Vactory Head Office
				        	</Text>

							<Text pl="xxlarge" mb="large">
								{address}
							</Text>

							<Text mb="large" fontSize="medium">
								<Icon name="headset" color="gray" size="large" __css={{
					        		verticalAlign: "middle",
					        		marginRight: "medium",
					        	}}/>
					        	<Anchor href={"tel:"+phoneNumber} sx={{
								}}>{phoneNumber}</Anchor>
				        	</Text>

							<Text mb="large" fontSize="medium">
								<Icon name="envelope" color="gray" size="large" __css={{
					        		verticalAlign: "middle",
					        		marginRight: "medium",
					        	}}/>
					        	<Anchor href="mailto:{{mailAddress}}" sx={{
								}}>{mailAddress}</Anchor>
				        	</Text>

						{/*</address>*/}
					</Col>
					
					<Col xs={12} md={6} >
						<Heading level={5} mb={0} mt={['xlarge', null, 'none']}>
							Services we Offer
						</Heading>

						{ services ? services :
						<Navs sx={{
							flexDirection: ["column", "column", "column" ],
							alignItems: 'start',
							columnCount: 2,
							columnWidth: '50%',
						}}>
							<Row>
								<Col xs={12} sm={6} as={Nav}>
									Website Design
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									Application Development
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									Mobile Development
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									Search Engine Optimzation
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									Digital Marketing
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									Website Development
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									eBook Writing
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									SaaS base Applications
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									Ruby on Rails Development
								</Col>
								<Col xs={12} sm={6} as={Nav}>
									Php Development
								</Col>
							</Row>
						</Navs>}

					</Col>
				</Row>
			</Box>
				
			
		</Container>
	</Footer>);
}