import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function Backdrop() {
  const state = useSelector((state) => state.sidebar.value);
  return <Wrap open={state}></Wrap>;
}

export default Backdrop;

const Wrap = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
`;
