import React from 'react'
import styled from 'styled-components'

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.textColor};
  font-size: 35px;
  font-family: ${({ theme }) => theme.titleFont};
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.11em;
  margin-bottom: 50px;
`

function Title({ title }) {
  return (
    <SectionTitle>
      {title}      
    </SectionTitle>
  )
}

Title.displayName = 'Title'

export default Title
