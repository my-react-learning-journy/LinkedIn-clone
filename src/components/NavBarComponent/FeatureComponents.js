import React from "react";
import styled from "styled-components";

export default function FeatureComponents() {
    return (
      <Wrapper>
        <div>For Business</div>
        <div>My Premium</div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  position: absolute;
  left: 60rem;
  display: flex;
  justify-content: space-between;
`;