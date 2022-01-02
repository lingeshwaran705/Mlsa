import React from "react";
import styled, { keyframes, css } from "styled-components";
import { CardActionArea } from "@mui/material";
import { openSidebar } from "../features/home/sideBar";
import { useSelector, useDispatch } from "react-redux";

function FloatingActionButton() {
  const dispatch = useDispatch();
  const click = useSelector((state) => state.sidebar.value);

  const clickHandler = () => {
    dispatch(openSidebar(!click));
  };

  return (
    <Fab click={click}>
      <CardActionArea sx={{ color: "black" }}>
        <Wrap click={click} onClick={clickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </Wrap>
      </CardActionArea>
    </Fab>
  );
}

export default FloatingActionButton;

const Fade = keyframes`
  to{
    opacity:0;
    visibility:hidden;
  }
 
`;
const Fab = styled.div`
  position: fixed;
  bottom: 5vh;
  right: 5vh;
  overflow: hidden;
  z-index: 4;
  border-radius: 50%;
  border-top: 1px solid rgba(225, 225, 225, 0.2);
  border-left: 1px solid rgba(225, 225, 225, 0.2);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.5);
  transition: 1s;
  @media (max-width: 768px) {
    animation: ${(props) =>
      props.click
        ? css`
            ${Fade} 1s forwards ease
          `
        : ""};
  }
`;

const Wrap = styled.div`
  background: linear-gradient(-30deg, #333, black);
  width: 50px;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  span {
    background: linear-gradient(to right, dodgerblue, cyan);
    width: 40%;
    height: 3px;
    margin-bottom: 6px;
    transition: 0.3s;
    border-radius: 10px;
  }
  & :first-child {
    width: 50%;
    width: ${(props) => (props.click ? "100%" : "50%")};

    transform: ${(props) => (props.click ? "rotate(-45deg)" : "rotate(0)")};
  }
  & :nth-child(2) {
    width: 80%;
    transform: ${(props) =>
      props.click ? "translateX(-150%)" : "translateX(0)"};
  }
  & :last-child {
    margin: 0;
    width: ${(props) => (props.click ? "100%" : "30%")};
    transform: ${(props) => (props.click ? "rotate(-45deg)" : "rotate(0)")};
  }
`;
