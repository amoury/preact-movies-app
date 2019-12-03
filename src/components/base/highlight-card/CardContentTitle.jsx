import React from 'react'
import styled from 'styled-components';

const CardContentTitle = styled.h2`
  font-size: 40px;
  text-align: center;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.titleFont};
  font-weight: 400;
  letter-spacing: 0.08em;
  margin-block-end: 0;
`

export default (props) => {
  return (
    <CardContentTitle>
     {props.title} 
    </CardContentTitle>
  )
}

