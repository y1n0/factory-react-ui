import React from 'react';
import classnames from 'classnames';
import { action } from '@storybook/addon-actions';

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
	Input,
	Heading,
	Nav,
	Navs,
	Paragraph,
	Row,
	Text,
} from '../../../components';

const FooterHeadingsCss = {
	textTransform:"uppercase",
	fontSize: 'medium',
	color: 'white',
}

const FooterNavs = () => <Navs sx={{
	flexDirection: ["column", "column", "column" ],
	alignItems: 'start',
	paddingX: 0,
	'.nav-item:hover': {
		pl: 'small',
	},
	'.nav-item': {
		transition: '.2s',
	},
	'.icon': {
		size: "medium",
		transform: "scale(-1)",
		verticalAlign: "middle",
		marginRight: "small",
	}

}}>
	<Nav className="nav-item" pl={0}>
		<Icon className="icon" name="arrows-left"/>
		Website Design
	</Nav>
	<Nav className="nav-item" pl={0}>
		<Icon className="icon" name="arrows-left"/>
		Mobile App Development
	</Nav>
	<Nav className="nav-item" pl={0}>
		<Icon className="icon" name="arrows-left"/>
		Search Engine Optimization
	</Nav>
	<Nav className="nav-item" pl={0}>
		<Icon className="icon" name="arrows-left"/>
		Website Development
	</Nav>
</Navs>


const Article = ({image, text, link=false, ...rest}) => {
	return (
		<Box {...rest}>
			<Anchor href={link} __css={{
				'&:hover': {
					color: 'white',
				}
			}}>
				<Flex alignItems="center">
					<Image src={image} size="60px" mr='large' flexShrink={0} />

					<Paragraph m={0} fontSize="small" lineHeight="caption">
						{text}
					</Paragraph>
				</Flex>
			</Anchor>
		</Box>
	);
}




export const FooterVariant4 = ({className, ...props}) => {
	const formSubmitted = action('form-submit');
	
	return (
		<Footer __css={{
            mt: 'xxxlarge',
			width: '100%',
			borderTop: '1px solid',
			borderColor: 'gray',
			color: 'gray',
		}}
		sx={{
			flexDirection: ['column', 'column','column'],
		}}
		className={classnames("vf-footer4", className)}
		{...props} >

		<Box backgroundColor="black800" flex={1} width="100%">
		<Container>
			<Flex __css={{
				justifyContent: "center",
				alignItems: "center",
				flexWrap: "wrap",
				py: "medium",
				borderBottom: '1px solid',
				borderColor: 'gray900',
			}} >

				<Anchor mr="large" className="vf-footer4__logo">
					<Image size="64px" src="http://place-hold.it/64x64" />
				</Anchor>

				<Paragraph mr='auto' fontSize="small"
					maxWidth={['calc(100% - 64px - 24px)', null, "50%"]}
				 	className="vf-footer4__about" >
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna ad minim.					
				</Paragraph>

				<Flex as="form"
				onSubmit={(e) => {formSubmitted(e); e.preventDefault()}}
				__css={{
					// flexShrink: 0,
					marginLeft: [0, null, 'auto'],
					// width: ['100%', null, 'auto'],
				}} className="vf-footer4__maillist">
					<Input id="e-mail-input" type="text" placeholder="Votre e-mail*" sx={{
						borderTopRightRadius: 0,
						borderBottomRightRadius: 0,
						color: 'gray',
					}} />
					<Button type="submit" __css={{
						borderTopLeftRadius: 0,
						borderBottomLeftRadius: 0,
					}} >GO!</Button>
				</Flex>

			</Flex>

			<Box py="medium" className="vf-footer4__blocks">
				<Row>
					<Col xs={12} md={6} lg={3}>
						<Heading level={3} __css={FooterHeadingsCss}>Services</Heading>
						<Box className="vf-footer4__nav-menu">
							<FooterNavs />
						</Box>
					</Col>
					
					<Col xs={12} md={6} lg={3}>
						<Heading level={3} __css={FooterHeadingsCss}>Projects</Heading>
						<Box py="large">
							<Article
								mb="medium"
								image="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/footer/img1.jpg"
								text="Hotel nira inn got bigger heding you ever seen." />

							<Article
								image="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/footer/img2.jpg"
								text="Hotel nira inn got bigger heding you ever seen." />
						</Box>
					</Col>
					
					<Col xs={12} md={6} lg={3}>
						<Heading level={3} __css={FooterHeadingsCss}>Blog</Heading>
						<Box py="large">
							<Article
								mb="medium"
								image="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/footer/img3.jpg"
								text="Hotel nira inn got bigger heding you ever seen." />

							<Article
								image="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/footer/img4.jpg"
								text="Hotel nira inn got bigger heding you ever seen." />
						</Box>
					</Col>
					
					<Col xs={12} md={6} lg={3}>
						<Heading level={3} __css={FooterHeadingsCss}>Contact</Heading>

						<Box py="large" fontSize="s" className="vf-footer4__contact">
								<Flex mb="large">
									<Icon name="position-pin" color="gray" size="large" __css={{
						        		verticalAlign: "middle",
						        		marginRight: "medium",
						        		flexShrink: 0,
						        	}}/>
						        	<Box>
						        	134, Cornish Building, Some Near by area, New York, USA - 34556
						        	</Box>
					        	</Flex>

								<Text mb="large">
									<Icon name="headset" color="gray" size="large" __css={{
						        		verticalAlign: "middle",
						        		marginRight: "medium",
						        	}}/>
						        	<Anchor href={"tel:+212 5 22 545 151"} sx={{
									}}>+212 5 22 545 151</Anchor>
					        	</Text>

								<Text mb="large">
									<Icon name="envelope" color="gray" size="large" __css={{
						        		verticalAlign: "middle",
						        		marginRight: "medium",
						        	}}/>
						        	<Anchor href="mailto:contact@void.fr">contact@void.fr</Anchor>
					        	</Text>
						</Box>
						
					</Col>
					
				</Row>
			</Box>

		</Container>
		</Box>


		<Box backgroundColor="black900" flex={1} width="100%">
		<Container>
			<Flex alignItems="center" justifyContent="space-between" py="large">
				<Text className="vf-footer4__copyright">Copyright {new Date().getFullYear()}. All Rights Reserved.</Text>

                <Flex className="vf-footer4__social-media">
                    <Anchor ml="medium"><Icon name="facebook" size="small" color="#017CFE" /></Anchor>
                    <Anchor ml="medium"><Icon name="instagram" size="small" color="#017CFE" /></Anchor>
                    <Anchor ml="medium"><Icon name="twitter" size="small" color="#017CFE" /></Anchor>
                </Flex>
				
			</Flex>
		</Container>
		</Box>



		</Footer>);
}

export default {
    title: 'Components/Footer'
}