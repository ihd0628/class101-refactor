import React from 'react';
import styled from 'styled-components';
import { FaAddressCard } from '@react-icons/all-files/fa/FaAddressCard';

function Subscribe() {
  return (
    <SubscribeContainer>
      <div>
        <Title>
          IOI를
          <br />
          구독하시겠습니까?
        </Title>
      </div>
      <SubscribeBox>
        <Tag>New</Tag>
        <DetailBox>
          <Detail>IOI 구독</Detail>
          <Detail>50,000원</Detail>
        </DetailBox>
        <StyleLine />
        <PayBox>
          <FaAddressCard size="20" color="white" />
          <Info>포인트 결제</Info>
        </PayBox>
      </SubscribeBox>
      <PointBox>
        <Detail>잔여 포인트</Detail>
        <Detail>50,000원</Detail>
      </PointBox>
      <SubscribeBtn
        aria-label="subscribe"
        onClick={() => alert('준비 중입니다!')}
      >
        구독하기
      </SubscribeBtn>
    </SubscribeContainer>
  );
}

const SubscribeContainer = styled.div`
  ${props => props.theme.variables.flex('column', 'center', 'center')}
  position: relative;
  margin: 0 auto;
  padding: 60px 0 80px;
  width: 500px;
  border-radius: 50px;
  background-color: black;
`;

const Title = styled.p`
  margin-bottom: 50px;
  width: 398px;
  text-align: left;
  font-size: 28px;
  line-height: 40px;
  font-weight: bold;
  color: white;
`;

const SubscribeBox = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  width: 398px;
  border: 1px solid #ff5d00;
  background-color: rgb(49, 49, 49);
`;

const Tag = styled.span`
  padding: 2px 8px;
  border-radius: 3px;
  background-color: #ff5d00;
  font-size: 11px;
  color: white;
`;

const DetailBox = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'center')}
  margin: 30px 0;
`;

const Detail = styled.span`
  font-weight: bold;
  color: white;
`;

const StyleLine = styled.div`
  margin-bottom: 20px;
  width: 358px;
  height: 1px;
  background-color: #5f5e5e;
`;

const PayBox = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
`;

const Info = styled.span`
  margin-left: 10px;
  font-size: 14px;
  color: white;
`;

const PointBox = styled.div`
  ${props => props.theme.variables.flex('row', 'space-between', 'end')}
  padding: 20px;
  width: 398px;
  background-color: rgb(49, 49, 49);
  line-height: 24px;
`;

const SubscribeBtn = styled.button`
  margin-top: 40px;
  padding: 15px;
  width: 398px;
  border-radius: 5px;
  background-color: #ff5d00;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

export default Subscribe;
