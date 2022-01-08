import { CardActionArea } from "@mui/material";
import React, { useEffect } from "react";
import Tilt from "react-parallax-tilt";
import styled, { keyframes, css } from "styled-components";

const Glass = React.forwardRef((props, ref) => {
  return (
    <Wrap>
      <Tilt style={{ backdropFilter: "blur(10px)" }}>
        <CardActionArea sx={{ color: "#f00", borderRaduis: "20px" }}>
          <Card {...props} ref={ref}>
            {props.children}
          </Card>
        </CardActionArea>
      </Tilt>
    </Wrap>
  );
});

export default Glass;

const Wrap = styled.div`
  width: 90%;
  @media (min-width: 628px) {
    width: 500px;
  }
`;

const fade = keyframes`
    to{
        opacity:1;
        transform:translateY(0);
    }
`;

const Card = styled.div`
  padding: 20px;
  background: linear-gradient(
    130deg,
    rgba(225, 225, 225, 0.1),
    rgba(225, 225, 225, 0.1),
    rgba(225, 0, 0, 0.9)
  );
  border-top: 1px solid rgba(225, 225, 225, 0.3);
  border-left: 1px solid rgba(225, 225, 225, 0.3);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4);
  border-radius: 10px;
  cursor: pointer;
  letter-spacing: 1px;
  word-spacing: 4px;
  line-height: 30px;
  color: white;
  margin: auto;
  width: 100%;
  position: relative;
  backdrop-filter: blur(10px);
  transform: translateY(40px);
  opacity: 0;
  font-size: 18px;
  animation: ${(props) =>
    props.animate
      ? css`
          ${fade} 2s ease forwards
        `
      : ""};
`;
