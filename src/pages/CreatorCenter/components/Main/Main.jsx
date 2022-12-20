import React from 'react';
import styled from 'styled-components';
import MainContent from './components/MainContent/MainContent';
import MainFooter from './components/MainFooter/MainFooter';

function Main() {
  return (
    <MainContainor>
      <MainContent />
      <MainFooter />
    </MainContainor>
  );
}

const MainContainor = styled.div`
  ${props => props.theme.variables.flex('column', 'space-between', 'center')}
  height:100vh;
  margin-top: 80px;
  margin-left: 264px;
`;

export default Main;
