import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import MOCK from '../Main/components/MainContent/components/ClassList/mockData/classLists';
import ClassRegist from '../ClassRegist/ClassRegist';
import VideoList from './components/VideoList/VideoList';
import BASE_URL from '../../../../config';

function ClassDetail() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentClass, setCurrnetClass] = useState();

  const currentClassId = searchParams.get('classId');
  const detailFlag = true;

  useEffect(() => {
    fetch(`${BASE_URL}/classes/admin/${currentClassId}`)
      .then(response => {
        return response.json();
      })
      .then((/* result */) => {
        setCurrnetClass(MOCK);
      });
  }, []);

  return (
    <DetailContainer>
      <ClassRegist
        currentClass={currentClass}
        detailFlag={detailFlag}
        setSearchParams={setSearchParams}
      />
      <VideoList />
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', '')}
`;

export default ClassDetail;
