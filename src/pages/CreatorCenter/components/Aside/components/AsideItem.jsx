import React from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';

function AsideItem({ item: { name, src, flag } }) {
  const [, setSearchParams] = useSearchParams();

  const goToFlag = () => {
    if (flag) {
      setSearchParams('');
    }
  };

  return (
    <ItemContainor onClick={goToFlag}>
      <Icon alt={name} src={src} />
      <Text>{name}</Text>
    </ItemContainor>
  );
}

const ItemContainor = styled.div`
  ${props => props.theme.variables.flex('row', 'flex-start', 'center')}
  height:70px;
  padding: 25px 0px 25px 24px;
  cursor: pointer;
`;

const Icon = styled.img`
  height: 100%;
`;

const Text = styled.div`
  margin-left: 15px;
  padding-top: 3px;
  font-size: 16px;
`;

export default AsideItem;
