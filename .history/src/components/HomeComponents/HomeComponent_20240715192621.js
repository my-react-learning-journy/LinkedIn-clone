import React from 'react'
import styled from "styled-components";
import MyDetailsComponents from './MyDetailsComponent/MyDetailsComponents';
import FeedComponents from './FeedComponent/FeedComponents';
import AddToFeedComponents from './AddToFeedComponent/AddToFeedComponents';

export default function HomeComponent() {
  return (
    <Wrapper>
        <MyDetailsComponents />
        <FeedComponents />
        <div>Add to feed</div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
`;

