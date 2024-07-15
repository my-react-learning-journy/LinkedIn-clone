import React from 'react'
import styled from "styled-components";
import 

export default function HomeComponent() {
  return (
    <Wrapper>
        <div>My Details</div>
        <div>Feed</div>
        <div>Add to feed</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
`;

