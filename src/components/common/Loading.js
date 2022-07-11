import React from "react";
import styled from "styled-components";
import { Colors } from "../../utils/colors";

const Loader = styled.div`
  position: absolute;
  left: 50%;
  top: 20%;
  z-index: 1;
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-radius: 50%;
  border-top: 4px solid ${Colors.PRIMARY};
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function Loading() {
  return <Loader></Loader>;
}

export default Loading;
