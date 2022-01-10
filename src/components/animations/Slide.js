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
from{
  opacity:0;
}
    to{
        opacity:1;
        transform:translate(0);
    }
`;

const fade = keyframes`
    from{
      opacity:1;
    }
    to{
      opacity:0 !important;
    }
`;

const Wrap = styled.div`
  transform: ${(props) =>
    props.right ? "translateX(-200px)" : "translateX(200px)"};
  ${(props) =>
    props.animate
      ? css`
          animation: ${slide} 1s ease forwards;
        `
      : css`
          animation: ${fade} 1s ease forwards;
        `};
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
