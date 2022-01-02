import React from "react";
import styled from "styled-components";

function Layer3d() {
  return (
    <Wraper>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </Wraper>
  );
}

export default Layer3d;

const Wraper = styled.div`
  span {
    width: 110px;
    height: 110px;
    background: rgba(255, 0, 56, 0.8);
    position: absolute;
    top: 70%;
    left: 50%;
  }
  & :nth-child(1) {
    transform: translate(-40px, -20px);
    background: rgba(255, 0, 56, 0.3);
  }
  & :nth-child(2) {
    transform: translate(-60px, -40px);
    background: rgba(255, 0, 56, 0.4);
  }
  & :nth-child(3) {
    transform: translate(-80px, -60px);
    background: rgba(255, 0, 56, 0.5);
  }
  & :nth-child(4) {
    background: rgba(255, 0, 56, 0.6);
    transform: translate(-100px, -80px);
  }
`;
