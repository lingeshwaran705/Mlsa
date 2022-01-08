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

const fade = keyframes`
    to{
        opacity:0;
    }
`;

const Wrap = styled.div`
  width: 100%;
  transform: ${(props) =>
    props.to === "right" ? "translateX(-200px)" : "translateX(200px)"};
  opacity: 0;
  animation: ${(props) =>
    props.animate
      ? css`
          ${slide} 1s ease forwards
        `
      : "${fade} 1s forwards"};
`;
