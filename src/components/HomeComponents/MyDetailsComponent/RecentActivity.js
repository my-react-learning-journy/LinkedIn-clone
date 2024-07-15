import React from "react";
import styled from "styled-components";

export default function RecentActivity() {
  return (
    <Wrapper>
      <div style={{ height: "30%" }}>Resents</div>
      <div style={{ height: "30%" }}>Groups</div>
      <div style={{ height: "30%" }}>Events</div>
      <div style={{ height: "10%" }}>Discover More</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;