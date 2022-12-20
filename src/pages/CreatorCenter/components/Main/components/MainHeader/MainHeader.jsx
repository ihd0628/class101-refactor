import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

function MainHeader() {
  const [searchParams, setSearchParams] = useSearchParams();

  const goToClassRegist = () => {
    searchParams.set('page', 'classRegist');
    setSearchParams(searchParams);
  };

  return (
    <HeaderContainer>
      <HeaderTitle>상품</HeaderTitle>
      <HeaderButton aria-label="make Product" onClick={goToClassRegist}>
        + 상품만들기
      </HeaderButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  margin-top: 90px;
`;

const HeaderTitle = styled.div`
  font-size: 30px;
  font-weight: 680;
`;

const HeaderButton = styled.div`
  ${props => props.theme.variables.flex()}
  height: 38px;
  width: 114px;
  color: white;
  background-color: #ff5d04;
  border-radius: 4px;
  cursor: pointer;
`;

export default MainHeader;
