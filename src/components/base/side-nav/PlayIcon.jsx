import React from 'react'
import styled from 'styled-components';

const PlayIcon = styled.svg`
  fill: ${({ theme }) => theme.textColor }
  max-width: 40px;
  max-height: 40px;
`

export default () => {
  return (
    <PlayIcon viewBox="0 0 100 100" height="100" width="100" xmlns="http://www.w3.org/2000/svg">
      <path style="text-indent:0;text-transform:none;block-progression:tb" d="M50 9C27.38 9 9 27.38 9 50s18.38 41 41 41 41-18.38 41-41S72.62 9 50 9zm0 4c20.458 0 37 16.542 37 37S70.458 87 50 87 13 70.458 13 50s16.542-37 37-37zm-7.875 18c-2.176.052-4.07 1.909-4.125 4.562v28.844c.074 3.538 3.42 5.685 6.344 4l23.5-14.468C69.124 53.148 70 51.697 70 50s-.876-3.147-2.156-3.937l-23.5-14.47c-.731-.42-1.494-.61-2.219-.593z" overflow="visible" color="#000"/>
    </PlayIcon> 
  )
}

