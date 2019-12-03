import React from 'react'
import styled from 'styled-components';
import PreTitle from './PreTitle';
import Title from './Title';


const StyledSection = styled.section`
  margin-top: 100px;
`

class Section extends React.Component {
  static PreTitle = PreTitle;
  static Title = Title;

  render() {
    const { children, title, pretitle } = this.props;
    return (
      <StyledSection>
        {pretitle && <Section.PreTitle pretitle={pretitle} />}
        {title && <Section.Title title={title} />}
        {children}
      </StyledSection>
    )
  }  
}

export default Section;
