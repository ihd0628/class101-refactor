import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../../../../../../config';

function Video({ videos, setVideos, video, classId }) {
  const navigate = useNavigate();
  const token = localStorage.getItem('Token');

  const goToLectureVideo = () => {
    navigate(`/lecturevideo?classId=${classId}&videoId=${video.id}`);
  };

  const videoDeleter = () => {
    let videosForDelete;

    fetch(`${BASE_URL}/video?videoId=${video.id}`, {
      method: 'DELETE',
      headers: {
        authorization: token,
      },
    }).then(response => {
      if (response.ok) {
        alert(`${video.videoTitle} 가 삭제되었습니다.`);
        videosForDelete = videos.filter(item => {
          return Number(item.id) !== Number(video.id);
        });
      }
      setVideos([...videosForDelete]);
    });
  };

  const videoEditer = () => {
    navigate(
      `/creatorcenter?page=recorder&classId=${video.class_id}&videoId=${video.id}`
    );
  };

  return (
    <VideoContatiner key={video.id}>
      <Title onClick={goToLectureVideo}>강의 제목: {video.videoTitle}</Title>
      <Description onClick={goToLectureVideo}>
        강의 설명: {video.videoDescription}
      </Description>
      <Button onClick={videoDeleter}>delete</Button>
      <Button onClick={videoEditer}>edit</Button>
    </VideoContatiner>
  );
}

const VideoContatiner = styled.div`
  margin-bottom: 30px;
`;

const Title = styled.div`
  margin-top: 5px;
  font-size: 20px;
  font-weight: 800;
  cursor: pointer;
`;

const Description = styled.div`
  margin-top: 5px;
  cursor: pointer;
`;

const Button = styled.button`
  margin: 15px 15px 0 0;
  border: none;
  background-color: ${props => props.theme.style.middleGray};
  height: 25px;
  font-weight: 700;
  color: gray;
  cursor: pointer;
`;

export default Video;
