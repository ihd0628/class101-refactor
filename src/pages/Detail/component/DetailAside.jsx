import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Modal from 'react-modal/lib/components/Modal';
import { AiOutlineHeart } from '@react-icons/all-files/ai/AiOutlineHeart';
import { AiFillHeart } from '@react-icons/all-files/ai/AiFillHeart';
import { AiOutlinePlayCircle } from '@react-icons/all-files/ai/AiOutlinePlayCircle';
import { BsPerson } from '@react-icons/all-files/bs/BsPerson';
import { FiShare } from '@react-icons/all-files/fi/FiShare';
import { FiGift } from '@react-icons/all-files/fi/FiGift';
import ShareModal from './ShareModal';

function DetailAside({ isLogin, lecture }) {
  const {
    subCategory,
    classLevel,
    creatorName,
    classTitle,
    price,
    likeCount,
    // classId,
  } = lecture;

  const [isHeartAdd, setIsHeartAdd] = useState(false);
  const [heartCount, setHeartCount] = useState(likeCount);
  const [isShareModal, setIsShareModal] = useState(false);
  const PRICE = Number(price).toLocaleString();

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
      bottom: 'auto',
      right: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      background: 'none',
      border: 'none',
    },
  };

  useEffect(() => {
    setHeartCount(likeCount);
  }, [likeCount]);

  const shareHandler = () => {
    setIsShareModal(prev => !prev);
  };

  const heartClick = () => {
    setIsHeartAdd(prev => !prev);
  };

  const heartAddHandler = () => {
    heartClick();

    if (!isHeartAdd) {
      setHeartCount(heartCount + 1);
      // fetch('/data/data_detail.json', {
      //   method: 'POST',
      //   body: JSON.stringify({
      //     classId: classId,
      //     likeCount: heartCount,
      //   }),
      // });
    } else if (isHeartAdd) {
      setHeartCount(heartCount - 1);
      // fetch('/data/data_detail.json', {
      //   method: 'DELETE',
      //   body: JSON.stringify({
      //     classId: classId,
      //     likeCount: heartCount,
      //   }),
      // });
    }
  };

  return (
    <Aside>
      <SubCate>
        {subCategory} ?? {creatorName}
      </SubCate>

      <ClassName>{classTitle}</ClassName>

      <Wrap>
        <GrayBox>????????????</GrayBox>
        <GrayBox2>?????? ?????? ??????</GrayBox2>
      </Wrap>

      <Wrap2>
        <ClassPrice>????????? ??????</ClassPrice>
        <Price>??? {PRICE}???</Price>
      </Wrap2>

      <Line>
        <Wrap3>
          <Wrap>
            <AiOutlinePlayCircle size="22" />
            <IconText>????????? ?????????</IconText>
          </Wrap>

          <Wrap>
            <BsPerson size="22" />
            <IconText>{classLevel} ??????</IconText>
          </Wrap>
        </Wrap3>
      </Line>

      <Wrap2>
        <GrayBtn aria-label="send Like" onClick={heartAddHandler}>
          {isHeartAdd ? (
            <AiFillHeart
              style={{ position: 'relative', top: '2px', color: 'red' }}
            />
          ) : (
            <AiOutlineHeart style={{ position: 'relative', top: '2px' }} />
          )}
          <IconText>{heartCount}</IconText>
        </GrayBtn>

        <GrayBtn aria-label="share this page" onClick={shareHandler}>
          <FiShare style={{ position: 'relative', top: '2px' }} />
          <IconText>????????????</IconText>
        </GrayBtn>

        <Modal
          isOpen={isShareModal}
          onRequestClose={shareHandler}
          style={modalDisplay}
        >
          <ShareModal setIsShareModal={setIsShareModal} />
        </Modal>

        <GrayBtn aria-label="gift">
          <FiGift style={{ position: 'relative', top: '2px' }} />
          <IconText>????????????</IconText>
        </GrayBtn>
      </Wrap2>

      {!isLogin ? (
        <Link to="/payment">
          <OrangeBtn aria-label="start this Class">????????? ????????????</OrangeBtn>
        </Link>
      ) : (
        <BtnWrap>
          <OrangeBtn aria-label="subscribe" shot>
            ????????????
          </OrangeBtn>
          <OrangeBtn aria-label="pay" shot>
            ????????????
          </OrangeBtn>
        </BtnWrap>
      )}
    </Aside>
  );
}

const Aside = styled.div`
  position: sticky;
  top: 140px;
  padding: 24px;
  width: 350px;
  max-height: 400px;
  border-radius: 3px;
  box-shadow: #dedede 0px 3px 3px 1px;
`;

const Wrap = styled.div`
  ${props => props.theme.variables.flex('center', 'left', 'center')}
`;

const Wrap2 = styled.div`
  ${props => props.theme.variables.flex('center', 'space-between', 'center')}
  margin-top: 25px;
`;

const Wrap3 = styled.div`
  ${props => props.theme.variables.flex('', 'center', '')}
  gap: 50px;
`;

const SubCate = styled.span`
  margin-bottom: 4px;
  font-size: 14px;
  line-height: 18px;
`;

const ClassName = styled.h1`
  margin: 8px 0;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
`;

const GrayBox = styled.div`
  margin-right: 5px;
  padding: 4px 6px;
  color: #f3213b;
  background-color: #f8f8f8;
  font-size: 11px;
  font-weight: 700;
`;

const GrayBox2 = styled(GrayBox)`
  color: #a2a2a2;
`;

const ClassPrice = styled(SubCate)`
  line-height: 14px;
`;

const Price = styled.h2`
  font-size: 18px;
  font-weight: 700;
`;

const Line = styled(Wrap3)`
  width: 100%;
  margin: 16px 0;
  padding: 20px 0;
  border: 1px solid #f8f8f8;
  border-width: 1px 0;
`;

const IconText = styled.span`
  margin-left: 5px;
  font-size: 14px;
`;

const GrayBtn = styled.button`
  width: 98px;
  height: 40px;
  background-color: #f4f4f4;
  color: #1a1a1a;
  font-size: 14px;
  border-radius: 3px;

  :hover {
    background-color: #e5e5e5;
    cursor: pointer;
  }
`;

const OrangeBtn = styled(GrayBtn)`
  width: ${props => (props.shot ? '148px' : '100%')};
  margin-top: 10px;
  background-color: #ff5600;
  color: white;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;

  :hover {
    background-color: #bd3f00;
  }
`;

const BtnWrap = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', '')}
`;

export default DetailAside;
