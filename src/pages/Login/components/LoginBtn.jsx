import React from 'react';
import styled from 'styled-components';

function LoginBtn() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_API_KEY}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code`;

  const handlelogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <Loginbutton>
      <Info>
        준비물까지 챙겨주는 <br /> 온라인 클래스
      </Info>
      <Loginbtn aria-label="start login with kakao" onClick={handlelogin}>
        카카오로 3초 만에 시작하기
      </Loginbtn>
      <Otherbtn aria-label="start login">다른 방법으로 시작하기</Otherbtn>
    </Loginbutton>
  );
}

const Loginbutton = styled.div`
  width: 376px;
`;

const Info = styled.div`
  margin-bottom: 30px;
  font-size: 32px;
  font-weight: bold;
  line-height: 44px;
`;

const Loginbtn = styled.button`
  display: block;
  width: 380px;
  border: 0;
  border-radius: 3px;
  padding: 12px 90px;
  margin-top: 8px;
  background-color: rgb(255, 229, 19);
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

const Otherbtn = styled.button`
  width: 380px;
  border: 0;
  border-radius: 3px;
  padding: 10px 90px;
  margin-top: 8px;
  background-color: #f8f8f8;
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
`;

export default LoginBtn;
