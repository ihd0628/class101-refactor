import React from 'react';
import styled from 'styled-components';

function ClassListSearchBar() {
  return (
    <SearchBar>
      <SearchInput placeholder="상품명 검색" />
      <SearchIcon
        alt="search product name"
        src="https://cdn-icons-png.flaticon.com/512/54/54481.png"
      />
    </SearchBar>
  );
}

const SearchBar = styled.div`
  ${props => props.theme.variables.flex('', 'space-between', 'center')}
  width: 100%;
  padding: 0 10px;
  height: 40px;
  background-color: #f2f2f2;
  border-radius: 5px;
`;

const SearchInput = styled.input`
  padding-left: 5px;
  background-color: transparent;
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
`;

const SearchIcon = styled.img`
  height: 50%;
  cursor: pointer;
`;

export default ClassListSearchBar;
