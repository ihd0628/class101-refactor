import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import VIDEOS from '../../mockData/videoList';
import { useSearchParams } from 'react-router-dom';
import Video from './components/Video';
import BASE_URL from '../../../../../../config';

function VideoList() {
  const [videos, setVideos] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const classId = searchParams.get('classId');
  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetch(`${BASE_URL}/video/${classId}`, {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => {
        setVideos(result.video);
      });
  }, []);
  const goToRecorder = () => {
    setSearchParams(`page=recorder&classId=${classId}`);
  };

  return (
    <VideoListContainer>
      <Button onClick={goToRecorder}>강의 제작</Button>
      {videos?.map(video => {
        return (
          <Video
            key={video.id}
            videos={videos}
            setVideos={setVideos}
            video={video}
            classId={classId}
          />
        );
      })}
    </VideoListContainer>
  );
}

export default VideoList;

const VideoListContainer = styled.div`
  margin: 170px 100px 0 10px;
  min-width: 383px;
  width: 40%;
`;
const Button = styled.button`
  margin-bottom: 20px;
  width: 65px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
