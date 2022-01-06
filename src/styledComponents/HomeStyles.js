import styled, { keyframes } from "styled-components";

export const Pending = styled.div`
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
  font-size: 20px;
  font-family: "Roboto slab", serif;
  text-align: center;
  line-height: 30px;
`;

export const Container = styled.div`
  background: black;
  box-shadow: 0px 14px 16px rgba(0, 0, 0, 0.4);
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  position: absolute;
  z-index: 2;
  border-bottom: 1px solid rgba(225, 225, 225, 0.7);
`;

export const BarIcon = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: block;
  } ;
`;

//sidebar

export const Menu = styled.div`
  list-style-type: none;
  overflow: hidden;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  width: 300px;
  top: 0;
  left: ${(props) => (props.open ? 0 : "-100%")};
  transition: 0.3s ease;
  z-index: 1000;
  height: 100vh;
  background: #222;
  padding-top: 10px;
  box-shadow: 10px 0px 16px rgba(0, 0, 0, 0.4);
  color: grey;

  & i {
    color: gray;
  }
  & ul > div:hover > div,
  & ul > div:hover > div i {
    color: white;
  }
  & .fa-arrow-right {
    color: white;
    padding-left: 10px;
  }
  & .close {
    text-align: center;
    padding-top: 30px;
  }
  @media (max-width: 420px) {
    width: 85%;
  }
`;

export const Inner = styled.div`
  & i {
    font-size: 20px;
    color: ${(props) => (props.title === props.active ? "white" : "gray")};
    color: ${(props) =>
      props.title === "Home" ? "rgb(255, 0, 56) !important" : ""};
  }
  & > div {
    color: ${(props) =>
      props.title === "Home" ? "rgb(255, 0, 56) !important" : ""};
    color: ${(props) => (props.title === props.active ? "white" : "grqy")};
  }
`;

export const Logo = styled.nav`
  font-family: "Roboto Slab", sans-serif;
  font-weight: 600;
  font-size: 24px;
  color: darkorange;
  letter-spacing: 1px;
  padding: 10px;
  &::selection {
    color: white;
    background: orange;
  }
`;

//Video

export const VideoWrap = styled.div`
  width: 90%;
  border-radius: 20px;
  margin: 60px auto;
  video {
    border-radius: 20px;
  }
  @media (min-width: 768px) {
    width: 700px;
  }
`;

export const CloseIcon = styled.div`
  width: 100%;
  & > button {
    float: right;
    margin: 20px;
    font-size: 20px;
    cursor: pointer;
  }
`;

//home

export const Wraper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  overflow: auto;
  @media (min-width: 550px) {
    height: auto !important;
  }
`;

export const LinearGradientText = styled.h2`
  background: -webkit-linear-gradient(left, dodgerblue, cyan);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 10px;
  text-align: center;
`;
