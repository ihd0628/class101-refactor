import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal/lib/components/Modal';
import { useParams } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import Carousel from './component/Carousel';
import DetailNav from './component/DetailNav';
import DetailIntro from './component/DetailIntro';
import DetailAside from './component/DetailAside';
import BASE_URL from '../../config';

function Detail() {
  const [isLogin, setIsLogin] = useState(false);
  const [isImgModal, setIsImgModal] = useState(false);
  const [lecture, setLecture] = useState({});
  const {
    classTitle,
    coverImage,
    coverGallery,
    review_images,
    classIntroduce,
    creatorName,
    profile_image,
    about_creater,
    content,
  } = lecture;

  const token = localStorage.getItem('Token');
  const params = useParams();
  const classId = params.id;

  //172.20.10.7:3000/classes/detail/${classId}

  useEffect(() => {
    fetch(`${BASE_URL}/classes/detail/${classId}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => {
        console.log('response : ', response);
        return response.json();
      })
      .then(result => {
        console.log('result : ', result);
        setLecture(result.classes);
      });
  }, []);

  if (!lecture) return <>loading...</>;

  return (
    <DtatilPage>
      <ImgWrap>
        <CoverImg src={coverImage} alt="메인이미지" />

        <SubImgWrap>
          <CoverGallery1 src={coverGallery?.[0]} alt="서브이미지" />

          <SubSubImgWrap>
            <CoverGallery2 src={coverGallery?.[1]} />
            <CoverGallery3 src={coverGallery?.[2]} />
            <ShowImg
              onClick={() => {
                setIsImgModal(prev => !prev);
              }}
            >
              +{coverGallery?.length}개의 이미지
            </ShowImg>
          </SubSubImgWrap>
        </SubImgWrap>
      </ImgWrap>

      <Modal
        isOpen={isImgModal}
        onRequestClose={() => {
          setIsImgModal(prev => !prev);
        }}
        style={modalDisplay}
      >
        <WrapBetween>
          <ModalOffBtn
            onClick={() => {
              setIsImgModal(prev => !prev);
            }}
          >
            <AiOutlineClose
              size="25"
              style={{ position: 'relative', top: '5px' }}
            />
            <OffTxt>닫기</OffTxt>
          </ModalOffBtn>
        </WrapBetween>
        <Carousel coverGallery={coverGallery} />
      </Modal>

      <Wrap>
        <DetailLeft>
          <DetailNav />
          <DetailIntro
            classId={classId}
            classTitle={classTitle}
            review_images={review_images}
            image={coverGallery}
            classIntroduce={classIntroduce}
            creatorName={creatorName}
            profile_image={profile_image}
            about_creater={about_creater}
            content={content}
          />
        </DetailLeft>

        <DetailAside isLogin={isLogin} lecture={lecture} classId={classId} />
      </Wrap>
    </DtatilPage>
  );
}

const modalDisplay = {
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 100,
  },
  content: {
    position: 'absolute',
    top: '60%',
    left: '50%',
    bottom: 'auto',
    right: 'auto',
    transform: 'translate(-50%, -50%)',
    padding: '0',
    background: 'none',
    border: 'none',
  },
};

const DtatilPage = styled.div`
  padding-top: 120px;
`;

const WrapBetween = styled.div`
  display: flex;
  justify-content: right;
  margin-right: 150px;
  margin-bottom: 10px;
`;

const ModalOffBtn = styled.button`
  background: none;
  color: white;
  cursor: pointer;

  :hover {
    color: rgba(200, 200, 200, 1);
  }
`;

const OffTxt = styled.span`
  margin-left: 5px;
  font-size: 20px;
  font-weight: 700;
`;

const Wrap = styled.div`
  ${props => props.theme.variables.flex('center', 'center', '')}
  margin: 30px 10px 0 0;
`;

const ImgWrap = styled.div`
  ${props => props.theme.variables.flex('center')}
`;

const CoverImg = styled.img`
  width: 655px;
  height: 520px;
  margin-right: 10px;
`;

const SubImgWrap = styled.div`
  width: 460px;
  display: flex;
  flex-wrap: wrap;
`;

const CoverGallery1 = styled.img`
  width: 100%;
  height: 255px;
  margin-bottom: 10px;
`;

const SubSubImgWrap = styled.div`
  position: relative;
  ${props => props.theme.variables.flex()};
`;

const CoverGallery2 = styled.img`
  width: 225px;
  height: 255px;
  margin-right: 10px;
`;

const CoverGallery3 = styled(CoverGallery2)`
  margin: 0;
`;

const ShowImg = styled.div`
  position: absolute;
  right: 0;
  width: 225px;
  height: 255px;
  color: ${props => props.theme.style.white};
  background-color: ${props => props.theme.style.black};
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  line-height: 255px;
  opacity: 0.8;
  cursor: pointer;
`;

const DetailLeft = styled.div`
  margin-right: 30px;
`;

export default Detail;
