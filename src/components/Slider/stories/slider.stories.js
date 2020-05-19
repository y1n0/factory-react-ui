import React from 'react';
import { Box, Flex } from '../../Box';
import { Slider } from '../Slider';
import { Icon } from '../../Icon';
import { useInterval } from 'react-use';
import {Tab, Tabs} from '../../Tabs'; 

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

const Slide = ({ children, ...rest }) => <Box sx={{
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
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <Box mx="50px">
      <Slider {...settings}>
        <Slide>
          <span>1</span>
        </Slide>
        <Slide>
          <span>2</span>
        </Slide>
        <Slide>
          <span>3</span>
        </Slide>
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
    <Box  sx={{position: 'relative'}}>

      <Slider ref={sliderRef} {...settings} beforeChange={(oldIndex, newIndex) =>setActiveSlide(newIndex) }>
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

      <Box sx={{position: 'absolute', right:'10%', top: '40%', maxWidth:'534px'}}>
         <Tabs onTabClick={index => goToSlide(index)} activeTab={activeSlide}>
                <Tab bg={activeSlide === 0 ? "primary400" : "white"} title="slide 0"><Box bg="white" p="large" borderTop="1px solid" borderColor="gray500">Content tab 0</Box></Tab>
                <Tab bg={activeSlide === 1 ? "primary400" : "white"} title="slide 1"><Box bg="white" p="large" borderTop="1px solid" borderColor="gray500">Content tab 1</Box></Tab>
                <Tab bg={activeSlide === 2 ? "primary400" : "white"} title="slide 2"><Box bg="white" p="large" borderTop="1px solid" borderColor="gray500">Content tab 2</Box></Tab>
            </Tabs>
      </Box>
    </Box>
  );
}




export default {
  title: 'Slider',
};