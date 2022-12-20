import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import VideoInfo from './components/VideoInfo';
import BASE_URL from '../../../../config';

function Recorder({ searchParams }) {
  const preview = useRef();
  const downloader = useRef();
  const videoRegistForm = useRef();
  const recordingFlag = true;
  let streamForRecord;
  let recorder;
  let videoFile;
  const accessToken = localStorage.getItem('Token');
  const currentClassId = searchParams.get('classId');
  const currentVideoId = searchParams.get('videoId');
  const navigate = useNavigate();
  navigator.mediaDevices
    .getUserMedia({
      video: true,
      audio: true,
    })
    .then(stream => {
      streamForRecord = stream;
      const video = preview.current;
      video.srcObject = stream;
      video.play();
    });
  const recordStarter = () => {
    console.log('녹화시작');
    const video = preview.current;
    recorder = new MediaRecorder(streamForRecord);
    recorder.ondataavailable = event => {
      videoFile = URL.createObjectURL(event.data);
      video.srcObject = null;
      video.src = videoFile;
      video.loop = true;
      video.play();
    };
    recorder.start();
  };
  const recordStopoer = () => {
    console.log('녹화종료');
    recorder.stop();
  };
  const recordDownloader = async () => {
    const a = document.createElement('a');
    a.href = videoFile;
    a.download = 'downloadVideo.webm';
    document.body.appendChild(a);
    a.click();
  };
  const lectureSubmit = event => {
    event.preventDefault();
    const videoForm = new FormData(videoRegistForm.current);
    if (currentVideoId) {
      console.log('edit');
      fetch(`${BASE_URL}/video?videoId=${currentVideoId}`, {
        method: 'PATCH',
        headers: {
          enctype: 'multipart/form-data',
          authorization: accessToken,
        },
        body: videoForm,
      }).then(response => {
        console.log(response);
        if (response.ok) {
          navigate(`?page=classDetail&classId=${currentClassId}`);
        }
      });
    } else {
      console.log('submit');
      fetch(`${BASE_URL}/video/`, {
        method: 'POST',
        headers: {
          enctype: 'multipart/form-data',
          authorization: accessToken,
        },
        body: videoForm,
      }).then(response => {
        if (response.ok) {
          navigate(`?page=classDetail&classId=${currentClassId}`);
        }
      });
    }
  };
  return (
    <RecorderContainer>
      <Video ref={preview} />
      <ButtonContainer>
        <button type="button" onClick={recordStarter}>
          Start Recording
        </button>
        <button type="button" onClick={recordStopoer}>
          Stop Recording
        </button>
        <button type="button" onClick={recordDownloader} ref={downloader}>
          Download Video
        </button>
      </ButtonContainer>
      <Form ref={videoRegistForm}>
        <Button onClick={lectureSubmit}>
          {currentVideoId ? 'Edit' : 'Submit'}
          <br /> Lecture
        </Button>
        <VideoInfo
          currentVideoId={currentVideoId}
          recordingFlag={recordingFlag}
        />
        <Input name="classId" defaultValue={currentClassId} />
        <Input name="videoId" defaultValue={currentVideoId} />
      </Form>
    </RecorderContainer>
  );
}
const RecorderContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  width:100%;
  margin-top: 100px;
  margin-bottom: 100px;
  margin-left: 264px;
`;
const Video = styled.video`
  width: 50%;
  border-radius: 20px;
  transform: rotateY(180deg);
`;
const ButtonContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  margin-top: 25px;
  button {
    border: none;
    border-radius: 10px;
    margin: 5px;
    width: 110px;
    height: 40px;
    font-weight: 700;
    cursor: pointer;
    &:nth-child(4) {
    }
  }
`;
const Form = styled.form`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
`;
const Button = styled.button`
  border: none;
  border-radius: 10px;
  margin: 5px;
  width: 80%;
  height: 40px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${props => props.theme.style.deepGrey};
  color: white;
`;
const Input = styled.input`
  display: none;
`;
export default Recorder;
