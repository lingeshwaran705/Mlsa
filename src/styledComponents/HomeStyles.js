import styled from "styled-components";

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

// * navbar

export const NavBar = styled.ul`
  list-style-type: none;
  overflow: hidden;
  display: flex;
  align-items: start;
  justify-content: space-between;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const NavLink = styled.li`
  padding: 10px 16px;
  transition: all 0.4s;
  cursor: pointer;
  color: ${(props) => (props.active === props.title ? "#fff" : "#aaa")};
  letter-spacing: 1;
  font-family: "Roboto Slab", serif;
  &:hover {
    color: #fff;
  }

  &::after {
    content: "";
    width: ${(props) => (props.title === props.active ? "100%" : "0")};
    height: 2px;
    background: orange;
    display: block;
    margin: auto;
    transition: 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(5px);
  box-shadow: 0px 14px 16px rgba(0, 0, 0, 0.4);
  width: 100%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  position: fixed;
  top: 0;
  left: 0;
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

export const Wraper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Menu = styled.div`
  list-style-type: none;
  overflow: hidden;
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 300px;
  top: 0;
  left: ${(props) => (props.open ? 0 : "-100%")};
  transition: 0.3s ease;
  z-index: 3;
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
    color: ${(props) => (props.title === "Home" ? "orange !important" : "")};
  }
  & > div {
    font-size: 20px;
    color: ${(props) => (props.title === "Home" ? "orange !important" : "")};
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

export const Footer = styled.div`
  width: 100%;
  height: 20vh;
  background: linear-gradient(40deg, dodgerblue, #f0f);
  position: relative;
  text-align: justify;
  & .glass {
    width: 95%;
    background: rgba(225, 225, 225, 0.1);
    color: white;
    margin: auto;
    height: 35vh;
    font-family: "Roboto Slab", serif;
    letter-spacing: 2px;
    word-spacing: 3px;
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-left: 2px solid rgba(225, 225, 225, 0.4);
    border-top: 2px solid rgba(225, 225, 225, 0.3);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    backdrop-filter: blur(2px);
  }
`;
