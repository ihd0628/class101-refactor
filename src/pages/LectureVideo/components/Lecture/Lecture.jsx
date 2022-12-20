import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Video from './components/Video';

function Lecture({ selectedLecture }) {
  const [, setVideoSrc] = useState();
  useEffect(() => {
    setVideoSrc(selectedLecture?.video_url);
  }, []);

  return (
    <LectureContainer>
      <Video videoSrc={selectedLecture?.video_url} />
      <Title>{selectedLecture?.videoTitle}</Title>
      <Description>{selectedLecture?.videoDescription}</Description>
    </LectureContainer>
  );
}

const LectureContainer = styled.div`
  margin-left: 20px;
  background-color: black;
`;

const Title = styled.div`
  margin-left: 17px;
  color: white;
  font-size: 30px;
  font-weight: 700;
`;

const Description = styled.div`
  margin-top: 10px;
  margin-left: 17px;
  color: white;
  font-size: 20px;
`;

export default Lecture;
