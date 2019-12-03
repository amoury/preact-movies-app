import React from 'react'
import styled from 'styled-components'

const TvIcon = styled.svg`
  fill: ${({ theme }) => theme.textColor }
  max-height: 30px;
  max-width: 30px;
`

export default () => {
  return (
    <TvIcon viewBox="0 0 100 100" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
      <path d="M95 75.526v-59.84H5v59.841h42.864v4.514H37.771v4.274H62.23V80.04H52.139v-4.514H95zM9.274 19.96h81.451v51.292H9.274V19.96z"/>
    </TvIcon> 
  )
}
