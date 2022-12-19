import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import ClassBasicInfo from './components/ClassBasicInfo';
import ClassDetailInfo from './components/ClassDetailInfo';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../../../config';

function ClassRegist({ currentClass, detailFlag }) {
  const [classInfo, setClassInfo] = useState({
    coverImage: '',
    coverGallery: [],
    classTitle: '',
    mainCategory: '',
    subCategory: '',
    categoryDetail: '',
    classLevel: '',
    classIntroduce: '',
  });

  const navigate = useNavigate();
  const classRegistForm = useRef();
  const accessToken = localStorage.getItem('Token');

  const date = new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0];
  const time = new Date().toTimeString().split(' ')[0];
  useEffect(() => {
    if (detailFlag) {
      setClassInfo(currentClass);
    }
  }, [currentClass]);

  const classSubmit = event => {
    event.preventDefault();
    for (const key in classInfo) {
      if (classInfo[key] === '' || classInfo[key] === []) {
        alert('입력란을 모두 입력하세요.');
        return null;
      }
    }

    const classForm = new FormData(classRegistForm.current);
    fetch(`${BASE_URL}/classes/class`, {
      method: 'POST',
      headers: {
        enctype: 'multipart/form-data',
        authorization: accessToken,
      },
      body: classForm,
    }).then(response => {
      if (response.ok) {
        navigate(`/creatorcenter`);
      }
    });
  };
  return (
    <RegistContainer
      detailFlag={detailFlag}
      onSubmit={classSubmit}
      ref={classRegistForm}
    >
      <RegistHeader>
        <div>정규 클래스</div>
        <Button>Submit</Button>
      </RegistHeader>
      <ClassBasicInfo
        title="클래스 기본 정보"
        classInfo={classInfo}
        setClassInfo={setClassInfo}
        currentClass={currentClass}
        detailFlag={detailFlag}
      />
      <ClassDetailInfo
        title="클래스 상세 정보"
        classInfo={classInfo}
        setClassInfo={setClassInfo}
        currentClass={currentClass}
        detailFlag={detailFlag}
      />
      <ClassSubmitTimeInput name="createdAt" value={date + ' ' + time} />
    </RegistContainer>
  );
}

const RegistContainer = styled.form`
  margin: 170px 0 100px 340px;
  width: 100%;
  max-width: 759px;
`;

const RegistHeader = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  min-width:440px;
  width: 55%;
  max-width: 800px;
  font-size: 30px;
  font-weight: 700;
`;

const Button = styled.button`
  width: 65px;
  height: 30px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ClassSubmitTimeInput = styled.input`
  display: none;
`;

export default ClassRegist;
