import React from 'react'
import styled from 'styled-components';
import CardContentDetails from './CardContentDetails';

const HighlightCard = styled.div`
  background-image: url('https://source.unsplash.com/random/800x600');
  height: ${ props => props.height ? props.height : `360`}px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
`

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.primary};
  opacity: 0.7;
`

export const HighlightCardContext = React.createContext();

export default (props) => {
  return (
    <HighlightCard height={props.height}>
      <BackgroundOverlay />  
      <CardContentDetails {...props} />
    </HighlightCard>
  )
}

