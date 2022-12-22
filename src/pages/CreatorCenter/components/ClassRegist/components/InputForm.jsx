import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import BASE_URL from '../../../../../config';

function InputForm({
  type,
  title,
  isMultiple,
  subject,
  description,
  borderUnUse,
  classInfo,
  setClassInfo,
  recordingFlag,
  currentClass,
  detailFlag,
  currentVideoId,
}) {
  const [currentVideo, setCurrentVideo] = useState();
  const [searchParams] = useSearchParams();

  const classId = searchParams.get('classId');

  const token = localStorage.getItem('Token');

  const inputDefaultValueWhenVideoExist = currentVideoId
    ? currentVideo?.[title]
    : classInfo?.[title];

  const mainCategory =
    classInfo?.mainCategory === '1' ? (
      <>
        <option value="">선택안함</option>
        <option
          value={1}
          selected={
            detailFlag && currentClass
              ? currentClass?.subCategory === '스포츠'
              : null
          }
        >
          스포츠
        </option>
        <option
          value={2}
          selected={
            detailFlag && currentClass
              ? currentClass?.subCategory === '예절'
              : null
          }
        >
          예절
        </option>
        <option
          value={3}
          selected={
            detailFlag && currentClass
              ? currentClass?.subCategory === '예술'
              : null
          }
        >
          예술
        </option>
        <option
          value={4}
          selected={
            detailFlag && currentClass
              ? currentClass?.subCategory === '패션'
              : null
          }
        >
          패션
        </option>
      </>
    ) : (
      <>
        <option value="">선택안함</option>
        <option
          value={5}
          selected={
            detailFlag && currentClass
              ? currentClass?.subCategory === '영어'
              : null
          }
        >
          영어
        </option>
        <option
          value={6}
          selected={
            detailFlag && currentClass
              ? currentClass?.subCategory === '중국어'
              : null
          }
        >
          중국어
        </option>
        <option
          value={7}
          selected={
            detailFlag && currentClass
              ? currentClass?.subCategory === '일본어'
              : null
          }
        >
          일본어
        </option>
        <option
          value={8}
          selected={
            detailFlag && currentClass
              ? currentClass?.subCategory === '아랍어'
              : null
          }
        >
          아랍어
        </option>
      </>
    );

  useEffect(() => {
    if (detailFlag) {
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
          const videos = result.video;

          const currentvideo = videos.filter(
            video => video.id === Number(currentVideoId)
          );
          setCurrentVideo(currentvideo[0]);
        });
    }
  }, []);
  const classInfoSetter = event => {
    const classInfoCopy = { ...classInfo };
    classInfoCopy[title] = event.target.value;
    setClassInfo(classInfoCopy);
  };

  const INPUTS = {
    listCategory1: (
      <Select
        onChange={classInfoSetter}
        name="mainCategory"
        defaultValue={
          detailFlag && currentClass
            ? currentClass?.[title]
            : classInfo?.[title]
        }
      >
        <option value="">선택안함</option>
        <option
          value={1}
          selected={
            detailFlag && currentClass
              ? currentClass?.mainCategory === '취미, 특기'
              : null
          }
        >
          취미, 특기
        </option>
        <option
          value={2}
          selected={
            detailFlag && currentClass
              ? currentClass?.mainCategory === '외국어'
              : null
          }
        >
          외국어
        </option>
      </Select>
    ),
    listCategory2: (
      <Select
        onChange={classInfoSetter}
        name="subCategory"
        defaultValue={
          detailFlag && currentClass
            ? currentClass?.[title]
            : classInfo?.[title]
        }
      >
        {classInfo?.mainCategory === '' ? null : mainCategory}
      </Select>
    ),

    listLevel: (
      <Select
        onChange={classInfoSetter}
        name="classLevel"
        defaultValue={
          detailFlag && currentClass
            ? currentClass?.[title]
            : classInfo?.[title]
        }
      >
        <option value="">선택안함</option>
        <option
          value={1}
          selected={
            detailFlag && currentClass
              ? currentClass.classLevel === '입문자'
              : null
          }
        >
          입문자
        </option>
        <option
          value={2}
          selected={
            detailFlag && currentClass
              ? currentClass.classLevel === '초급자'
              : null
          }
        >
          초급자
        </option>
        <option
          value={3}
          selected={
            detailFlag && currentClass
              ? currentClass.classLevel === '중급자'
              : null
          }
        >
          중급자
        </option>
        <option
          value={4}
          selected={
            detailFlag && currentClass
              ? currentClass.classLevel === '준전문가'
              : null
          }
        >
          준전문가
        </option>
        <option
          value={5}
          selected={
            detailFlag && currentClass
              ? currentClass.classLevel === '전문가'
              : null
          }
        >
          전문가
        </option>
      </Select>
    ),
    textarea: (
      <Textarea
        name={title}
        onChange={classInfoSetter}
        defaultValue={
          detailFlag && currentClass
            ? currentClass?.[title]
            : classInfo?.[title]
        }
      />
    ),
  };

  return (
    <Container name={title} borderUnUse={borderUnUse}>
      <Subject>{subject}</Subject>
      {INPUTS[type] || (
        <Input
          name={title}
          onChange={recordingFlag ? null : classInfoSetter}
          defaultValue={
            detailFlag && currentClass
              ? currentClass[title]
              : inputDefaultValueWhenVideoExist
          }
          multiple={isMultiple}
          type={type}
          placeholder={description}
        />
      )}
    </Container>
  );
}
const Container = styled.div`
  ${props => (props.borderUnUse ? null : `border-bottom: 1px solid #e5e5e5;`)}
  padding: 15px;
`;

const Subject = styled.div`
  color: ${props => props.theme.style.deepGrey};
  font-size: 11px;
`;

const Input = styled.input`
  padding: 6px;
  background-color: transparent;
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  ${props => (props.type === 'text' ? 'font-size: 12px' : null)}
`;

const Select = styled.select`
  width: 90%;
  height: 23px;
`;

const Textarea = styled.textarea`
  margin-top: 9px;
  width: 90%;
  height: 200px;
  border: 1px solid #e5e5e5;
`;

export default InputForm;
