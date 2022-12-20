import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Likeproducts({ likeList }) {
  console.log('e : ', likeList);

  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/classes/detail/${likeList.classId}`);
  };

  return (
    <Products onClick={goToDetail}>
      <ThumbBox>
        <Thumb src={likeList?.thumbnailImage} alt="썸네일" />
      </ThumbBox>
      <Creatorname>{likeList?.creator}</Creatorname>
      <Description>{likeList?.className}</Description>
      <div>
        <heart>❤️{likeList?.likeCount}</heart>
      </div>
      <Price>{Number(likeList?.price).toLocaleString()}원</Price>
    </Products>
  );
}

const Products = styled.div`
  width: 300px;
  margin-bottom: 20px;
  line-height: 1.4em;
  cursor: pointer;
`;

const ThumbBox = styled.div`
  position: relative;
  height: 0;
  padding-bottom: 100%;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  overflow: hidden;
`;

const Thumb = styled.img`
  position: absolute;
  object-fit: cover;
  overflow: hidden;
  transition: all 0.2s linear;
  &:hover {
    transform: scale(1.2);
  }
`;

const Creatorname = styled.div`
  font-size: 11px;
  font-weight: bold;
`;

const Description = styled.div`
  font-size: 14px;
`;

const Price = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

export default Likeproducts;
