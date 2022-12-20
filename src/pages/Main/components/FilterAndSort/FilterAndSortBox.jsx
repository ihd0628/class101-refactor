import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSortDown } from 'react-icons/fa';
import FilterAndSortModal from './FilterAndSortModal';

function FilterAndSortBox({ title, list, setSelectTitle, selectTitle }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [boxName, setBoxName] = useState(title);

  return (
    <>
      <CategoryWrap onClick={() => setIsOpenModal(prev => !prev)}>
        <CategoryName>{boxName}</CategoryName>
        <FaSortDown />
      </CategoryWrap>
      <FilterAndSortModal
        mainModalOpen={isOpenModal}
        setMainModalOpen={setIsOpenModal}
        title={title}
        list={list}
        setSelectTitle={setSelectTitle || null}
        selectTitle={selectTitle || null}
        setBoxName={setBoxName}
      />
    </>
  );
}

const CategoryWrap = styled.button`
  margin-right: 15px;
  padding: 10px 15px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  &:hover {
    border: 1px solid #ff5600;
    color: #ff5600;
  }
`;

const CategoryName = styled.span`
  margin-right: 7px;
`;

export default FilterAndSortBox;
