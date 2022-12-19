import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CarouselImgData } from './CarouselImgData';
import getParametersForUnsplash from '../../Function/functions';

function Carousel() {
  return (
    <CarouselContainer>
      <StyledSlider {...settings}>
        {CarouselImgData.map(image => (
          <ImageBox key={image.id}>
            <Image
              src={
                image.url +
                getParametersForUnsplash({
                  width: 676,
                  height: 415,
                  quality: 'auto',
                  format: 'avif',
                })
              }
              alt="이미지 슬라이드"
            />
          </ImageBox>
        ))}
      </StyledSlider>
      <SlideControlBox>
        <StyleLine />
      </SlideControlBox>
    </CarouselContainer>
  );
}

const CarouselContainer = styled.div`
  position: relative;
`;

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const StyledSlider = styled(Slider)`
  display: inline-block;
  height: 440px;
  width: 676px;

  .slick-slider div {
    position: relative;
  }

  .slick-arrow {
    position: absolute;
    top: 71%;
    z-index: 10;
  }
  .slick-prev {
    left: 1070px;
  }
  .slick-next {
    right: -450px;
  }

  .slick-dots {
    position: absolute;
    bottom: 40px;
  }
`;

const ImageBox = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'flex-start')}
`;

const Image = styled.img`
  width: 676px;
  height: 415px;
  border-radius: 5px;
`;

const SlideControlBox = styled.div`
  position: absolute;
  top: 310px;
  right: -450px;
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  .IconLeft {
    margin-right: 25px;
  }
`;

const SlideIndex = styled.span`
  padding: 5px;
  font-size: 12px;
  color: white;
`;

const SeparateIndex = styled(SlideIndex)``;

const StyleLine = styled.div`
  margin: 0 80px 0 15px;
  width: 310px;
  height: 2px;
  background-color: white;
`;

export default Carousel;
