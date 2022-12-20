import React from 'react';
import styled from 'styled-components';

function DetailNav() {
  const SUB_TITLE = [
    { id: 1, name: '후기', href: '#reviewConer' },
    { id: 2, name: '클래스 소개', href: '#classIntroduce' },
    { id: 3, name: '크리에이터', href: '#creator' },
    { id: 4, name: '환불 정책', href: '#refund' },
  ];

  return (
    <Nav>
      {SUB_TITLE.map(title => {
        const { id, name, href } = title;
        return (
          <SubTitle key={id} href={href} gray>
            {name}
          </SubTitle>
        );
      })}
    </Nav>
  );
}

export default DetailNav;

const Nav = styled.ul`
  ${props => props.theme.variables.flex('', '', 'center')}
  position: sticky;
  top: 120px;
  width: 730px;
  height: 60px;
  background-color: white;
`;

const SubTitle = styled.a`
  margin-right: 24px;
  padding: 14px 0;
  text-decoration: none;
  font-size: 16px;
  color: #a2a2a2;

  :hover {
    color: black;
    font-weight: 700;
    cursor: pointer;
  }
`;
