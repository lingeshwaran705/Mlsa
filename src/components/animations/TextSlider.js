import React from "react";
import styled, { keyframes, css } from "styled-components";

function TextSlider(props) {
  return <ListItem {...props}>{props.children}</ListItem>;
}

export default TextSlider;

const slide = keyframes`
    to{
        transform:translate(0);
        opacity:1;
    }
`;

const ListItem = styled.li`
  list-style-type: none;
  padding: 10px;
  letter-spacing: 1px;
  opacity: 0;
  width: 100%;
  display: block;
  transform: ${(props) => css`translate(-${props.id * 80}px)`};
  animation: ${(props) =>
    props.animate
      ? css`
          ${slide} ${props.id * 0.3}s forwards
        `
      : ""};
`;
