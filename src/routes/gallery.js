import React, {useContext} from 'react'
import Layout from '../components/base/layout'
import {Container} from 'react-grid-system';

import {HomeContext} from '../data-contexts/HomeContext';

const GalleryPage = (props) => {
  
  const contextData = useContext(HomeContext);
  
  console.log('props from Gallery >> ', contextData);

  
  return (
    <Layout>
      <Container>
        Gallery Page
      </Container>
    </Layout>
  )
}

export default GalleryPage
