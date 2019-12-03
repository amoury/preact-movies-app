import React, {useContext} from 'react'
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'preact-router/match';
import styled from 'styled-components';

import HighlightCard from '../base/highlight-card';
import Section from '../base/section';

import { HomeContext } from '../../data-contexts/HomeContext';


const StyledRow = styled(Row)`
  margin-top: 30px;
`


const HomeContent = () => {
  const homeContext = useContext(HomeContext);
  const {data: { comedyMovies }} = homeContext;

  if(!homeContext) return null;
  
  return (
    <Container>
      <Section>
        <Row>
          <Col sm={12}>
            <HighlightCard cardTitle="Hello" metaInfo={true} />
          </Col>
        </Row>
      </Section>
      <Section 
        pretitle="Handpicked Selection"
        title="Award-winning movies you'll love"
      >
        <Row>
          <Col sm={3}>
            <Link href="/gallery/top-20-comedy">
              <HighlightCard cardTitle="Top 20 Comedy Movies" height={250} />
            </Link>
          </Col>
          <Col sm={3}>
            <HighlightCard height={250} />
          </Col>
          <Col sm={6}>
            <HighlightCard height={250} />
          </Col>
        </Row>
        <StyledRow>
          <Col sm={6}>
            <HighlightCard height={250} />
          </Col>
          <Col sm={3}>
            <HighlightCard height={250} />
          </Col>
          <Col sm={3}>
            <HighlightCard height={250} />
          </Col>
        </StyledRow>
      </Section>
    </Container>
  )
}

export default HomeContent;