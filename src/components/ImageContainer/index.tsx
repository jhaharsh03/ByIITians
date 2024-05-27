import React from 'react';
import styled from 'styled-components';
interface Props {
    src: string;
    alt?: string;
  }
  
  const Container = styled.div`
    position: relative;
    width: 25%;
    padding-top: 56.25%; /* 16:9 Aspect Ratio */
    overflow: hidden;
    background-color: #f0f0f0;
  `;
  
  const Image = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;
  
  const ResponsiveImageContainer: React.FC<Props> = ({ src, alt = '' }) => {
    return (
      <Container>
        <Image src={src} alt={alt} />
      </Container>
    );
  };
  
  export default ResponsiveImageContainer;