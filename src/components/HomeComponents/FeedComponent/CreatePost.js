import React from "react";
import styled from "styled-components";

export default function createPost() {
    return <Wrapper>
        <Post>
            <div style={{position:"absolute" , left:"0rem"}}>Image</div>
            <div style={{position:"absolute", left:"5rem"}}>Post</div>
        </Post>
        <Media>
            <div>Media</div>
            <div>Expertise</div>
            <div>Article</div>
        </Media>
    </Wrapper>;
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Post = styled.div`
    display: flex;
    position: relative;
    height: 2rem;
    width: 100%;
    background-color: orange;
`;

const Media = styled.div`
display: flex;
height: 3rem;
background-color: red;
justify-content: space-between;
`;