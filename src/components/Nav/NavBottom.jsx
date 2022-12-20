import React from 'react';
import styled from 'styled-components';
import { FaCaretDown } from '@react-icons/all-files/fa/FaCaretDown';

function NavBottom() {
  return (
    <Nav>
      <WrapList>
        <WrapCategory>
          <Category>전체 카테고리</Category>
          <FaCaretDown />
        </WrapCategory>
        <List>구독</List>
        <List>BEST</List>
        <List>이벤트</List>
        <List>101아카데미</List>
        <List>신규 클래스</List>
        <List>시그니처</List>
      </WrapList>
    </Nav>
  );
}

const Nav = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'center')}
  position: fixed;
  top: 78px;
  padding: 13px 0;
  width: 100vw;
  border-bottom: 1px solid #eeeeee;
  background-color: white;
  z-index: 10;
`;

const WrapCategory = styled.div`
  margin-right: 25px;
  cursor: pointer;
`;

const Category = styled.span`
  margin-right: 3px;
  font-size: 15px;
  font-weight: bold;
`;

const WrapList = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  width: 1140px;
`;

const List = styled.span`
  margin-right: 25px;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;

export default NavBottom;
