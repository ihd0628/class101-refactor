import React from 'react';
import styled from 'styled-components';

function ListItem({ listItem, searchParams, setSearchParams, setVideoId }) {
  const goToLecture = () => {
    searchParams.set('videoId', listItem?.id);
    setSearchParams(searchParams);
    setVideoId(listItem?.id);
  };

  return (
    <ItmeContainer onClick={goToLecture}>
      <Title>{listItem?.videoTitle}</Title>
      <Description>{listItem?.videoDescription}</Description>
      <Time>
        <Img src="https://cdn-icons-png.flaticon.com/512/5910/5910421.png" />
        <Text>{listItem?.time}</Text>
      </Time>
      <ViewCount>
        <Img src="https://cdn-icons-png.flaticon.com/512/5618/5618479.png" />
        <Text>{listItem?.viewCount}</Text>
      </ViewCount>
    </ItmeContainer>
  );
}

const ItmeContainer = styled.div`
  margin: 35px;
  cursor: pointer;
`;

const Title = styled.div`
  color: #f3f3f3;
  font-size: 25px;
  margin-bottom: 10px;
`;
const Description = styled.div`
  color: ${props => props.theme.style.lightGray};
`;
const Time = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  margin-top:5px;
`;

const Img = styled.img`
  height: 10px;
  color: white;
`;
const Text = styled.div`
  margin-left: 5px;
  padding-top: 3px;
`;

const ViewCount = styled.div`
  ${props => props.theme.variables.flex('row', '', 'center')}
  margin-top:5px;
`;

export default ListItem;
