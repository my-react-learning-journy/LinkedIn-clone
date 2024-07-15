import React from "react";
import styled from "styled-components";

export default function tabMenuComponents() {
    return (
      <Wrapper>
        <div>Home</div>
        <div>Network</div>
        <div>Job</div>
        <div>Messaging</div>
        <div>Notification</div>
        <div>Me</div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  position: absolute;
  width: 60%;
  display:flex;
  justify-content: space-around;
  left: 20rem;
`;