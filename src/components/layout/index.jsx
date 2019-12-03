import React from 'react'
import styled from 'styled-components';
import Header from '../header';

const Layout = styled.div`
  background: ${({ theme }) => theme.primary };
`

const Main = styled.div`
  padding-left: 100px;
  min-height: 100vh;
  width: 100vw;
  color: ${({ theme }) => theme.textColor};
`

export default ({ children }) => {
  return (
    <Layout>
     <Header />
     <Main>
       {children}
     </Main>
    </Layout>
  )
}
