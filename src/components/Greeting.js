import React from "react";
import styled from "styled-components";

function Greeting() {
  const date = new Date();
  return <Greeting>{JSON.stringify(date)}</Greeting>;
}

export default Greeting;

const Wrap = styled.div`
  color: white;
`;
