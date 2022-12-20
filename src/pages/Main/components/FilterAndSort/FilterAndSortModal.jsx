import React from 'react';
import Modal from 'react-modal';
import { useSearchParams } from 'react-router-dom';
import * as style from './ModalStyle';

function FilterAndSortModal({
  mainModalOpen,
  setMainModalOpen,
  title,
  list,
  selectTitle,
  setSelectTitle,
  setBoxName,
}) {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleMainCategory = e => {
    setSelectTitle(e.target.title);
    setBoxName(e.target.innerText);
    searchParams.delete('subCategory');
    searchParams.set('mainCategory', Number(e.target.title) + 1);
    setSearchParams(searchParams);
    setMainModalOpen(prev => !prev);
  };

  const handleSubCategory = e => {
    setBoxName(e.target.innerText);
    searchParams.delete('mainCategory');
    searchParams.set('subCategory', Number(e.target.title));
    setSearchParams(searchParams);
    setMainModalOpen(prev => !prev);
  };

  const sortByHighPrice = e => {
    setBoxName(e.target.innerText);
    searchParams.set('sort', 'costHigh');
    setSearchParams(searchParams);
    setMainModalOpen(prev => !prev);
  };

  const sortByLowPrice = e => {
    setBoxName(e.target.innerText);
    searchParams.set('sort', 'costLow');
    setSearchParams(searchParams);
    setMainModalOpen(prev => !prev);
  };

  const sortByLike = e => {
    setBoxName(e.target.innerText);
    searchParams.set('sort', 'likeHigh');
    setSearchParams(searchParams);
    setMainModalOpen(prev => !prev);
  };

  return (
    <Modal
      isOpen={mainModalOpen}
      ariaHideApp={false}
      onRequestClose={() => setMainModalOpen(prev => !prev)}
      style={style.mainModal}
      preventScroll
      onAfterOpen={() => {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = '17px';
      }}
      onAfterClose={() => {
        document.body.style.overflow = 'scroll';
        document.body.style.paddingRight = '0';
      }}
    >
      <style.ModalCloseBtn onClick={() => setMainModalOpen(prev => !prev)}>
        x
      </style.ModalCloseBtn>
      <style.ModalContainer>
        <style.ModalTitle>{title}</style.ModalTitle>
        {title === '메인 카테고리' &&
          list &&
          list.map(data => (
            <style.CategoryList
              key={data.id}
              title={data.id}
              onClick={handleMainCategory}
            >
              {data.title}
            </style.CategoryList>
          ))}

        {title === '서브 카테고리' &&
          list[selectTitle]?.list.map(data => {
            return (
              <style.CategoryList
                key={data.categoryId}
                title={data.categoryId}
                onClick={handleSubCategory}
              >
                {data.name}
              </style.CategoryList>
            );
          })}

        {title === '정렬' && (
          <>
            <style.CategoryList onClick={sortByLike}>인기순</style.CategoryList>
            <style.CategoryList onClick={sortByHighPrice}>
              가격 높은순
            </style.CategoryList>
            <style.CategoryList onClick={sortByLowPrice}>
              가격 낮은순
            </style.CategoryList>
          </>
        )}
      </style.ModalContainer>
    </Modal>
  );
}

export default FilterAndSortModal;
