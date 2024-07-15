import React from "react";
import styled from "styled-components";

export default function SearchComponent() {
    return (
      <Wrapper>
        <div>
          <p>Logo</p>
        </div>
        <div>
          <input type="text" placeholder="Search" />
        </div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
    position: absolute;
    width: 27%;
    display: flex;
    justify-content: space-between;
`;