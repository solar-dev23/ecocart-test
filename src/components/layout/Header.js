import React from "react";
import styled from "styled-components";
import { Colors } from "../../utils/colors";
import Typography from "../common/Typography";
import Search from "../common/Search";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5em;
  background-color: white;
  border-bottom: 1px solid lightgray;
  height: 80px;
  position: relative;
`;

const SearchWrapper = styled.div`
  display: flex;
  margin-left: 5em;
`;

const LogoWrapper = styled.div`
  position: absolute;
  left: 2em;
`;

function Header(props) {
  const { searchInput, onSearch } = props;

  return (
    <Wrapper>
      <LogoWrapper>
        <Typography variant="h1" color={Colors.PRIMARY}>
          Ecocart Test
        </Typography>
      </LogoWrapper>
      <SearchWrapper>
        <Search value={searchInput} onChange={onSearch} />
      </SearchWrapper>
    </Wrapper>
  );
}

export default Header;
