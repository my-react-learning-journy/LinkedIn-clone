import React from "react";
import {
  FaHome,
  FaUsers,
  FaBriefcase,
  FaComment,
  FaBell,
} from "react-icons/fa";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom';

export default function TabMenuComponents() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <Wrapper>
      <Tabs colorScheme="black">
        <TabList>
          <Tab>
            <Div onClick={() => handleNavigate("/")}>
              <FaHome size={25} />
              Home
            </Div>
          </Tab>
          <Tab>
            <Div onClick={() => handleNavigate("/network")}>
              <FaUsers size={25} />
              <Span>Network</Span>
            </Div>
          </Tab>
          <Tab>
            <Div>
              <FaBriefcase size={24} />
              <Span>Job</Span>
            </Div>
          </Tab>
          <Tab>
            <Div>
              <FaComment size={22} />
              <Span>Messaging</Span>
            </Div>
          </Tab>
          <Tab>
            <Div>
              <FaBell size={22} /> <Span>Notification</Span>
            </Div>
          </Tab>
          <Tab>
            <Div>Me</Div>
          </Tab>
        </TabList>
        {/* <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
        </TabPanels> */}
      </Tabs>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 60%;
  display: flex;
  justify-content: right;
  left: 16.5rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 17%;
  opacity: 0.8;
  :hover {
    cursor: auto;
    opacity: 1;
    color: black;
  }
`;

const Span = styled.span`
  :hover {
    opacity: 1;
    cursor:auto;
    color: black ;
  }
`;
