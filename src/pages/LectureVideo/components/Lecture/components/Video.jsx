import React from 'react';
import styled from 'styled-components';

function Video({ videoSrc }) {
  return <VideoContainer controls src={videoSrc} />;
}

const VideoContainer = styled.video`
  height: 700px;
`;

export default Video;
