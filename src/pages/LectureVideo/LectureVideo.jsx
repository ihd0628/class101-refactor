import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Lecture from './components/Lecture/Lecture';
import LectureList from './components/LectureList/LectureList';
import VIDEOS from './mockData/video';
import Nav from './components/Nav/Nav';
import BASE_URL from '../../config';

function LectureVideo() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedLecture, setSelectedLecture] = useState();
  const [lectureList, setLectureList] = useState();
  const [videoId, setVideoId] = useState(searchParams.get('videoId'));
  const [classId] = useState(searchParams.get('classId'));

  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetch(`${BASE_URL}/video/${classId}`, {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => {
        return response.json();
      })
      .then(result => {
        setLectureList(result.video);
      });
    setLectureList(VIDEOS);
  }, []);

  useEffect(() => {
    lectureList?.forEach(video => {
      if (Number(videoId) === Number(video.id)) {
        setSelectedLecture(video);
      }
    });
  }, [videoId, lectureList]);

  console.log('lectureList : ', lectureList);
  console.log('selectedLecture : ', selectedLecture);

  return (
    <>
      <Nav />
      <LectureContainer>
        <Lecture selectedLecture={selectedLecture} />
        <LectureList
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          lectureList={lectureList}
          setVideoId={setVideoId}
        />
      </LectureContainer>
    </>
  );
}

const LectureContainer = styled.div`
  ${props => props.theme.variables.flex('row', '', '')}
  margin-top:80px;
  background-color: black;
`;

export default LectureVideo;
