import React from 'react';
import styled from 'styled-components';
import ListItem from './components/ListItem';

function LectureList({
  lectureList,
  searchParams,
  setSearchParams,
  setVideoId,
}) {
  const goToLecture = () => {};

  return (
    <ListContainer onClick={goToLecture}>
      {lectureList &&
        lectureList?.map(listItem => {
          return (
            <ListItem
              key={listItem.id}
              listItem={listItem}
              searchParams={searchParams}
              setSearchParams={setSearchParams}
              setVideoId={setVideoId}
            />
          );
        })}
    </ListContainer>
  );
}

const ListContainer = styled.div`
  min-width: 340px;
  width: 20%;
  height: 100vh;
  overflow-y: scroll;
  color: #e7e7e7;
  background-color: black;

  /* 스크롤바 설정*/
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    background-color: #6b6b6b;
    /* 스크롤바 둥글게 설정    */
    border-radius: 10px;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: #2c2c2c;
    border: #6b6b6b;
  }
`;

export default LectureList;
