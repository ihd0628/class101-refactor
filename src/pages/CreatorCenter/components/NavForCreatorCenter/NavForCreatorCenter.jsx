import React from 'react';
import styled from 'styled-components';

function NavForCreatorCenter() {
  return (
    <NavContainor>
      <Linc>
        <Linc href="/">IOI</Linc>{' '}
        <Linc href="/creatorcenter">Creator Center</Linc>
      </Linc>
      <Icon
        alt="IOI"
        src="https://cdn-icons-png.flaticon.com/512/709/709424.png"
      />
    </NavContainor>
  );
}
const NavContainor = styled.nav`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  position:fixed;
  top: 0;
  left: 0;
  background-color: white;
  width: 100%;
  padding: 0 25px;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
  font-size: 30px;
  z-index: 999;
`;

const Linc = styled.a`
  color: black;
  text-decoration: none;
`;

const Icon = styled.img`
  padding: 5px;
  height: 60%;
  background-color: #feb601;
  border-radius: 45%;
`;

export default NavForCreatorCenter;
