import React from "react";
import styled from "styled-components";

export default function ProfileReview() {
    return (
      <Wrapper>
        <div style={{ height: "20%" }}>Cover</div>
        <div style={{ height: "40%" }}>Profile Details</div>
        <div style={{ height: "20%" }}>Insights</div>
        <div style={{ height: "15%" }}>save</div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;