import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClassListProperty from './components/ClassListProperty';
import Class from './components/Class';

import MOCK from './mockData/classLists';
import BASE_URL from '../../../../../../../../config';

function ClassList() {
  const [classListArr, setClassListArr] = useState([]);

  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetch(`${BASE_URL}/classes/`, {
      method: 'GET',
      headers: {
        authorization: token,
      },
    })
      .then(response => response.json())
      .then(() => {
        const acc = [];
        MOCK.forEach(item => {
          if (acc.length !== 0) {
            acc.every((accs, index) => {
              if (item.classId < accs.classId) {
                acc.splice(index, 0, item);
                return false;
              }
              return true;
            });
          } else if (acc.length === 0) {
            acc.push(item);
          }
        });
        setClassListArr(acc);
      });
  }, []);

  console.log('classListArr : ', classListArr);

  return (
    <ClassListContainer>
      <ClassListProperty />
      {classListArr?.map((classItem, index) => {
        return (
          <Class
            key={classItem.classId}
            index={index}
            id={classItem.id}
            classItem={classItem}
            classListArr={classListArr}
            setClassListArr={setClassListArr}
          />
        );
      })}
    </ClassListContainer>
  );
}

const ClassListContainer = styled.div`
  overflow-x: scroll;
`;

export default ClassList;
