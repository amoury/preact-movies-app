import React from 'react';
import styled from 'styled-components';
import SearchIcon from './SearchIcon';


const StyledSearchBar = styled.div`
  background: ${({ theme }) => theme.primaryDark}
  color: ${({ theme }) => theme.textColor} 
  padding: 20px 0;
`

const InputRow = styled.div`
  display: flex;  
  margin-left: 100px;
`

const Input = styled.input`
  color: ${({ theme }) => theme.textColor} 
  border: none;
  margin-left: 20px;
  background: transparent;
  font-size: 20px;
  width: 100%;

  ::placeholder {
    color: #878B94; 
  }
`

const SearchBar = () => {
  return (
    <StyledSearchBar>
     <InputRow>
      <SearchIcon />
      <Input type="text" name="search" id="search-field" placeholder="Search movies, tv shows, actors ..." />
     </InputRow>      
    </StyledSearchBar>
  )
}

export default SearchBar
