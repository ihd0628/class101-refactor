import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlinePhotograph } from 'react-icons/hi';
import BASE_URL from '../../../config';

function ReviewModal({
  classId,
  classTitle,
  closeModal,
  selectModal,
  setReviews,
  registTxt,
  setTotalReview,
  editReviewId,
  editUserId,
}) {
  const [imgFile, setimgFile] = useState();
  const [imgSrc, setImgSrc] = useState(registTxt?.image_url);
  const [reviewTxt, setReviewTxt] = useState('');
  const [editTxt, setEditTxt] = useState(registTxt?.content);

  const token = localStorage.getItem('Token');

  const previewHandle = e => {
    e.preventDefault();
    if (e.target.files.length) {
      const imgTarget = e.target.files[0];
      const fileReader = new FileReader();
      fileReader.readAsDataURL(imgTarget);
      fileReader.onload = e => {
        setImgSrc(e.target.result);
      };
      setimgFile(e.target.files[0]);
    } else {
      setImgSrc('');
    }
  };

  const removeHandle = e => {
    e.preventDefault();
    setImgSrc('');
  };

  const onSubmit = e => {
    e.preventDefault();

    console.log('룰루');

    const formData = new FormData();

    formData.append('classId', classId);
    formData.append('image', imgFile);
    formData.append('content', reviewTxt);

    fetch(`${BASE_URL}/review`, {
      method: 'POST',
      headers: {
        Authorization: token,
        enctype: 'multiple/form-data',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'Create Review Successfully') {
          closeModal();
          setTotalReview(result.review);
        } else {
          console.log(result);
          alert('리뷰 등록에 실패했습니다');
        }
      });
  };

  const onEdit = e => {
    e.preventDefault();

    console.log('editReviewId : ', editReviewId);

    const formData = new FormData();
    formData.append('reviewId', editReviewId);
    formData.append('classId', classId);
    formData.append('image', imgFile);
    formData.append('userId', editUserId);
    formData.append('content', editTxt);

    fetch(`${BASE_URL}/review`, {
      method: 'PATCH',
      headers: {
        Authorization: token,
        enctype: 'multiple/form-data',
      },
      body: formData,
    })
      .then(response => response.json())
      .then(result => console.log(result));
  };

  return (
    <ModalChang>
      <LetsReview>{selectModal ? '글 작성하기' : '글 수정하기'}</LetsReview>

      <form>
        <Wrap>
          <UserClass>
            <UserImg />
            <ClassName>{classTitle}</ClassName>
          </UserClass>

          <PhotoLabel htmlFor="inputFile">
            <HiOutlinePhotograph
              size="20"
              style={{ position: 'relative', top: '5px', marginRight: '3px' }}
            />
            {selectModal ? '사진 첨부' : '사진 수정'}
          </PhotoLabel>
          <input
            id="inputFile"
            type="file"
            name="reviewImage"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={previewHandle}
          />
        </Wrap>

        <WriteZone>
          {imgSrc && (
            <ImgPreview>
              <ImgRemoveBtn onClick={removeHandle}>x</ImgRemoveBtn>
              <img src={imgSrc} alt="preview-img" />
            </ImgPreview>
          )}

          {selectModal ? (
            <Textarea
              type="text"
              name="reviewText"
              maxLength={201}
              placeholder="무단 홍보, 비방 글은 삭제 될 수 있습니다."
              value={reviewTxt}
              onChange={e => setReviewTxt(e.target.value)}
            />
          ) : (
            <Textarea
              type="text"
              name="editText"
              maxLength={201}
              value={editTxt}
              onChange={e => setEditTxt(e.target.value)}
            />
          )}
        </WriteZone>
      </form>

      <CountTxt>
        {selectModal ? reviewTxt?.length : editTxt?.length} / 200
      </CountTxt>

      {selectModal ? (
        <SaveBtn onClick={onSubmit}>저장하기</SaveBtn>
      ) : (
        <SaveBtn onClick={onEdit}>수정하기</SaveBtn>
      )}
    </ModalChang>
  );
}

const Wrap = styled.div`
  ${prop => prop.theme.variables.flex('', 'space-between', '')}
`;

const ModalChang = styled.div`
  width: 640px;
  padding: 25px;
  background-color: white;
`;

const LetsReview = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const UserImg = styled.div`
  width: 26px;
  height: 26px;
  background-color: black;
  border-radius: 50%;
`;

const ClassName = styled.div`
  font-size: 14px;
`;

const UserClass = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PhotoLabel = styled.label`
  width: 105px;
  height: 40px;
  margin-bottom: 20px;
  background-color: #f8f8f8;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
`;

const ImgRemoveBtn = styled.button`
  position: absolute;
  margin: 2px 2px 0 80px;
  padding-bottom: 3px;
  background: none;
  background-color: rgba(140, 140, 140, 0.5);
  color: white;
  line-height: 15px;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    box-shadow: 1px 1px 2px black;
  }
`;

const ImgPreview = styled.div`
  ${prop => prop.theme.variables.flex('', 'center', '')}
  width: 100px;
  height: 100px;
  margin: 15px 0;
  box-shadow: 1px 1px 1px 2px #ededed;
  overflow: hidden;

  img {
    height: 100%;
  }
`;

const WriteZone = styled.div`
  width: 590px;
`;

const Textarea = styled.textarea`
  width: 590px;
  height: 200px;
  padding: 16px;
  font-size: 17px;
  line-height: 27px;
  letter-spacing: -0.5px;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  resize: none;
  overflow: scroll;

  &:focus {
    outline: none;
  }
`;

const CountTxt = styled.p`
  ${prop => prop.theme.variables.flex('', 'right', '')}
  margin-top: 10px;
  font-size: 14px;
`;

const SaveBtn = styled.button`
  width: 100%;
  padding: 15px 0;
  margin-top: 30px;
  background-color: #ff5600;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
`;

export default ReviewModal;
