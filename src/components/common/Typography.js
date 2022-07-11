import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${(props) => props.color || "black"};
  margin: 0;
`;

const H2 = styled.h2`
  color: ${(props) => props.color || "black"};
`;

const H3 = styled.h3`
  color: ${(props) => props.color || "black"};
`;

const H4 = styled.h4`
  color: ${(props) => props.color || "black"};
`;

const Body1 = styled.span`
  color: ${(props) => props.color || "black"};
  margin: 0;
`;

const Body2 = styled.span`
  color: ${(props) => props.color || "black"};
`;

function Typography(props) {
  const { variant, color, children } = props;

  return (
    <>
      {variant === "h1" && <H1 color={color}>{children}</H1>}
      {variant === "h2" && <H2 color={color}>{children}</H2>}
      {variant === "h3" && <H3 color={color}>{children}</H3>}
      {variant === "h4" && <H4 color={color}>{children}</H4>}
      {variant === "body1" && <Body1 color={color}>{children}</Body1>}
      {variant === "body2" && <Body2 color={color}>{children}</Body2>}
    </>
  );
}

export default Typography;
