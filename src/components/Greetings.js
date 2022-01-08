import React, { useState, useEffect } from "react";
import styled, { keyframes, css } from "styled-components";
import { HighLight } from "../styledComponents/HomeStyles";

function Greetings(props) {
  const [hour, setHour] = useState();
  const [greetTxt, setGreetTxt] = useState("");

  useEffect(() => {
    if (hour < 12) setGreetTxt(" Good Morning");
    else if (hour < 15) setGreetTxt(" Good Afternoon");
    else if (hour < 24) setGreetTxt(" Good Evening");
  }, [hour]);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setHour(date.getHours());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Wraper animate={props.animate}>
      <h1>
        Hey There!{" "}
        <HighLight greet>
          <span>{greetTxt}</span>
        </HighLight>
      </h1>
    </Wraper>
  );
}

export default Greetings;

const slide = keyframes`
    to{
        right:0%;
    }
`;

const zoom = keyframes`
    to{
        transform:scale(4) rotate(-30deg);
        opacity:0;
    }
`;

const hide = keyframes`
    to{
      visibility:hidden;
    }
`;

const Wraper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  transition: 0.3s;
  animation: ${(props) =>
    props.animate
      ? css`
          ${hide} 1s ease 5s forwards
        `
      : ""};
  h1 {
    color: white;
    position: absolute;
    width: 100%;
    top: 50%;
    right: -100%;
    text-wrap: no-wrap;
    text-align: center;
    transition: 0.3s;
    font-family: "Roboto Slab", serif;
    letter-spacing: 2px;
    padding: 10px;
    @media (max-width: 500px) {
      font-size: 25px;
    }
    @media (max-width: 400px) {
      font-size: 18px;
      padding: 3px;
    }

    animation: ${(props) =>
      props.animate
        ? css`
            ${slide} 2s ease 1s forwards, ${zoom} 3s ease 4s forwards
          `
        : ""};
  }
`;
