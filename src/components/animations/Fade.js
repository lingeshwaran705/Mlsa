import React from "react";
import styled, { keyframes } from "styled-components";

function Fade(props) {
  return <Container>{props.text}</Container>;
}

export default Fade;

const fade = keyframes`
    to{
        opacity:1;
        transform: translate(0);
    }
`;

const Container = styled.div`
  font-family: "Roboto Slab", serif;
  width: 100%;
  color: white;
  text-align: center;
  font-size: 25px;
  padding-top: 10px;
  opacity: 0;
  transform: translateY(30px);
  animation: ${fade} 2s ease 4s forwards;
`;
