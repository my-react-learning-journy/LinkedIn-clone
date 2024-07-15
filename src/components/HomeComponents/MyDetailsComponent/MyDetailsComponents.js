import React from 'react';
import ProfileReview from './ProfileReview';
import RecentActivity from './RecentActivity';
import styled from 'styled-components'

export default function MyDetailsComponents() {
  return (
    <Wrapper>
      <ProfileReview />
      <RecentActivity />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 20%;
  background-color: green ;
  height: 60rem;
  display: flex;
  flex-direction: column;
`;