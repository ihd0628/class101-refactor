import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal/lib/components/Modal';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';
import { AiFillCaretLeft } from '@react-icons/all-files/ai/AiFillCaretLeft';
import { AiFillCaretRight } from '@react-icons/all-files/ai/AiFillCaretRight';
import Creator from './Creator';
import Review from './Review';
import ReviewModal from './ReviewModal';
import BASE_URL from '../../../config';

function DetailIntro({
  image,
  classTitle,
  classIntroduce,
  creatorName,
  profileImage,
  aboutCreater,
  content,
  classId,
}) {
  const [reviews, setReviews] = useState([]);
  const [totalReview, setTotalReview] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectModal, setSelectModal] = useState(true);
  const [registTxt, setRegistTxt] = useState({});
  const [offset, setOffset] = useState(0);
  const [editReviewId, setEditReviewId] = useState();
  const [editUserId, setEditUserId] = useState();

  console.log(classId);

  const modalDisplay = {
    overlay: {
      position: 'fixed',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 100,
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
    },
  };

  const modalHandler = () => {
    setIsModalOpen(prev => !prev);
  };

  const editModalHandler = e => {
    setIsEdit(prev => !prev);
    setSelectModal(prev => !prev);
    const target = Number(e.currentTarget.id);
    setEditReviewId(target);

    reviews.forEach(review => {
      if (review.reviewId === target) {
        setEditUserId(review.userId);
      }
    });
    const reviewItem = reviews.find(item => item.reviewId === target);
    setRegistTxt(reviewItem);
  };

  useEffect(() => {
    fetch(`${BASE_URL}/review/${classId}?offset=0&limit=1000`)
      .then(response => response.json())
      .then(result => setTotalReview(result.review));
  }, []);

  // http://10.58.52.97:3000/review/${classId}?offset=${offset}&limit=4

  useEffect(() => {
    fetch(`${BASE_URL}/review/${classId}?offset=${offset}&limit=4`)
      .then(response => response.json())
      .then(result => {
        console.log(result.review);
        setReviews(result.review);
      });
  }, [offset, totalReview]);

  const maxPageNum = Math.ceil(totalReview?.length || 1 / 4);
  const currentPage = offset / 4 + 1;

  const pageArr = (() => {
    const result = [];
    for (let i = 1; i <= maxPageNum; i += 1) {
      result.push(i);
    }
    return result;
  })();

  const movePage = pageNum => {
    setOffset((pageNum - 1) * 4);
  };

  const prevBtn = () => {
    if (currentPage === 1) return;
    setOffset(0);
  };

  const nextBtn = () => {
    if (currentPage === maxPageNum) return;
    setOffset(currentPage * 4);
  };

  // API주소/review/classId=${classId}&reviewId=${Number(e.target.id)}

  const deleteBtn = e => {
    e.preventDefault();
    fetch(`http://10.58.52.97:3000/review?classId=2&reviewId=${e.target.id}`, {
      method: 'DELETE',
      header: {
        // authorization: token,
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => {
        // console.log(result);
        const reviewsForCopy = [];
        for (let i = 0; i < 4; i += 1) {
          reviewsForCopy.push(result.review[i]);
        }
        setTotalReview(result.review);
        setReviews([...reviewsForCopy]);
      });
  };

  if (!reviews) return <>loading...</>;

  return (
    <>
      <InfoTitle>클래스 정보</InfoTitle>
      <InfoText1>클래스 분량</InfoText1>
      <InfoText2>5개 챕터, 30개 세부강의</InfoText2>
      <InfoText1>수강 가능일</InfoText1>
      <InfoText2>바로 수강 가능</InfoText2>
      <InfoText1>자막 포함 여부</InfoText1>
      <InfoText2>포함</InfoText2>

      <Line id="reviewConer" />

      <ReviewTitle>
        <Title>실제 수강생 후기</Title>
        <ReviewBtn aria-label="make Review" onClick={modalHandler}>
          후기 작성하기
        </ReviewBtn>
      </ReviewTitle>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={modalHandler}
          style={modalDisplay}
        >
          <XBtn aria-label="cancel" onClick={modalHandler}>
            <AiOutlineClose />
          </XBtn>
          <ReviewModal
            classId={classId}
            classTitle={classTitle}
            closeModal={modalHandler}
            selectModal={selectModal}
            setReviews={setReviews}
            setTotalReview={setTotalReview}
          />
        </Modal>
      )}

      {isEdit && (
        <Modal
          isOpen={isEdit}
          onRequestClose={editModalHandler}
          style={modalDisplay}
        >
          <XBtn aria-label="cancel" onClick={editModalHandler}>
            <AiOutlineClose />
          </XBtn>
          <ReviewModal
            classId={classId}
            classTitle={classTitle}
            closeModal={isEdit}
            isModalOpen={isEdit}
            selectModal={selectModal}
            setReviews={setReviews}
            registTxt={registTxt}
            editReviewId={editReviewId}
            editUserId={editUserId}
          />
        </Modal>
      )}

      <ImageWrap>
        {reviews?.map(item => {
          return (
            item?.imageUrl && (
              <ImageContainer key={item?.id}>
                <ReviewImg src={item?.imageUrl} alt="후기 이미지" />
              </ImageContainer>
            )
          );
        })}
      </ImageWrap>
      <div>
        {reviews === undefined
          ? null
          : reviews?.map(({ userId, reviewId, imageUrl, reviewContent }) => {
              return (
                <div key={reviewId}>
                  <Review
                    userId={userId}
                    reviewId={reviewId}
                    img={imageUrl}
                    content={reviewContent}
                    deleteBtn={deleteBtn}
                    editModalHandler={editModalHandler}
                    reviews={reviews}
                  />
                </div>
              );
            })}

        <ReviewUl>
          <ReviewLi onClick={prevBtn}>
            <AiFillCaretLeft />
          </ReviewLi>

          {pageArr.map(num => {
            return (
              <ReviewLi key={num} onClick={() => movePage(num)}>
                {num}
              </ReviewLi>
            );
          })}

          <ReviewLi onClick={nextBtn}>
            <AiFillCaretRight />
          </ReviewLi>
        </ReviewUl>
      </div>

      <Line id="classIntroduce" />
      <Title>클래스 소개</Title>
      <p>{classIntroduce}</p>
      {image?.map(item => {
        return (
          <IntroImgContainer key={item}>
            <IntroImg src={item} alt="강의 소개 이미지" />
          </IntroImgContainer>
        );
      })}
      <IntroP>{content}</IntroP>
      <Line id="creator" />
      <Creator
        creatorName={creatorName}
        profileImage={profileImage}
        aboutCreater={aboutCreater}
      />
      <Line id="refund" />
      <Title>환불 정책</Title>
      <RefundBox>
        <RefundTxt>
          환불 정책에 따라 구매일로부터 90일까지 환불 요청이 가능하며, 7일 까지
          전액 환불이 가능합니다.
        </RefundTxt>
        <SeeMoreBtn aria-label="see payback describe">
          전체 환불 정책 보기
        </SeeMoreBtn>
      </RefundBox>
      <Line />
    </>
  );
}

const XBtn = styled.div`
  display: flex;
  justify-content: right;
  cursor: pointer;
`;

const Line = styled.div`
  border: 1px solid #f8f8f8;
  margin: 80px 0;
`;

const InfoTitle = styled.h2`
  padding: 40px 0 20px 0;
  font-size: 18px;
  font-weight: 700;
`;

const InfoText1 = styled.span`
  margin-right: 10px;
  color: #ccc;
  font-size: 14px;
  font-weight: 700;
`;

const InfoText2 = styled(InfoText1)`
  margin-right: 30px;
  color: black;
  font-size: 14px;
  font-weight: 500;
`;

const ReviewTitle = styled.h3`
  ${props => props.theme.variables.flex('center', 'space-between', 'center')}
  margin-bottom: 30px;
  width: 725px;
`;

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 700;
`;

const ReviewBtn = styled.button`
  padding: 6px 7px;
  background-color: transparent;
  color: #0c0c0c;
  font-size: 12px;
  font-weight: 700;
  border: 1px solid #dedede;
  border-radius: 3px;
  cursor: pointer;
`;

const ImageWrap = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ImageContainer = styled.div`
  width: 180px;
  height: 145px;
  margin-right: 10px;
  overflow: hidden;
`;

const ReviewImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ReviewUl = styled.ul`
  ${props => props.theme.variables.flex('', 'center', '')}
`;

const ReviewLi = styled.li`
  margin: 0 20px;
  cursor: pointer;
`;

const IntroImgContainer = styled.div`
  width: 730px;
  margin: 20px 0;
`;

const IntroImg = styled.img`
  width: 100%;
`;

const IntroP = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

const RefundBox = styled.div`
  padding: 24px;
  background-color: #f8f8f8;
`;

const RefundTxt = styled.p`
  font-size: 14px;
  line-height: 24px;
`;

const SeeMoreBtn = styled.button`
  padding: 0;
  background: none;
  color: #d0d0d0;
  cursor: pointer;
`;

export default DetailIntro;
