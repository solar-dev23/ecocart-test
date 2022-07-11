import React from "react";
import styled from "styled-components";
import { Colors } from "../../utils/colors";

const Input = styled.input`
  min-height: 50px;
  min-width: 400px;
  border-radius: 4px;
  border: 1px solid ${Colors.BORDER_COLOR};
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 8%);
  padding: 1em;
`;

function Search(props) {
  const { value, onChange } = props;

  return (
    <Input
      type="search"
      placeholder="Search for artists"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Search;
