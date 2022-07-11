import React from "react";
import styled from "styled-components";
import { Colors } from "../../utils/colors";

const StyledButton = styled.button`
  background-color: ${Colors.PRIMARY};
  color: white;
  font-size: 1em;
  font-weight: bold;
  width: 200px;
  height: 50px;
  border-radius: 12px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
    box-shadow: 3px 2px 22px 1px rgba(0, 0, 0, 0.24);
  }
`;

function Button(props) {
  const { children, onClick } = props;

  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
