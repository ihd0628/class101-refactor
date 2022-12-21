import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ClassListProperty from './components/ClassListProperty';
import Class from './components/Class';

import MOCK from './mockData/classLists';
// import BASE_URL from '../../../../../../../../config';

function ClassList() {
  const [classList, setClassList] = useState([]);

  // const token = localStorage.getItem('Token');

  useEffect(() => {
    // HTTP 통신용

    // fetch(`${BASE_URL}/classes/`, {
    //   method: 'GET',
    //   headers: {
    //     authorization: token,
    //   },
    // })
    //   .then(response => response.json())
    //   .then(() => {
    //     const acc = [];
    //     MOCK.forEach(item => {
    //       if (acc.length !== 0) {
    //         acc.every((accs, index) => {
    //           if (item.classId < accs.classId) {
    //             acc.splice(index, 0, item);
    //             return false;
    //           }
    //           return true;
    //         });
    //       } else if (acc.length === 0) {
    //         acc.push(item);
    //       }
    //     });
    //     setClassList(acc);
    //   });
    setClassList(MOCK);
  }, []);

  return (
    <ClassListContainer>
      <ClassListProperty />
      {classList?.map((classItem, index) => {
        return (
          <Class
            key={classItem.classId}
            index={index}
            id={classItem.id}
            classItem={classItem}
            classList={classList}
            setClassList={setClassList}
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
