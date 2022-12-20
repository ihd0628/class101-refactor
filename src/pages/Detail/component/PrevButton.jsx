import React from 'react';
import styled from 'styled-components';

function PrevButton(props) {
  const { className, onClick } = props;
  return (
    <Prev className={className} onClick={onClick}>
      <img src="/images/left-arrow.png" alt="이전 페이지" />
    </Prev>
  );
}

const Prev = styled.div`
  width: 70px;
  height: 70px;

  img {
    width: 100%;
  }

  :hover {
    opacity: 0.5;
  }
`;

export default PrevButton;
