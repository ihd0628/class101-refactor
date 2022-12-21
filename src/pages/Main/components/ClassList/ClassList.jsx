import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHeart } from '@react-icons/all-files/fa/FaHeart';
import { FaRegHeart } from '@react-icons/all-files/fa/FaRegHeart';
import BASE_URL from '../../../../config';
import getParametersForUnsplash from '../../Function/functions';

function ClassList({
  classId,
  thumbnailImage,
  creator,
  classTitle,
  likeCount,
  price,
  likedList,
}) {
  const Token = localStorage.getItem('Token');
  const [isLike, setIsLike] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (likedList !== null) {
      likedList.forEach(list => {
        if (list.classId === classId) {
          setIsLike(prev => !prev);
        }
      });
    }
  }, [likedList]);
  const handleLike = () => {
    if (!Token) {
      alert('찜하기를 위해 로그인을 해주세요!');
      navigate('/login');
    } else if (!isLike) {
      fetch(`${BASE_URL}/likes/${classId}`, {
        method: 'POST',
        headers: {
          authorization: Token,
        },
      }).then(response => {
        if (response.statusText === 'Created') {
          window.location.reload();
        }
      });
    } else {
      fetch(`${BASE_URL}/likes/${classId}`, {
        method: 'DELETE',
        headers: {
          authorization: Token,
        },
      }).then(response => {
        if (response.statusText === 'OK') {
          window.location.reload();
        }
      });
    }
  };

  return (
    <ClassBox>
      <StyledLink to={`classes/detail/${classId}`}>
        <ClassImgBox>
          <ClassImg
            src={
              thumbnailImage +
              getParametersForUnsplash({
                width: 260,
                height: 200,
                quality: 'auto',
                format: 'avif',
              })
            }
            alt={classTitle}
          />
        </ClassImgBox>
        <Creator>{creator}</Creator>
        <ClassTitle>{classTitle}</ClassTitle>
        <LikeBox>
          <FaHeart size="12" color="#a2a2a2" />
          <CountLike>{likeCount}</CountLike>
        </LikeBox>
        <ClassPrice>{Number(price).toLocaleString()}원</ClassPrice>
      </StyledLink>
      <LikeButton aria-label="send like" onClick={handleLike}>
        {isLike ? (
          <FaHeart className="icon-like" size="20" color="#ff5600" />
        ) : (
          <FaRegHeart className="icon-like" size="20" color="white" />
        )}
      </LikeButton>
    </ClassBox>
  );
}

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const ClassBox = styled.div`
  margin: 0 12px;
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

const LikeButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const ClassImgBox = styled.div`
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
`;

const ClassImg = styled.img`
  width: 260px;
  height: 200px;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
`;

const Creator = styled.p`
  margin: 10px 0;
  font-size: 12px;
  font-weight: bold;
`;

const ClassTitle = styled.p`
  margin-bottom: 10px;
  width: 260px;
  line-height: 23px;
  font-size: 14px;
`;

const LikeBox = styled.div`
  margin-bottom: 10px;
`;

const CountLike = styled.span`
  margin-left: 3px;
  font-size: 13px;
  color: #a2a2a2;
`;

const ClassPrice = styled.p`
  margin-bottom: 30px;
  padding: 15px 0;
  width: 260px;
  border-top: 1px solid #e8e8e8;
  font-weight: bold;
`;

export default ClassList;
