import React, { useEffect, useState, useRef } from "react";
import styled, { keyframes, css } from "styled-components";
import Logo from "./animations/Logo";
import Glass from "./animations/Glass";
import Arrow from "./animations/Arrow";
import Info from "./Info";
import { useSelector } from "react-redux";

function Motive() {
  const scroll = useSelector((state) => state.scroll.value);
  const logoRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const objective =
    "The main objective of this community is to create an enormous platform for the students to learn, apply and develop new applications across various domain to enhance the knowledge of the students so that in one fine day they can handle the problems with suitable solutions in real-time.";

  useEffect(() => {
    if (logoRef.current) {
      const logoPosition = logoRef.current.getBoundingClientRect().top;
      if (logoPosition < scroll.screenHeight - 20) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    }
  }, [scroll.scrollY]);

  return (
    <Card id="motive">
      <Logo animate={animate} ref={logoRef} colorIndex={0} text="About us" />
      <Glass toRight ball>
        <Info />
      </Glass>
      <Glass>{objective}</Glass>
    </Card>
  );
}

export default Motive;

const Card = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap:wrap;
  backdrop-filter: blur(10px);
  overflow-x: hidden;
  &::before {
    content: "";
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: linear-gradient(130deg, blue, cyan);
    position: absolute;
    top: -15%;
    right: -14%;
    @media (max-width: 768px) {
      top: -15%;
      right: -15%;
    }
    @media (max-width: 600px) {
      right: -30%;
    }
    @media (max-width: 460px) {
      top:60%;
      right: -40%;
    }
  }  
  }
  @media (max-width: 860px){
    height:auto;
    padding:80px 0;
  }
`;
