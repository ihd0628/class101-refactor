import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineCreditCard } from '@react-icons/all-files/ai/AiOutlineCreditCard';
import { BsPiggyBank } from 'react-icons/bs';

function Payment() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Body>
      <PaymentWrap>
        <PaymentTitle>결제하기</PaymentTitle>
        <OrderInfo>
          <SubTitle>주문 정보</SubTitle>
          <Text>클래스 이름</Text>
          <ClassImg />
        </OrderInfo>

        <OrderInfo>
          <SubTitle>포인트</SubTitle>
          <PointInput placeholder="0원" type="number" />
          <PayBtn>전액 사용</PayBtn>
          <TextGray>사용 가능한 포인트 50,000원</TextGray>
        </OrderInfo>

        <OrderInfo>
          <SubTitle>결제 금액</SubTitle>
          <TextWrap>
            <TextGray>총 상품 금액</TextGray>
            <TextGray>45,000원</TextGray>
          </TextWrap>

          <TextWrap>
            <TextGray>포인트 적용 금액</TextGray>
            <TextGray>- 45,000원</TextGray>
          </TextWrap>

          <Line />

          <TextWrap>
            <Text>최종 가격</Text>
            <TextBigBold>0원</TextBigBold>
          </TextWrap>
        </OrderInfo>

        <OrderInfo>
          <SubTitle>결제 방식</SubTitle>
          <PayWrap>
            <PayMethod>
              <AiOutlineCreditCard
                style={{ position: 'relative', top: '2px', marginRight: '3px' }}
              />
              카드 결제
            </PayMethod>
            <PayMethod>
              <BsPiggyBank
                style={{ position: 'relative', top: '2px', marginRight: '3px' }}
              />
              무통장 입금
            </PayMethod>
            <PayMethod>카카오페이</PayMethod>
            <PayMethod>네이버페이</PayMethod>
          </PayWrap>
          <AgreeLabel onChange={e => setIsChecked(e.target.checked)}>
            <Agree type="checkbox" />
            <Text>(필수) 개인정보 제3자 제공에 동의합니다.</Text>
          </AgreeLabel>
          <PayBtnLong disabled={isChecked}>결제하기</PayBtnLong>
        </OrderInfo>
      </PaymentWrap>
    </Body>
  );
}

const Body = styled.div`
  width: 100vw;
  background-color: #f8f8f9;
`;

const PaymentWrap = styled.section`
  width: 640px;
  padding: 100px 0;
  margin: 0 auto;
`;

const PaymentTitle = styled.h3`
  width: 640px;
  padding: 30px 24px;
  background-color: white;
  font-size: 26px;
  font-weight: 700;
`;

const OrderInfo = styled.div`
  width: 640px;
  margin: 10px 0;
  padding: 24px;
  background-color: white;
`;

const SubTitle = styled.h4`
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 700;
`;

const TextWrap = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
`;

const Text = styled.p`
  color: #1a1a1a;
  font-size: 14px;
  line-height: 34px;
`;

const TextGray = styled(Text)`
  color: #c8c8c8;
`;

const TextBigBold = styled(Text)`
  font-size: 16px;
  font-weight: 700;
`;

const Line = styled.div`
  margin: 10px 0;
  border: 1px solid #f8f8f8;
`;

const ClassImg = styled.div`
  width: 90px;
  height: 72px;
  background-color: black;
`;

const PointInput = styled.input`
  width: 500px;
  height: 40px;
  padding: 15px;
  border: 1px solid #d8d8d8;
  border-radius: 2px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &:focus {
    outline: 1px solid black;
  }
`;

const PayBtn = styled.button`
  margin-left: 8px;
  padding: 12px;
  background-color: black;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 2px;
  cursor: pointer;
`;

const PayWrap = styled.div`
  width: 590px;
  ${props => props.theme.variables.flex('', 'space-between', '')}
  flex-wrap: wrap;
`;

const PayMethod = styled.button`
  width: 290px;
  height: 45px;
  margin-bottom: 10px;
  background-color: transparent;
  font-size: 14px;
  text-align: center;
  border: 1px solid #f8f8f8;
  border-radius: 2px;
  cursor: pointer;
`;

const AgreeLabel = styled.label`
  display: flex;
`;

const Agree = styled.input`
  position: relative;
  top: 3px;
  width: 20px;
  height: 20px;
  margin-right: 10px;

  &:checked {
    color: orange;
  }
`;

const PayBtnLong = styled(PayBtn)`
  position: relative;
  left: -6px;
  width: 100%;
  background-color: #ededed;
  color: #a8a8a8;
  cursor: Default;

  &:disabled {
    background-color: orange;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }
`;

export default Payment;
