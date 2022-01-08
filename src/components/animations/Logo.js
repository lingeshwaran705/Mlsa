import React from "react";
import styled, { keyframes, css } from "styled-components";

const data = [
  {
    color: "blue",
    start: "blue",
    end: "cyan",
  },
  {
    color: "#f00",
    start: "#f00",
    end: "#f0f",
  },
  {
    color: "darkorange",
    start: "darkorange",
    end: "#f00",
  },
  {
    color: "orangered",
    start: "orangered",
    end: "yellow",
  },
  {
    color: "dodgerblue",
    start: "dodgerblue",
    end: "darkorchid",
  },
];

const Logo = React.forwardRef((props, ref) => {
  return (
    <>
      <Container ref={ref} {...props}>
        <Inner {...props}>{props.text}</Inner>
      </Container>
    </>
  );
});

export default Logo;

const slide = keyframes`
from{
  left: -100%;

}
    to{
        left:0%;
    }
`;

const Grow = keyframes`
from{
  height:0;
}
    to{
    transition: all 0.5s;
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
    background: ${(props) => data[props.colorIndex].color};
    display: block;
    border-radius: 20px;
    animation: ${(props) =>
      props.animate
        ? css`
            ${Grow} 500ms ease-in-out 100ms  forwards
          `
        : ""}
`;

const Inner = styled.h3`
  padding: 10px 20px;
  position: absolute;
  top: 0;
  left: -100%;
  text-wrap: no-wrap;
  font-family: "Roboto Slab", serif;
  font-weight: 600;
  animation: ${(props) =>
    props.animate
      ? css`
          ${slide} 2s ease 100ms forwards
        `
      : ""};
  background: ${(props) =>
    css`-webkit-linear-gradient(left, ${data[props.colorIndex].start}, ${
      data[props.colorIndex].end
    })`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
