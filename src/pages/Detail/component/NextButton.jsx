import React from 'react';
import styled from 'styled-components';

function NextButton(props) {
  const { className, onClick } = props;
  return (
    <Next className={className} onClick={onClick}>
      <img src="/images/right-arrow.png" alt="다음 페이지" />
    </Next>
  );
}

const Next = styled.div`
  width: 70px;
  height: 70px;

  :hover {
    opacity: 0.5;
  }

  img {
    width: 100%;
  }
`;
export default NextButton;
