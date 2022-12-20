import React from 'react';
import styled from 'styled-components';
import InputForm from './InputForm';
import FORM_TEXT_LIST from '../constData/FORM_TEXT_LIST';

function ClassBasicInfo({
  formName,
  classInfo,
  setClassInfo,
  currentClass,
  detailFlag,
}) {
  return (
    <InfoContainer>
      <InfoTitle>{formName}</InfoTitle>
      {FORM_TEXT_LIST.map(
        ({ type, title, isMultiple, subject, description }) => {
          return (
            <InputForm
              key={subject}
              type={type}
              title={title}
              isMultiple={isMultiple}
              subject={subject}
              description={description}
              classInfo={classInfo}
              setClassInfo={setClassInfo}
              currentClass={currentClass}
              detailFlag={detailFlag}
            />
          );
        }
      )}
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

export default ClassBasicInfo;
