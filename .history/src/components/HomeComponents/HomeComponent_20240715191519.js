import React from 'react'
import styled from "styled-components";

export default function HomeComponent() {
  return (
    <div>
        <div>My Details</div>
        <div>Feed</div>
        <div>Add to feed</div>
    </div>
  )
}

const Wrapper = styled.div`
    display: flex;
`;
