import React from 'react';
import { Box , Flex} from '../../Box';
import {Slider} from '../Slider';
import {Icon} from '../../Icon';

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
        right: '-30px',}}
      onClick={onClick}
    >
      <Icon name="chevron-right" size="large"/>
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
        left: '-30px',}}
      onClick={onClick}
    >
      <Icon name="chevron-left" size="large"/>
      </Flex>
  );
}

const Slide = ({children, ...rest}) => <Box sx={{
    backgroundColor: 'gray100',
    height:'100px',
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

export default {
    title: 'Slider',
};