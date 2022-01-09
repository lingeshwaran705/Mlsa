import React from "react";
import styled, { keyframes, css } from "styled-components";

const Slide = React.forwardRef((props, ref) => {
  return (
    <Wrap ref={ref} {...props}>
      {props.children}
    </Wrap>
  );
});

export default Slide;

const slide = keyframes`
    to{
        opacity:1;
        transform:translate(0);
    }
`;

const Wrap = styled.div`
  transform: ${(props) =>
    props.right ? "translateX(-200px)" : "translateX(200px)"};
  opacity: ${(props) => (props.animate ? "" : "0")};
  trasition: all 0.5s;
  animation: ${(props) =>
    props.animate
      ? css`
          ${slide} 1s ease forwards
        `
      : ""};
  @media (max-width: 768px) {
    width: 100%;
    margin: 0;
  }
  margin: 30px;
  backdrop-filter: blur(10px);
  &::after {
    content: "";
    width: 100px;
    height: 100px;
    background: linear-gradient(20deg, cyan, blue);
    border-radius: 50%;
    position: absolute;
    top: 60%;
    left: 20%;
    transform: rotate(90deg);
    z-index: -1;
    @media (max-width: 768px) {
      display: none;
    }
  }
`;
