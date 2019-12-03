import React from 'react'
import styled from 'styled-components'

const StyledPreTitle = styled.span`
  color: ${({ theme }) => theme.secondary };
  text-transform: uppercase;
  display: block;
  text-align: center;
  margin: 20px 0 50px 0;
  font-family: ${({theme}) => theme.titleFont};
  letter-spacing: 0.08em;
`

const PreTitle =  ({ pretitle }) => {
  return (
    <StyledPreTitle>
      {pretitle}
    </StyledPreTitle>
  )
}

PreTitle.displayName = 'Pretitle'

export default PreTitle


