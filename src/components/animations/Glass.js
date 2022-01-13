import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import { useSelector } from "react-redux";
export const Context = React.createContext(null);

const Glass = (props) => {
  const scroll = useSelector((state) => state.scroll.value);
  const slideRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (slideRef.current) {
      const cardPosition = slideRef.current.getBoundingClientRect().top;
      if (cardPosition < scroll.screenHeight) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  }, [scroll.scrollY]);

  return (
    <Context.Provider value={animate}>
      <Card {...props} animate={animate} ref={slideRef}>
        {props.children}
      </Card>
    </Context.Provider>
  );
};

export default React.memo(Glass);

const slide = keyframes`
    to{
        opacity:1;
        transform:translate(0);
    }
`;

const blink = keyframes`
  50%{
    opacity:1;
    box-shadow: 0px 0px 16px 2px cyan;
    transform : scale(1);
  }
`;

const Card = styled.section`
  padding: 20px;
  background: linear-gradient(
    130deg,
    rgba(225, 225, 225, 0.1),
    rgba(225, 225, 225, 0.3)
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
  width: 40.99999%;
  position: relative;
  backdrop-filter: blur(10px);
  transform: ${(props) =>
    props.toRight ? "translateX(-100px)" : "translateX(100px)"};
  opacity: 0;
  font-size: 18px;
  animation: ${(props) =>
    props.animate
      ? css`
          ${slide} 1s ease forwards
        `
      : ""};

  @media (max-width: 860px) {
    width: 80%;
    margin: 30px auto;
  }

  &::before {
    content: "";
    background: linear-gradient(130deg, blue, cyan);
    display: ${(props) => (props.ball ? "block" : "none")};
    position: absolute;
    top: 50%;
    left: 10%;
    width: 100px;
    height: 100px;
    animation: ${blink} 4s infinite;
    transition: 0.3s;
    opacity: 0;
    border-radius: 50%;
    z-index: -1;
    filter: blur(10px);
    transform: scale(0.8);
  }
`;
