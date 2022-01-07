import React from "react";
import styled, { keyframes } from "styled-components";

function Logo({ text }) {
  return (
    <>
      <Container>
        <Inner>{text}</Inner>
      </Container>
    </>
  );
}

export default Logo;

const slide = keyframes`
    to{
        left:0%;
    }
`;

const Grow = keyframes`
    to{
        height:100%;
    }
`;

const Container = styled.div`
  width: 80%;
  height: 40px;
  border-height: 4px;
  position: absolute;
  z-index: 1;
  top: 20px;
  left: 20px;
  overflow: hidden;
  &::after {
    content: "";
    width: 4px;
    height: 0;
    background: dodgerblue;
    display: block;
    border-radius: 20px;
    animation: ${Grow} 500ms ease-in-out 500ms forwards;
  }
`;

const Inner = styled.h2`
  padding: 10px 20px;
  position: absolute;
  top: 0;
  left: -100%;
  text-wrap: no-wrap;
  animation: ${slide} 2s ease 500ms forwards;
  background: -webkit-linear-gradient(left, dodgerblue, cyan);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
