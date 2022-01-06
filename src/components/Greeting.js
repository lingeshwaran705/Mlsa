import React from "react";
import styled from "styled-components";

function Greeting() {
  const date = new Date();
  return <Wrap>{JSON.stringify(date)}</Wrap>;
}

export default Greeting;

const Wrap = styled.div`
  color: white;
`;
