import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Likeproducts from './components/Likeproducts';
import BASE_URL from '../../config';

function MyPage() {
  const [likeList, setLikeList] = useState([]);

  const HandleLogout = () => {
    localStorage.removeItem('Token');
  };

  const token = localStorage.getItem('Token');

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  useEffect(() => {
    fetch(`${BASE_URL}/likes/getList`, {
      headers: {
        authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setLikeList(data.message);
      });
  }, []);

  return (
    <Mypage>
      <Nicknamewrapper>
        <Nickname>
          Classmate
          <Logo src="./images/Mypage/image.png" alt="마크" />
        </Nickname>
        <Userid>jinsu0824@naver.com</Userid>
      </Nicknamewrapper>
      <Index>
        <Myinfo>
          <Info>내 정보</Info>
          <CashPoint>
            <div>내 캐시</div>
            <div>기프트카드 등록</div>
          </CashPoint>
          <CashPoint>
            <div>내 포인트</div>
            <div>100,000P</div>
          </CashPoint>
          <Text>내 쿠폰</Text>
          <Text>내 응원</Text>
          <Text>주문 내역</Text>
          <Text>내 후기</Text>
          <MembershipMenu>멤버쉽</MembershipMenu>
          <Text>IOIText</Text>
          <Text>Money+</Text>
          <MembershipMenu>메뉴</MembershipMenu>
          <Text>친구 초대하고 30,000원 쿠폰 받기</Text>
          <Text>클래스 IOI 앱 설치하기</Text>
          <Text>크리에이터 지원하기</Text>
          <DeleteBtn onClick={HandleLogout}>로그아웃</DeleteBtn>
        </Myinfo>
        <Product>
          <Likeheader>찜한 상품</Likeheader>
          <Likewrapper>
            <ProductsWrap>
              <Slider {...settings}>
                {likeList.map(e => {
                  return <Likeproducts key={e.classId} likeList={e} />;
                })}
              </Slider>
            </ProductsWrap>
          </Likewrapper>
        </Product>
      </Index>
    </Mypage>
  );
}

const Mypage = styled.div`
  width: 1285px;
  margin: 100px auto 0;
`;

const Nicknamewrapper = styled.div`
  width: 100%;
  height: 180px;
  padding: 72px 0 48px;
`;

const Nickname = styled.h2`
  font-weight: bold;
  font-size: 30px;
`;

const Logo = styled.img`
  height: 20px;
  width: 20px;
`;

const Userid = styled.div`
  font-size: 14px;
  color: #a2a2a2;
`;

const Index = styled.div`
  display: flex;
`;

const Myinfo = styled.div`
  margin-right: 78px;
  height: 880px;
  width: 320px;
`;

const Info = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 0 0 16px;
`;

const CashPoint = styled.div`
  padding: 10px 0;
  line-height: 16px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  padding: 10px 0;
  line-height: 16px;
  font-size: 14px;
`;

const DeleteBtn = styled.button`
  padding: 10px 0;
  line-height: 16px;
  font-size: 14px;
  border: 0;
  outline: 0;
  background: transparent;
  cursor: pointer;
`;

const Product = styled.div`
  padding: 10px 0;
  width: 800px;
  line-height: 16px;
  font-size: 14px;
`;

const Likewrapper = styled.div`
  margin-left: 10px;
  display: block;
`;

const Likeheader = styled.div`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
`;

const MembershipMenu = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin: 50px 0 16px;
`;

const ProductsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
  .slick-list {
    height: 500px;
    width: 1000px;
  }

  .slick-prev {
    top: -35px;
    left: 920px;
  }
  .slick-next {
    top: -35px;
    right: 30px;
  }
  .slick-prev:before {
    opacity: 1; // 화살표 버튼이 보이게
    color: black; // 버튼 색
    content: '<'; // 화살표 버튼 모양
  }
  .slick-next:before {
    opacity: 1;
    color: black;
    content: '>';
  }
  .slick-track {
    margin-left: 0;
  }
`;

export default MyPage;
