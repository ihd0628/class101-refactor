import React from 'react';
import styled from 'styled-components';
import LoginBtn from './components/LoginBtn';

function Login() {
  return (
    <Pagewrapper>
      <Loginwrapper>
        <Companywrapper>
          <Companyname>CLASS IOI</Companyname>
          <Language aria-label="select language"> 🇰🇷 한국어 </Language>
        </Companywrapper>
        <LoginBtn />
      </Loginwrapper>
      <Loginimage alt="로그인" src="./images/Login/Aurora.png" />
    </Pagewrapper>
  );
}

const Pagewrapper = styled.div`
  display: flex;
  width: 100%;
`;

const Loginwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: calc(100% - 55%);
`;

const Companywrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  top: 0;
  width: 376px;
  padding-top: 30px;
`;

const Companyname = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const Language = styled.button`
  border: 0;
  outline-style: 0;
  background-color: transparent;
  font-size: 13px;
  color: rgb(105, 105, 105);
  cursor: pointer;
`;

const Loginimage = styled.img`
  flex: 1;
  height: 100vh;
  object-fit: cover;
`;

export default Login;
