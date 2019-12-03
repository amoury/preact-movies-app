import React from 'react'
import styled from 'styled-components';
import CardContentTitle from './CardContentTitle';
import CardContentMeta from './CardContentMeta';

const CardContentDetails = styled.div`
  color: ${({theme}) => theme.textColor};
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default (props) => {
  return (
    <CardContentDetails>
      <CardContentTitle title={props.cardTitle} />
      {props.metaInfo && <CardContentMeta />}
    </CardContentDetails>
  )
}

