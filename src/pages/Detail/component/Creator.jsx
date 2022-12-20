import React, { useState } from 'react';
import styled from 'styled-components';

function Creator({ creatorName, profileImage, aboutCreater }) {
  const [isOpenContent, setIsOpenContent] = useState(false);

  const moreOnClick = () => {
    setIsOpenContent(prev => !prev);
  };

  return (
    <>
      <CreatorIntro isOpenContent={isOpenContent}>
        <FlexWrap>
          <CreatorH3>
            크리에이터 <br />
            <strong>{creatorName}</strong> 입니다.
          </CreatorH3>
          <CreatorImg alt="프로필 사진 로딩중" src={profileImage} />
        </FlexWrap>

        <BigCreator>
          <img
            src="https://images.pexels.com/photos/7820006/pexels-photo-7820006.jpeg?cs=srgb&dl=pexels-eyup-beyhan-7820006.jpg&fm=jpg"
            alt="creator_image"
          />
        </BigCreator>
      </CreatorIntro>
      <p>{aboutCreater}</p>

      <MoreBtn
        aria-label="fold Or Not"
        onClick={moreOnClick}
        isOpenContent={isOpenContent}
      >
        {isOpenContent ? '접기' : '더보기'}
      </MoreBtn>
    </>
  );
}

const FlexWrap = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
`;

const CreatorIntro = styled.div`
  width: 100%;
  height: ${props => (props.isOpenContent ? 'auto' : '300px')};
  overflow: hidden;
`;

const CreatorH3 = styled.h3`
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: 300;
  line-height: 34px;

  strong {
    font-weight: 700;
  }
`;

const CreatorImg = styled.img`
  width: 60px;
  height: 60px;
  background-color: black;
  border: none;
  border-radius: 50%;
`;

const BigCreator = styled.div`
  width: 730px;
  background-color: black;

  img {
    width: 100%;
  }
`;

const MoreBtn = styled.button`
  margin-top: 20px;
  width: 730px;
  height: 40px;
  font-size: 14px;
  box-shadow: ${props =>
    props.isOpenContent ? '' : '0px -40px 15px 15px white'};
  cursor: pointer;
`;

export default Creator;
