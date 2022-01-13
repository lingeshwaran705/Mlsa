import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { useSelector } from "react-redux";

function Layer3d() {
  const state = useSelector((state) => state.sidebar.value);

  const [sidebar, setSidebar] = useState(state);

  useEffect(() => {
    setTimeout(() => {
      setSidebar(state);
    }, 150);
  }, [state]);

  return (
    <Wraper sidebar={sidebar}>
      <span></span>
      <span></span>
      <span></span>
      <span>
        MLSA <br /> SREC
      </span>
    </Wraper>
  );
}

export default Layer3d;

const move1 = keyframes`
  to{
    transform: translate(-40px, -20px);
  }
  `;
const move2 = keyframes`
  to{
    transform: translate(-60px, -40px);
  }
  `;
const move3 = keyframes`
  to{
    transform: translate(-80px, -60px);
  }
  `;
const move4 = keyframes`
  to{
    transform: translate(-100px, -80px);
  }
  `;

const Wraper = styled.div`
  span {
    width: 110px;
    height: 110px;
    background: rgba(255, 0, 56, 0.8);
    position: absolute;
    top: ${(props) => (props.sidebar ? "75%" : "100%")};
    left: ${(props) => (props.sidebar ? "50%" : "100%")};
    color: white;
    letter-spacing: 2px;
    font-family: "Roboto slab", serif;
    text-align: center;
    font-size: 20px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.3);
    transform: rotate(20deg);
  }
  & :nth-child(1) {
    background: rgba(255, 0, 56, 0.3);
    transition: 1s;
    animation: ${(props) =>
      props.sidebar
        ? css`
            ${move1} 2s forwards
          `
        : ""};
  }
  & :nth-child(2) {
    background: rgba(255, 0, 56, 0.4);
    transition: 1s;
    animation: ${(props) =>
      props.sidebar
        ? css`
            ${move2} 2s forwards
          `
        : ""};
  }
  & :nth-child(3) {
    background: rgba(255, 0, 56, 0.5);
    transition: 1s;
    animation: ${(props) =>
      props.sidebar
        ? css`
            ${move3} 2s forwards
          `
        : ""};
  }
  & :nth-child(4) {
    background: rgba(255, 0, 56, 0.6);
    transition: 1s;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: ${(props) =>
      props.sidebar
        ? css`
            ${move4} 2s forwards
          `
        : ""};
  }
`;
