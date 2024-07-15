import React from 'react'
import styled from "styled-components";
import MyDetailsComponents from './MyDetailsComponent/MyDetailsComponents';
import FeedComponents from './FeedComponent/FeedComponents';

export default function HomeComponent() {
  return (
    <Wrapper>
        <MyDetailsComponents />
        <div>Feed</div>
        <div>Add to feed</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
`;

