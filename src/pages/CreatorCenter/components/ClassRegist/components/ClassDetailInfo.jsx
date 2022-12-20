import React from 'react';
import styled from 'styled-components';
import InputForm from './InputForm';

function ClassDetailInfo({
  formName,
  classInfo,
  setClassInfo,
  currentClass,
  detailFlag,
}) {
  return (
    <InfoContainer>
      <InfoTitle>{formName}</InfoTitle>

      <InputForm
        type="textarea"
        subject="클래스 소개"
        description="클래스에 대한 소개를 작성해주세요."
        borderUnUse
        classInfo={classInfo}
        setClassInfo={setClassInfo}
        title="classIntroduce"
        currentClass={currentClass}
        detailFlag={detailFlag}
      />
    </InfoContainer>
  );
}

const InfoContainer = styled.div`
  margin-top: 20px;
  min-width: 440px;
  width: 55%;
  max-width: 800px;
  border: 1px solid #e5e5e5;
  border-radius: 7px;
`;

const InfoTitle = styled.div`
  margin: 21px 0px 7px 14px;
  font-size: 18px;
  font-weight: 700;
`;

export default ClassDetailInfo;
