import React from 'react'
import styled from 'styled-components'

const MovieIcon = styled.svg`
  fill: ${({ theme }) => theme.textColor }
  max-height: 30px;
  max-width: 30px;
`

export default () => {
  return (
    <MovieIcon viewBox="0 0 100 100" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
      <path d="M89.8 76.8h-22c8.9-7.5 14.1-19.5 12.1-32.4C77.3 28.2 63.6 15.9 47.3 15c-20.5-1-37.4 15.4-37 35.7C10.6 69.9 26.7 85 45.9 85h43.8v-8.2zM26.8 59c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm18.4 18.5c-5 0-9-4-9-9s4-9 9-9 9 4 9 9c0 4.9-4 9-9 9zM39.8 50c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5-2.5 5.5-5.5 5.5-5.5-2.5-5.5-5.5zm5.4-9.5c-4.9 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm9.5 9.5c0-5 4-9 9-9s9 4 9 9-4 9-9 9-9-4-9-9z"/>
    </MovieIcon>      
  )
}

