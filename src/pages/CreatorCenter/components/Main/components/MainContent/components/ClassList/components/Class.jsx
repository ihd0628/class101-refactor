import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

function Class({
  index,
  classItem: {
    classId,
    coverImage,
    classTitle,
    mainCategory,
    subCategory,
    createdAt,
  },
  classListArr,
  setClassListArr,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const classDeleter = () => {
    classListArr.splice(index, 1);
    setClassListArr([...classListArr]);
  };

  const goToClassDetail = () => {
    searchParams.set('page', 'classDetail');
    searchParams.set('classId', classId);
    setSearchParams(searchParams);
  };

  const date = createdAt.split('T');
  const date1 = date[0];
  const date2 = date[1].split('.')[0];
  const dateForOutput = `${date1} ${date2}`;

  return (
    <ClassContainer>
      <input type="checkbox" />
      <Image src={coverImage} alt="강의커버이미지" onClick={goToClassDetail} />
      <Property onClick={goToClassDetail}>{classTitle}</Property>
      <Property onClick={goToClassDetail}>{mainCategory}</Property>
      <Property onClick={goToClassDetail}>{subCategory}</Property>
      <Property onClick={goToClassDetail}>{dateForOutput}</Property>
      <DeleteButton aria-label="delete Class" onClick={classDeleter}>
        삭제
      </DeleteButton>
    </ClassContainer>
  );
}

const ClassContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  width:1200px;
  margin: 20px 3px;
  padding-bottom: 15px;
  border-bottom: 1px solid #f2f2f2;
`;

const Image = styled.img`
  width: 100px;
  padding: 5px;
  margin-left: 3%;
  margin-right: 3%;
  font-weight: 700;
  cursor: pointer;
`;

const Property = styled.div`
  width: 170px;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  margin-left: 210px;
  padding-top: 3px;
  background-color: white;
  border: 1px solid #ececec;
  width: 70px;
  height: 38px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
`;

export default Class;
