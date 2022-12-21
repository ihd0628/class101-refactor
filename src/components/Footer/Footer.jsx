import React from 'react';
import styled from 'styled-components';
import { INFO_LIST, SOCIAL_LIST } from './infoData';

function Footer() {
  return (
    <FooterContainer>
      <ContentContainer>
        <ContentLargeBox>
          <ContentTitle>IOI</ContentTitle>
          <Content>
            IOI는 모든 사람이 사랑하는 일을 하며 살 수 있도록 세상을 바꾸고자
            합니다.
          </Content>
          <Content>KR 한국어</Content>
        </ContentLargeBox>
        <ContentBox>
          <ContentTitle>About</ContentTitle>
          <Content>홈</Content>
          <Content>기업교육</Content>
          <Content>채용</Content>
          <Content>도움말</Content>
        </ContentBox>
        <ContentBox>
          <ContentTitle>크리에이터</ContentTitle>
          <Content>크리에이터 센터</Content>
          <Content>정규 클래스 지원하기</Content>
          <Content>도움말</Content>
        </ContentBox>
        <ContentBox>
          <ContentTitle>고객센터</ContentTitle>
          <CallBtn>문의하기</CallBtn>
          <Content>오전 10시 ~ 오후 6시 (주말, 공휴일 제외)</Content>
        </ContentBox>
      </ContentContainer>
      <ContentContainer>
        <SocialList>
          {SOCIAL_LIST.map(social => (
            <DetailBox key={social.id}>
              <Detail>{social.title}</Detail>
              <span>&middot;</span>
            </DetailBox>
          ))}
        </SocialList>
        <ListContainer>
          <ListBox>
            {INFO_LIST.map(info => (
              <DetailBox key={info.id}>
                <Detail>{info.title}</Detail>
                <span>&middot;</span>
              </DetailBox>
            ))}
          </ListBox>
          <Detail>
            주식회사 IOI | 대표 아이오아이 | 서울특별시 강남구 101 101-101
            101층(아이오아이 타워) | 사업자등록번호 : 000-00-00000 |
            통신판매업신고 : 0000-서울강남-0000
          </Detail>
        </ListContainer>
      </ContentContainer>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  background-color: black;
  width: 100%;
  height: 500px;
  border-top: 1px solid #e8e8e8;
`;

const ContentContainer = styled.div`
  ${props => props.theme.variables.flex('row', 'center', 'flex-start')}
  padding: 40px 0 64px 0;
  width: 100%;
`;

const ContentLargeBox = styled.div`
  width: 398px;
`;

const ContentBox = styled.div`
  width: 240px;
`;

const ContentTitle = styled.p`
  font-weight: bold;
`;

const Content = styled.p`
  margin-top: 20px;
  width: 260px;
  font-size: 14px;
  line-height: 18px;
  color: #666666;
`;

const CallBtn = styled.button`
  margin-top: 20px;
  width: 250px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #f8f8f8;
  font-weight: bold;
`;

const DetailBox = styled.div`
  display: inline-block;
`;

const SocialList = styled.div`
  width: 398px;
  padding-right: 40px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 748px;
`;

const Detail = styled.span`
  padding: 5px;
  font-size: 12px;
  line-height: 18px;
  color: #a2a2a2;
`;

const ListBox = styled.div`
  width: 748px;
  padding-bottom: 10px;
`;

export default Footer;
