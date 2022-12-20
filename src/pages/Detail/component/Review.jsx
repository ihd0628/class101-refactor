import React from 'react';
import styled from 'styled-components';
import { FaRegCommentDots } from '@react-icons/all-files/fa/FaRegCommentDots';

function Review({ reviewId, img, content, deleteBtn, editModalHandler }) {
  return (
    <ReviewContainer img={img}>
      <Line>
        <Wrap>
          <Div>
            <UserPic alt="유저 이미지" />
            <UserName>User{reviewId}</UserName>
          </Div>
          <XBtn aria-label="cancel" id={reviewId} onClick={deleteBtn}>
            x
          </XBtn>
        </Wrap>

        <Wrap>
          <ReviewText>{content}</ReviewText>
          {img && <RiviewImg alt="리뷰" src={img} img={img} />}
        </Wrap>

        <EditBtn id={reviewId} onClick={editModalHandler}>
          <FaRegCommentDots style={{ display: 'inline' }} />
          <span>수정하기</span>
        </EditBtn>
      </Line>
    </ReviewContainer>
  );
}

const Wrap = styled.div`
  ${props => props.theme.variables.flex('center', 'space-between', 'center')}
  margin-bottom: 10px;
`;

const Div = styled.div`
  ${props => props.theme.variables.flex('', '', 'center')}
  gap: 10px;
`;

const XBtn = styled.button`
  background: none;
  cursor: pointer;
`;

const ReviewContainer = styled.div`
  display: ${props => (props.img ? 'flex' : '')};
`;

const Line = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ededed;
  border-radius: 3px;
  box-shadow: 1px 1px 5px #ededed;
`;

const UserPic = styled.img`
  width: 30px;
  height: 30px;
  background-color: black;
  border-radius: 50%;
`;

const UserName = styled.p`
  font-size: 13px;
  font-weight: 700;
`;

const RiviewImg = styled.img`
  width: 120px;
  width: 120px;
  height: 100px;
  background-color: #ededed;
`;

const ReviewText = styled.div`
  width: 530px;
  max-height: 85px;
  margin: 8px 25px 8px 0;
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const EditBtn = styled.div`
  background: white;
  color: #a2a2a2;
  font-size: 12px;
  cursor: pointer;

  span {
    margin-left: 3px;
    line-height: 12px;
  }
`;

export default Review;
