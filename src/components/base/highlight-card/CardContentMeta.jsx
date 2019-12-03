import React  from 'react'
import styled from 'styled-components';

const CardContentMeta = styled.div`
  display: flex;
  align-items: center;
`

const Seperator = styled.div`
  width: 5px;
  height: 5px;
  background: ${({ theme }) => theme.textColor};
  border-radius: 50%;
  margin: 0 10px;
`

export default () => {
  return (
    <CardContentMeta>
      <p>2018</p>
      <Seperator /> 
      <p>Action, Adventure, Drama</p>
    </CardContentMeta>
  )
}

