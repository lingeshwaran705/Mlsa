import React from "react";
import styled, { keyframes, css } from "styled-components";

const Fade = React.forwardRef((props, ref) => {
  return (
    <Container ref={ref} {...props}>
      {props.children}
    </Container>
  );
});

export default Fade;

const fade = keyframes`
from{
  opacity:0;
  transform:translateY(50px);
}
    to{
        opacity:1;
        transform: translate(0);
    }
`;

const fadeOut = keyframes`
    to{
      opacity:0;
    }
`;

const Container = styled.div`
  font-family: ${(props) => (props.heading ? "Roboto Slab, serif" : "")};
  width: 100%;
  color: white;
  text-align: ${(props) => (props.heading ? "center" : "")};
  font-size: 18px;
  padding: 10px;
  opacity: 0;
  transform: translateY(30px);
  letter-spacing: 1px;
  word-spacing: 4px;
  line-height: 25px;
  animation: ${(props) =>
    props.animate
      ? css`
          ${fade} 2s ease ${props.delay} forwards;
        `
      : ""};
`;
