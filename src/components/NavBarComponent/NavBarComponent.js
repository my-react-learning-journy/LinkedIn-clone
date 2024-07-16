import React from 'react'
import styled from 'styled-components'
import SearchComponent from './SearchComponent';
import TabMenuComponents from './TabMenuComponents';
import FeatureComponents from './FeatureComponents';

export default function NavBarComponent() {
  return (
    <Wrapper>
        <Div>
        <SearchComponent />
        <TabMenuComponents />
        <FeatureComponents />
        </Div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: white;
  height: 4.5rem;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  left: 13rem;
  width: 75%;
`;