import React from 'react';
import CreatePost from './CreatePost';
import PostFeed from './PostFeed';
import styled from 'styled-components';

export default function FeedComponents() {
    return (
        <Wrapper>
            <CreatePost />
            <PostFeed />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    // background-color: red;
    width: 50%;
    height: 60rem;

    display: flex;
    flex-direction: column;
`;