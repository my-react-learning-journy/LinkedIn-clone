import React from 'react'
import styled from 'styled-components';
import NavBarComponent from '../components/NavBarComponent/NavBarComponent';
import HomeComponent from '../components/HomeComponents/HomeComponent';

export default function HomePage() {
  return (
    <Wrapper>
        <NavBarComponent />
        <HomeComponent />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
`;
