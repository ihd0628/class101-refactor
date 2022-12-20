import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevButton from './PrevButton';
import NextButton from './NextButton';

function Carousel({ coverGallery }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevButton />,
    nextArrow: <NextButton />,
  };

  return (
    <Wrap>
      <StyledSlider {...settings}>
        {coverGallery?.map(url => {
          return (
            <div key={url}>
              <ImgContainer>
                <img src={url} alt="이미지 더보기" />
              </ImgContainer>
            </div>
          );
        })}
      </StyledSlider>
    </Wrap>
  );
}

const Wrap = styled.div`
  position: relative;
`;

const StyledSlider = styled(Slider)`
  width: 1000px;
  height: 1000px;
  overflow: hidden;

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  .slick-prev {
    left: 40px;
    top: 350px;
    z-index: 100;
  }

  .slick-next {
    right: 50px;
    top: 350px;
    z-index: 100;
  }
`;

const ImgContainer = styled.div`
  margin: 0 auto;
  width: 700px;
  height: 700px;

  img {
    margin: 0 auto;
    max-width: 100%;
    height: 100%;
  }
`;

export default Carousel;
