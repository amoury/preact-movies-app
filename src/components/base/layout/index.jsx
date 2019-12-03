import React from 'react'
import styled from 'styled-components';
import Header from '../header';

const Layout = styled.div`
  background: ${({ theme }) => theme.primary };
  display: flex;
  flex-direction: column;
  `
  
  const Main = styled.div`
  min-height: 100vh;
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
