import React, { useContext } from 'react';
import { Box, Flex } from '../../Box';
import { Icon } from '../../Icon';
import { useInterval } from 'react-use';
import { Tab, Tabs } from '../../Tabs';
import { Container } from '../../Grid';
import { MotionBox } from '../../Animation';
import { Slider } from '../Slider';
import { Slide } from '../Slide';
import {theme} from '../../../theme'


const SampleNextArrow = props => {
  const { className, onClick } = props;
  return (
    <Flex
      className={className}
      sx={{
        position: "absolute",
        top: '0',
        bottom: '0',
        width: '30px',
        height: '100%',
        display: "block",
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        right: '-30px',
      }}
      onClick={onClick}
    >
      <Icon name="chevron-right" size="large" />
    </Flex>
  );
}

const SamplePrevArrow = props => {
  const { className, onClick } = props;
  return (
    <Flex
      className={className}
      sx={{
        position: "absolute",
        top: '0',
        bottom: '0',
        width: '30px',
        height: '100%',
        display: "block",
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        left: '-30px',
      }}
      onClick={onClick}
    >
      <Icon name="chevron-left" size="large" />
    </Flex>
  );
}

const Slide1 = ({ children, ...rest }) => <Box sx={{
  backgroundColor: 'gray100',
  height: '100px',
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '42px',
  fontWeight: 700,
  width: '100px'
}} {...rest}>{children}</Box>
export const Simple = () => {

  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Box mx="50px">
      <Slider {...settings}>
        <Slide1>
          <span>1</span>
        </Slide1>
        <Slide1>
          <span>2</span>
        </Slide1>
        <Slide1>
          <span>3</span>
        </Slide1>
      </Slider>
    </Box>
  );
}





const Slide2 = ({ children, ...rest }) => <Box sx={{
  backgroundColor: 'gray100',
  height: '600px',
  display: 'flex !important',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '42px',
  fontWeight: 700,
  width: '100px'
}} {...rest}>{children}</Box>


export const SlideWithTabs = () => {

  const sliderRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = React.useState(0);

  const goToSlide = index => {
    sliderRef.current.slickGoTo(index);

  }
  useInterval(() => {
    goToSlide(activeSlide + 1);
  }, 3000);

  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };

  return (
    <Box sx={{ position: 'relative' }}>

      <Slider ref={sliderRef} {...settings} beforeChange={(oldIndex, newIndex) => setActiveSlide(newIndex)}>
        <Slide2>
          <span>0</span>
        </Slide2>
        <Slide2>
          <span>1</span>
        </Slide2>
        <Slide2>
          <span>2</span>
        </Slide2>
      </Slider>

      <Box sx={{ position: 'absolute', right: '10%', top: '40%', maxWidth: '534px' }}>
        <Tabs onTabClick={index => goToSlide(index)} activeTab={activeSlide}>
          <Tab bg={activeSlide === 0 ? "primary400" : "white"} title="slide 0"><Box bg="white" p="large" borderTop="1px solid" borderColor="gray500">Content tab 0</Box></Tab>
          <Tab bg={activeSlide === 1 ? "primary400" : "white"} title="slide 1"><Box bg="white" p="large" borderTop="1px solid" borderColor="gray500">Content tab 1</Box></Tab>
          <Tab bg={activeSlide === 2 ? "primary400" : "white"} title="slide 2"><Box bg="white" p="large" borderTop="1px solid" borderColor="gray500">Content tab 2</Box></Tab>
        </Tabs>
      </Box>
    </Box>
  );
}




const SlideContent = props => <Flex sx={{
  alignItems: 'center',
  justofyContent: 'center',
  width: '100%',
  height: '100%',
}}>
  <Container>
    <MotionBox animate={props.isActive ? 'show' : 'hide'} initial='hide' transition={{ ease: "easeOut", duration: .5 }} variants={{show:{opacity:1, y:0}, hide:{opacity:0, y:100}}}>
      <Box sx={{ textAlign: 'center' }}>
        <Box as="span"
          sx={{
            color: 'white',
            display: ['none', null, 'inline-block'],
            position: 'relative',
            textTransform: 'uppercase',
            fontSize: '1.125rem',
            lineHeight: '1.5rem',
            marginBottom: '.3125rem',

          }}>Offre du moment</Box>
        <Box as="h2"
          sx={{
            color: 'white',
            fontSize: ['2rem', null, '2.5rem'],
            lineHeight: ['2.25rem', null, '2.375rem'],
            marginBottom: ['1.5625rem', null, '.4375rem'],
            fontWeight: 800,
          }}>Restez chez vous, nous venons vers vous !</Box>
        <Box as="p" sx={{
          color: "white",
          width: ['100%'],
          fontSize: ['1.2rem', null, '1.25rem'],
          lineHeight: [null, null, '1.4375rem']
        }}>
          Car votre santé est notre priorité.
      </Box>
      </Box>
    </MotionBox>
  </Container>
</Flex>


export const RichSlider = () => {

   const [activeSlide, setActiveSlide] = React.useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerPadding: '0px',
    centerMode: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.md,
        settings: {
          centerPadding: '40px',
          centerMode: true,
          arrows: false,
        },

      }
    ]

  }

  return <Box>
    <Slider {...settings} afterChange={index => setActiveSlide(index)}>
      <Slide image="https://images.unsplash.com/photo-1588613254750-cf5d89a29b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1357&q=80"
              content={<SlideContent isActive={activeSlide === 0} />}
      />
      <Slide image="https://images.unsplash.com/photo-1588776844919-5ed4449a8fd7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3200&q=80"
              content={<SlideContent isActive={activeSlide === 1}/>}
      />
    </Slider>

  </Box>
}




export default {
  title: 'Slider',
};