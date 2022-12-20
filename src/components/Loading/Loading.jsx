import React from 'react';
import styled from 'styled-components';

function Loading() {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <Image
        src="https://t1.daumcdn.net/cfile/tistory/184F8A4E4E55932B06"
        alt="로딩중"
        width="5%"
      />
    </Background>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;

const Image = styled.img``;

export default Loading;
