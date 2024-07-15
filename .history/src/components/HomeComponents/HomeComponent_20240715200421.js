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
        <AddToFeedComponents />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 75%;
    margin: 1rem auto;
`;

