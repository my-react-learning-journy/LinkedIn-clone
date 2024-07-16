import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function SearchComponent() {

  const [searchBarLen, setSearchBarLen] = useState(25);

    const handleSearchBar = (e) => {
      e.preventDefault();
      console.log("clicked " + searchBarLen);
      setSearchBarLen(40);
    }
    
    const resetHandler = (event) => {
      console.log(event.target.className);
      if (event.target.className !== "chakra-input css-2onohj") {
        setSearchBarLen(25);
      } else {
        setSearchBarLen(40);
      }
    };

    useEffect(() => {
      document.body.addEventListener("click", resetHandler)
      // return () => {
      //   document.body.removeEventListener("click", resetHandler);
      // }
    }, []);

    return (
      <Wrapper>
        <Div>
          <Logo>
            <img
              alt="linkedin"
              src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
            />
          </Logo>
          <Search>
            <InputGroup
              id="search"
              style={{ top: "1.5rem" }}
              onClick={handleSearchBar}
            >
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              >
                <FaSearch />
              </InputLeftElement>

              <Input
                htmlSize={searchBarLen}
                width="auto"
                placeholder="Search"
              />
            </InputGroup>
          </Search>
        </Div>
      </Wrapper>
    );
}

const Wrapper = styled.div`
    position: absolute;
    width: 40%;
    display: flex;
`;

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const Search = styled.div`
  position: absolute;
  width: 80%;
  left: 3rem;
`;

const Logo = styled.div`
  position: absolute;
 width: 2.5rem;
 height: 2.5rem;
 top: 0.5rem;
`;